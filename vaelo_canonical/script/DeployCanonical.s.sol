// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";

import {VaelorynToken} from "../src/VaelorynToken.sol";
import {VaelorynFounderVesting} from "../src/VaelorynFounderVesting.sol";
import {VaelorynGenesisDistribution} from "../src/VaelorynGenesisDistribution.sol";
import {VaelorynDeploymentFactory} from "../src/VaelorynDeploymentFactory.sol";

/**
 * @notice Base Sepolia practice deployment preparation only. This script does
 *      not define the canonical Mainnet launch timestamp and must not be
 *      treated as a production deployment path.
 * @dev This practice-only path derives T0 from the current Base Sepolia block.
 *      It does not run automatically and must not be broadcast until the
 *      recipient configuration and test evidence are reviewed and approved.
 *
 * Required environment variables:
 * - PRIVATE_KEY
 * - VAELO_ECOSYSTEM_RECIPIENT
 * - VAELO_PUBLIC_DISTRIBUTION_RECIPIENT
 * - VAELO_TREASURY_RECIPIENT
 * - VAELO_TEAM_RECIPIENT
 * - VAELO_STRATEGIC_PARTNERSHIPS_RECIPIENT
 * - VAELO_FOUNDER_BENEFICIARY
 */
contract DeployCanonical is Script {
    uint256 internal constant BASE_SEPOLIA_CHAIN_ID = 84_532;

    error IncorrectNetwork(uint256 actualChainId);

    function run()
        external
        returns (
            VaelorynToken token,
            VaelorynGenesisDistribution distribution,
            VaelorynFounderVesting vesting
        )
    {
        if (block.chainid != BASE_SEPOLIA_CHAIN_ID) {
            revert IncorrectNetwork(block.chainid);
        }

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address ecosystemRecipient = vm.envAddress("VAELO_ECOSYSTEM_RECIPIENT");
        address publicDistributionRecipient = vm.envAddress(
            "VAELO_PUBLIC_DISTRIBUTION_RECIPIENT"
        );
        address treasuryRecipient = vm.envAddress("VAELO_TREASURY_RECIPIENT");
        address teamRecipient = vm.envAddress("VAELO_TEAM_RECIPIENT");
        address strategicPartnershipsRecipient = vm.envAddress(
            "VAELO_STRATEGIC_PARTNERSHIPS_RECIPIENT"
        );
        address founderBeneficiary = vm.envAddress("VAELO_FOUNDER_BENEFICIARY");
        uint256 practiceLaunchTimestamp = block.timestamp;

        vm.startBroadcast(deployerPrivateKey);
        VaelorynDeploymentFactory factory = new VaelorynDeploymentFactory(
            ecosystemRecipient,
            publicDistributionRecipient,
            treasuryRecipient,
            teamRecipient,
            strategicPartnershipsRecipient,
            founderBeneficiary,
            practiceLaunchTimestamp
        );
        vm.stopBroadcast();

        token = factory.token();
        distribution = factory.distribution();
        vesting = factory.vesting();

        console2.log("PRACTICE ONLY — Base Sepolia factory:", address(factory));
        console2.log("PRACTICE ONLY — Base Sepolia VAELO:", address(token));
        console2.log("PRACTICE ONLY — Genesis Distribution:", address(distribution));
        console2.log("PRACTICE ONLY — Founder Vesting:", address(vesting));
        console2.log("Practice T0 (current Sepolia block):", vesting.startTimestamp());
        console2.log("Founder vesting end:", vesting.linearEndTimestamp());
    }
}
