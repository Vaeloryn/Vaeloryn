// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title VaelorynGenesisAllocator
 * @notice One-time distributor for the complete VAELO genesis supply.
 */
contract VaelorynGenesisAllocator {
    using SafeERC20 for IERC20;

    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 ether;

    IERC20 public immutable vaelo;
    address public immutable ecosystemTreasury;
    address public immutable communityTreasury;
    address public immutable founderVesting;
    address public immutable teamTreasury;
    address public immutable strategicTreasury;
    address public immutable longTermReserve;

    bool public allocationCompleted;

    event GenesisAllocated();

    constructor(
        address vaeloToken,
        address _ecosystemTreasury,
        address _communityTreasury,
        address _founderVesting,
        address _teamTreasury,
        address _strategicTreasury,
        address _longTermReserve
    ) {
        require(vaeloToken != address(0), "Invalid token");
        require(_ecosystemTreasury != address(0), "Invalid ecosystem treasury");
        require(_communityTreasury != address(0), "Invalid community treasury");
        require(_founderVesting != address(0), "Invalid founder vesting");
        require(_teamTreasury != address(0), "Invalid team treasury");
        require(_strategicTreasury != address(0), "Invalid strategic treasury");
        require(_longTermReserve != address(0), "Invalid reserve");

        vaelo = IERC20(vaeloToken);
        ecosystemTreasury = _ecosystemTreasury;
        communityTreasury = _communityTreasury;
        founderVesting = _founderVesting;
        teamTreasury = _teamTreasury;
        strategicTreasury = _strategicTreasury;
        longTermReserve = _longTermReserve;
    }

    function allocateGenesis() external {
        require(!allocationCompleted, "Already allocated");
        require(
            vaelo.balanceOf(address(this)) == TOTAL_SUPPLY,
            "Allocator must hold full supply"
        );

        allocationCompleted = true;

        vaelo.safeTransfer(ecosystemTreasury, 350_000_000 ether);
        vaelo.safeTransfer(communityTreasury, 250_000_000 ether);
        vaelo.safeTransfer(founderVesting, 150_000_000 ether);
        vaelo.safeTransfer(teamTreasury, 100_000_000 ether);
        vaelo.safeTransfer(strategicTreasury, 100_000_000 ether);
        vaelo.safeTransfer(longTermReserve, 50_000_000 ether);

        emit GenesisAllocated();
    }
}
