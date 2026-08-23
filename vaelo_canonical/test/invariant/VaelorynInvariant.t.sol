// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {StdInvariant} from "forge-std/StdInvariant.sol";
import {Test} from "forge-std/Test.sol";

import {VaelorynToken} from "../../src/VaelorynToken.sol";
import {VaelorynFounderVesting} from "../../src/VaelorynFounderVesting.sol";
import {VaelorynGenesisDistribution} from "../../src/VaelorynGenesisDistribution.sol";

contract VestingHandler is Test {
    VaelorynFounderVesting internal immutable vesting;
    uint256 internal immutable start;
    uint256 internal immutable end;

    constructor(VaelorynFounderVesting vesting_) {
        vesting = vesting_;
        start = vesting_.startTimestamp();
        end = vesting_.linearEndTimestamp() + 365 days;
    }

    function warpTo(uint256 timestamp) external {
        uint256 target = bound(timestamp, start, end);
        if (target > block.timestamp) {
            vm.warp(target);
        }
    }

    function release() external {
        try vesting.release() {} catch {}
    }
}

contract VaelorynInvariantTest is StdInvariant, Test {
    VaelorynToken internal token;
    VaelorynFounderVesting internal vesting;
    VestingHandler internal handler;

    function setUp() public {
        address ecosystem = makeAddr("ecosystem");
        address publicDistribution = makeAddr("publicDistribution");
        address treasury = makeAddr("treasury");
        address team = makeAddr("team");
        address strategic = makeAddr("strategic");
        address founder = makeAddr("founder");

        VaelorynGenesisDistribution distribution = new VaelorynGenesisDistribution(
            ecosystem,
            publicDistribution,
            treasury,
            team,
            strategic
        );
        token = new VaelorynToken(address(distribution));
        vesting = new VaelorynFounderVesting(address(token), founder, block.timestamp + 1 days);
        distribution.allocateGenesis(address(token), address(vesting));

        handler = new VestingHandler(vesting);
        targetContract(address(handler));
    }

    function invariantFounderVestingIsAlwaysCapped() public view {
        assertLe(vesting.vestedAmount(block.timestamp), vesting.TOTAL_ALLOCATION());
        assertLe(vesting.released(), vesting.TOTAL_ALLOCATION());
        assertLe(token.balanceOf(address(vesting)), vesting.TOTAL_ALLOCATION());
    }

    function invariantFixedSupplyNeverIncreases() public view {
        assertLe(token.totalSupply(), token.TOTAL_SUPPLY());
    }
}
