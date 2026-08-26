// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";

import {VaelorynToken} from "../src/VaelorynToken.sol";
import {VaelorynFounderVesting} from "../src/VaelorynFounderVesting.sol";
import {VaelorynGenesisDistribution} from "../src/VaelorynGenesisDistribution.sol";
import {VaelorynDeploymentFactory} from "../src/VaelorynDeploymentFactory.sol";

/**
 * @notice Reviewed Base Mainnet deployment preparation for the canonical VAELO protocol.
 * @dev This script is intentionally isolated from the Base Sepolia preparation script.
 *      It has no fallback network and must only be broadcast after written authorization.
 *
 * Required environment variables:
 * - DEPLOYER_PRIVATE_KEY
 * - VAELO_ECOSYSTEM_RECIPIENT
 * - VAELO_PUBLIC_DISTRIBUTION_RECIPIENT
 * - VAELO_TREASURY_RECIPIENT
 * - VAELO_TEAM_RECIPIENT
 * - VAELO_STRATEGIC_PARTNERSHIPS_RECIPIENT
 * - VAELO_FOUNDER_BENEFICIARY
 *
 * The public recipient addresses are compared against the approved Mainnet
 * values below before broadcasting. No key, RPC URL, or API key is stored here.
 */
contract DeployCanonicalMainnet is Script {
    uint256 internal constant BASE_MAINNET_CHAIN_ID = 8_453;

    address internal constant APPROVED_ECOSYSTEM_RECIPIENT = 0x43dF3281C2Cc960cD2837a153Ec397a2b67e18a7;
    address internal constant APPROVED_PUBLIC_DISTRIBUTION_RECIPIENT = 0x653835dc0fF216D2B10fF64153A9aA6A0639Fb82;
    address internal constant APPROVED_TREASURY_SAFE = 0x3A9bee20360294F8439513Ae70D189f56288baF2;
    address internal constant APPROVED_TEAM_RECIPIENT = 0x2fB598d102303E5c0E7D36Db94CFBC76a680c7F4;
    address internal constant APPROVED_STRATEGIC_PARTNERSHIPS_RECIPIENT = 0xC263222BB55289D0a442871aF04A5065f87e9D87;
    address internal constant APPROVED_FOUNDER_BENEFICIARY = 0x254D5eE9D7216bB8601B5D2156072863A975b309;

    error IncorrectNetwork(uint256 actualChainId);
    error InvalidDeployerKey();
    error UnexpectedRecipient(bytes32 role, address actual);
    error DeploymentReadbackFailed();

    function run() external returns (VaelorynDeploymentFactory factory, VaelorynToken token, VaelorynGenesisDistribution distribution, VaelorynFounderVesting vesting) {
        if (block.chainid != BASE_MAINNET_CHAIN_ID) {
            revert IncorrectNetwork(block.chainid);
        }

        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        if (deployerPrivateKey == 0) {
            revert InvalidDeployerKey();
        }

        address ecosystemRecipient = vm.envAddress("VAELO_ECOSYSTEM_RECIPIENT");
        address publicDistributionRecipient = vm.envAddress("VAELO_PUBLIC_DISTRIBUTION_RECIPIENT");
        address treasuryRecipient = vm.envAddress("VAELO_TREASURY_RECIPIENT");
        address teamRecipient = vm.envAddress("VAELO_TEAM_RECIPIENT");
        address strategicPartnershipsRecipient = vm.envAddress("VAELO_STRATEGIC_PARTNERSHIPS_RECIPIENT");
        address founderBeneficiary = vm.envAddress("VAELO_FOUNDER_BENEFICIARY");

        _validateApprovedRecipients(ecosystemRecipient, publicDistributionRecipient, treasuryRecipient, teamRecipient, strategicPartnershipsRecipient, founderBeneficiary);

        vm.startBroadcast(deployerPrivateKey);
        factory = new VaelorynDeploymentFactory(ecosystemRecipient, publicDistributionRecipient, treasuryRecipient, teamRecipient, strategicPartnershipsRecipient, founderBeneficiary);
        vm.stopBroadcast();

        token = factory.token();
        distribution = factory.distribution();
        vesting = factory.vesting();

        _validateDeploymentReadback(factory, token, distribution, vesting, founderBeneficiary);

        console2.log("Canonical Mainnet deployment factory:", address(factory));
        console2.log("Canonical Mainnet VAELO token:", address(token));
        console2.log("Canonical Mainnet Genesis Distribution:", address(distribution));
        console2.log("Canonical Mainnet Founder Vesting:", address(vesting));
        console2.log("Founder vesting T0:", vesting.startTimestamp());
        console2.log("Founder vesting end:", vesting.linearEndTimestamp());
    }

    function _validateApprovedRecipients(
        address ecosystemRecipient,
        address publicDistributionRecipient,
        address treasuryRecipient,
        address teamRecipient,
        address strategicPartnershipsRecipient,
        address founderBeneficiary
    ) private pure {
        if (ecosystemRecipient != APPROVED_ECOSYSTEM_RECIPIENT) {
            revert UnexpectedRecipient("ECOSYSTEM", ecosystemRecipient);
        }
        if (publicDistributionRecipient != APPROVED_PUBLIC_DISTRIBUTION_RECIPIENT) {
            revert UnexpectedRecipient("PUBLIC_DISTRIBUTION", publicDistributionRecipient);
        }
        if (treasuryRecipient != APPROVED_TREASURY_SAFE) {
            revert UnexpectedRecipient("TREASURY_SAFE", treasuryRecipient);
        }
        if (teamRecipient != APPROVED_TEAM_RECIPIENT) {
            revert UnexpectedRecipient("TEAM", teamRecipient);
        }
        if (strategicPartnershipsRecipient != APPROVED_STRATEGIC_PARTNERSHIPS_RECIPIENT) {
            revert UnexpectedRecipient("STRATEGIC_PARTNERSHIPS", strategicPartnershipsRecipient);
        }
        if (founderBeneficiary != APPROVED_FOUNDER_BENEFICIARY) {
            revert UnexpectedRecipient("FOUNDER", founderBeneficiary);
        }
    }

    function _validateDeploymentReadback(VaelorynDeploymentFactory factory, VaelorynToken token, VaelorynGenesisDistribution distribution, VaelorynFounderVesting vesting, address founderBeneficiary)
        private
        view
    {
        if (
            address(factory) == address(0) || address(token) == address(0) || address(distribution) == address(0) || address(vesting) == address(0)
                || token.genesisDistribution() != address(distribution) || distribution.deploymentFactory() != address(factory) || distribution.founderVestingRecipient() != address(vesting)
                || !distribution.allocationCompleted() || vesting.beneficiary() != founderBeneficiary || address(vesting.vaelo()) != address(token) || token.totalSupply() != token.TOTAL_SUPPLY()
                || token.balanceOf(address(distribution)) != 0 || distribution.ecosystemRecipient() != APPROVED_ECOSYSTEM_RECIPIENT
                || distribution.publicDistributionRecipient() != APPROVED_PUBLIC_DISTRIBUTION_RECIPIENT || distribution.vaelorynTreasuryRecipient() != APPROVED_TREASURY_SAFE
                || distribution.teamAndContributorsRecipient() != APPROVED_TEAM_RECIPIENT || distribution.strategicPartnershipsRecipient() != APPROVED_STRATEGIC_PARTNERSHIPS_RECIPIENT
                || token.balanceOf(APPROVED_ECOSYSTEM_RECIPIENT) != distribution.ECOSYSTEM_AND_COMMUNITY() || token.balanceOf(APPROVED_PUBLIC_DISTRIBUTION_RECIPIENT) != distribution.PUBLIC_DISTRIBUTION()
                || token.balanceOf(APPROVED_TREASURY_SAFE) != distribution.VAELORYN_TREASURY() || token.balanceOf(APPROVED_TEAM_RECIPIENT) != distribution.TEAM_AND_CONTRIBUTORS()
                || token.balanceOf(address(vesting)) != distribution.FOUNDER() || token.balanceOf(APPROVED_STRATEGIC_PARTNERSHIPS_RECIPIENT) != distribution.STRATEGIC_PARTNERSHIPS()
                || vesting.TOTAL_ALLOCATION() != distribution.FOUNDER()
        ) {
            revert DeploymentReadbackFailed();
        }
    }
}
