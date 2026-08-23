// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface ICanonicalVaelorynToken {
    function TOTAL_SUPPLY() external view returns (uint256);
    function genesisDistribution() external view returns (address);
}

interface ICanonicalFounderVesting {
    function vaelo() external view returns (IERC20);
    function TOTAL_ALLOCATION() external view returns (uint256);
}

/**
 * @title VaelorynGenesisDistribution
 * @notice Auditable one-time distribution of the complete canonical VAELO
 *         genesis supply across all six approved allocations.
 *
 * The token is minted directly to this contract. The immutable deployment
 * factory completes allocation atomically while deploying the canonical
 * token and vesting contracts, preventing a front-runner from substituting
 * a getter-compatible but unsafe founder recipient.
 */
contract VaelorynGenesisDistribution {
    using SafeERC20 for IERC20;

    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 ether;
    uint256 public constant ECOSYSTEM_AND_COMMUNITY = 300_000_000 ether;
    uint256 public constant PUBLIC_DISTRIBUTION = 200_000_000 ether;
    uint256 public constant VAELORYN_TREASURY = 200_000_000 ether;
    uint256 public constant TEAM_AND_CONTRIBUTORS = 150_000_000 ether;
    uint256 public constant FOUNDER = 100_000_000 ether;
    uint256 public constant STRATEGIC_PARTNERSHIPS = 50_000_000 ether;

    bytes32 public constant ECOSYSTEM_AND_COMMUNITY_CATEGORY =
        keccak256("Ecosystem & Community");
    bytes32 public constant PUBLIC_DISTRIBUTION_CATEGORY =
        keccak256("Public Distribution");
    bytes32 public constant VAELORYN_TREASURY_CATEGORY =
        keccak256("Vaeloryn Treasury");
    bytes32 public constant TEAM_AND_CONTRIBUTORS_CATEGORY =
        keccak256("Team & Contributors");
    bytes32 public constant FOUNDER_CATEGORY = keccak256("Founder");
    bytes32 public constant STRATEGIC_PARTNERSHIPS_CATEGORY =
        keccak256("Strategic Partnerships");

    address public immutable ecosystemRecipient;
    address public immutable publicDistributionRecipient;
    address public immutable vaelorynTreasuryRecipient;
    address public immutable teamAndContributorsRecipient;
    address public immutable strategicPartnershipsRecipient;
    address public immutable deploymentFactory;

    address public founderVestingRecipient;
    bool public allocationCompleted;

    error InvalidRecipient();
    error InvalidToken();
    error TokenNotCanonical();
    error InvalidFounderVesting();
    error OnlyDeploymentFactory();
    error AllocationAlreadyCompleted();
    error FullSupplyRequired();

    event GenesisAllocation(
        address indexed token,
        bytes32 indexed category,
        address indexed recipient,
        uint256 amount
    );
    event GenesisAllocated(address indexed token, address indexed founderVesting);

    constructor(
        address ecosystemRecipient_,
        address publicDistributionRecipient_,
        address vaelorynTreasuryRecipient_,
        address teamAndContributorsRecipient_,
        address strategicPartnershipsRecipient_
    ) {
        if (
            ecosystemRecipient_ == address(0) ||
            publicDistributionRecipient_ == address(0) ||
            vaelorynTreasuryRecipient_ == address(0) ||
            teamAndContributorsRecipient_ == address(0) ||
            strategicPartnershipsRecipient_ == address(0)
        ) {
            revert InvalidRecipient();
        }

        ecosystemRecipient = ecosystemRecipient_;
        publicDistributionRecipient = publicDistributionRecipient_;
        vaelorynTreasuryRecipient = vaelorynTreasuryRecipient_;
        teamAndContributorsRecipient = teamAndContributorsRecipient_;
        strategicPartnershipsRecipient = strategicPartnershipsRecipient_;
        deploymentFactory = msg.sender;
    }

    function allocateGenesis(address token, address founderVesting) external {
        if (msg.sender != deploymentFactory) {
            revert OnlyDeploymentFactory();
        }
        if (allocationCompleted) {
            revert AllocationAlreadyCompleted();
        }
        if (token == address(0)) {
            revert InvalidToken();
        }
        if (founderVesting == address(0)) {
            revert InvalidFounderVesting();
        }

        ICanonicalVaelorynToken canonicalToken = ICanonicalVaelorynToken(token);
        if (
            canonicalToken.TOTAL_SUPPLY() != TOTAL_SUPPLY ||
            canonicalToken.genesisDistribution() != address(this)
        ) {
            revert TokenNotCanonical();
        }

        ICanonicalFounderVesting vesting = ICanonicalFounderVesting(founderVesting);
        if (
            address(vesting.vaelo()) != token ||
            vesting.TOTAL_ALLOCATION() != FOUNDER
        ) {
            revert InvalidFounderVesting();
        }

        IERC20 vaelo = IERC20(token);
        if (vaelo.totalSupply() != TOTAL_SUPPLY || vaelo.balanceOf(address(this)) != TOTAL_SUPPLY) {
            revert FullSupplyRequired();
        }

        allocationCompleted = true;
        founderVestingRecipient = founderVesting;

        _allocate(
            vaelo,
            ECOSYSTEM_AND_COMMUNITY_CATEGORY,
            ecosystemRecipient,
            ECOSYSTEM_AND_COMMUNITY
        );
        _allocate(
            vaelo,
            PUBLIC_DISTRIBUTION_CATEGORY,
            publicDistributionRecipient,
            PUBLIC_DISTRIBUTION
        );
        _allocate(
            vaelo,
            VAELORYN_TREASURY_CATEGORY,
            vaelorynTreasuryRecipient,
            VAELORYN_TREASURY
        );
        _allocate(
            vaelo,
            TEAM_AND_CONTRIBUTORS_CATEGORY,
            teamAndContributorsRecipient,
            TEAM_AND_CONTRIBUTORS
        );
        _allocate(vaelo, FOUNDER_CATEGORY, founderVesting, FOUNDER);
        _allocate(
            vaelo,
            STRATEGIC_PARTNERSHIPS_CATEGORY,
            strategicPartnershipsRecipient,
            STRATEGIC_PARTNERSHIPS
        );

        emit GenesisAllocated(token, founderVesting);
    }

    function _allocate(
        IERC20 token,
        bytes32 category,
        address recipient,
        uint256 amount
    ) private {
        token.safeTransfer(recipient, amount);
        emit GenesisAllocation(address(token), category, recipient, amount);
    }
}
