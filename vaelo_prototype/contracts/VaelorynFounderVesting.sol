// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title VaelorynFounderVesting
 * @notice Historical V1.1 prototype vesting contract for the 150 million VAELO
 * Founder allocation. This is not the canonical production schedule.
 *
 * Historical V1.1 schedule from the official launch timestamp:
 * Year 1: 10% cumulative
 * Year 2: 25% cumulative
 * Year 3: 45% cumulative
 * Year 4: 70% cumulative
 * Year 5: 100% cumulative
 *
 * Vesting is linear within each year.
 */
contract VaelorynFounderVesting {
    using SafeERC20 for IERC20;

    uint256 public constant TOTAL_ALLOCATION = 150_000_000 ether;
    uint256 public constant YEAR = 365 days;

    IERC20 public immutable vaelo;
    address public immutable beneficiary;
    uint256 public immutable startTimestamp;

    uint256 public released;

    event TokensReleased(uint256 amount);

    constructor(
        address vaeloToken,
        address founderBeneficiary,
        uint256 officialLaunchTimestamp
    ) {
        require(vaeloToken != address(0), "Invalid token");
        require(founderBeneficiary != address(0), "Invalid beneficiary");
        require(officialLaunchTimestamp > 0, "Invalid launch timestamp");

        vaelo = IERC20(vaeloToken);
        beneficiary = founderBeneficiary;
        startTimestamp = officialLaunchTimestamp;
    }

    function vestedAmount(uint256 timestamp) public view returns (uint256) {
        if (timestamp <= startTimestamp) return 0;

        uint256 elapsed = timestamp - startTimestamp;

        if (elapsed >= 5 * YEAR) return TOTAL_ALLOCATION;

        uint256[6] memory cumulative = [
            uint256(0),
            15_000_000 ether,
            37_500_000 ether,
            67_500_000 ether,
            105_000_000 ether,
            150_000_000 ether
        ];

        uint256 completedYears = elapsed / YEAR;
        uint256 timeIntoYear = elapsed % YEAR;

        uint256 startAmount = cumulative[completedYears];
        uint256 endAmount = cumulative[completedYears + 1];
        uint256 annualAmount = endAmount - startAmount;

        return startAmount + (annualAmount * timeIntoYear) / YEAR;
    }

    function releasableAmount() public view returns (uint256) {
        uint256 vested = vestedAmount(block.timestamp);
        return vested > released ? vested - released : 0;
    }

    function release() external {
        uint256 amount = releasableAmount();
        require(amount > 0, "Nothing releasable");

        released += amount;
        vaelo.safeTransfer(beneficiary, amount);

        emit TokensReleased(amount);
    }
}
