// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {VaelorynToken} from "./VaelorynToken.sol";
import {VaelorynFounderVesting} from "./VaelorynFounderVesting.sol";
import {VaelorynGenesisDistribution} from "./VaelorynGenesisDistribution.sol";

/**
 * @title VaelorynDeploymentFactory
 * @notice One-shot atomic deployment of a canonical VAELO instance.
 * @dev This contract has no owner, admin, upgrade, token custody or mutable
 *      configuration. Its constructor deploys one distribution, token and
 *      founder vesting contract, then completes the one-time Genesis
 *      allocation inside the same transaction. It has no callable function
 *      that can deploy a second instance.
 */
contract VaelorynDeploymentFactory {
    event CanonicalProtocolDeployed(
        address indexed token,
        address indexed genesisDistribution,
        address indexed founderVesting,
        address founderBeneficiary,
        uint256 startTimestamp
    );

    VaelorynToken public immutable token;
    VaelorynGenesisDistribution public immutable distribution;
    VaelorynFounderVesting public immutable vesting;
    uint256 public immutable officialLaunchTimestamp;

    constructor(
        address ecosystemRecipient,
        address publicDistributionRecipient,
        address vaelorynTreasuryRecipient,
        address teamAndContributorsRecipient,
        address strategicPartnershipsRecipient,
        address founderBeneficiary,
        uint256 officialLaunchTimestamp_
    )
    {
        if (officialLaunchTimestamp_ == 0) {
            revert InvalidLaunchTimestamp();
        }

        officialLaunchTimestamp = officialLaunchTimestamp_;
        distribution = new VaelorynGenesisDistribution(
            ecosystemRecipient,
            publicDistributionRecipient,
            vaelorynTreasuryRecipient,
            teamAndContributorsRecipient,
            strategicPartnershipsRecipient
        );
        token = new VaelorynToken(address(distribution));
        vesting = new VaelorynFounderVesting(
            address(token),
            founderBeneficiary,
            officialLaunchTimestamp_
        );

        distribution.allocateGenesis(address(token), address(vesting));

        emit CanonicalProtocolDeployed(
            address(token),
            address(distribution),
            address(vesting),
            founderBeneficiary,
            officialLaunchTimestamp_
        );
    }

    error InvalidLaunchTimestamp();
}
