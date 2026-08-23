// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title VaelorynFounderVesting
 * @notice Canonical 100M VAELO founder schedule.
 *
 * The schedule is relative to `startTimestamp` (T0):
 * - 2.5M at T0
 * - 2.5M at T0 + 90 days
 * - 2.5M at T0 + 180 days
 * - 2.5M at T0 + 270 days
 * - 90M linearly from T0 + 270 days through T0 + 270 days + 1,095 days
 *
 * The 1,095-day duration is the deterministic EVM representation of the
 * specification's following 36 months: three 365-day years, with no leap-day
 * or 30-day-month adjustment.
 */
contract VaelorynFounderVesting {
    using SafeERC20 for IERC20;

    uint256 public constant TOTAL_ALLOCATION = 100_000_000 ether;
    uint256 public constant INITIAL_RELEASE = 2_500_000 ether;
    uint256 public constant QUARTERLY_RELEASE = 2_500_000 ether;
    uint256 public constant LINEAR_ALLOCATION = 90_000_000 ether;
    uint256 public constant QUARTERLY_1 = 90 days;
    uint256 public constant QUARTERLY_2 = 180 days;
    uint256 public constant QUARTERLY_3 = 270 days;
    uint256 public constant LINEAR_DURATION = 1_095 days;

    IERC20 public immutable vaelo;
    address public immutable beneficiary;
    uint256 public immutable startTimestamp;
    uint256 public immutable linearStartTimestamp;
    uint256 public immutable linearEndTimestamp;

    uint256 public released;

    error InvalidToken();
    error InvalidBeneficiary();
    error InvalidStartTimestamp();
    error NothingReleasable();

    event TokensReleased(address indexed beneficiary, uint256 amount);

    constructor(
        address vaeloToken,
        address founderBeneficiary,
        uint256 officialLaunchTimestamp
    ) {
        if (vaeloToken == address(0)) {
            revert InvalidToken();
        }
        if (founderBeneficiary == address(0)) {
            revert InvalidBeneficiary();
        }
        if (officialLaunchTimestamp == 0) {
            revert InvalidStartTimestamp();
        }

        vaelo = IERC20(vaeloToken);
        beneficiary = founderBeneficiary;
        startTimestamp = officialLaunchTimestamp;
        linearStartTimestamp = officialLaunchTimestamp + QUARTERLY_3;
        linearEndTimestamp = linearStartTimestamp + LINEAR_DURATION;
    }

    function vestedAmount(uint256 timestamp) public view returns (uint256) {
        if (timestamp < startTimestamp) {
            return 0;
        }
        if (timestamp < startTimestamp + QUARTERLY_1) {
            return INITIAL_RELEASE;
        }
        if (timestamp < startTimestamp + QUARTERLY_2) {
            return INITIAL_RELEASE + QUARTERLY_RELEASE;
        }
        if (timestamp < linearStartTimestamp) {
            return INITIAL_RELEASE + (2 * QUARTERLY_RELEASE);
        }
        if (timestamp < linearEndTimestamp) {
            uint256 elapsed = timestamp - linearStartTimestamp;
            return
                INITIAL_RELEASE +
                (3 * QUARTERLY_RELEASE) +
                (LINEAR_ALLOCATION * elapsed) /
                LINEAR_DURATION;
        }

        return TOTAL_ALLOCATION;
    }

    function releasableAmount() public view returns (uint256) {
        uint256 vested = vestedAmount(block.timestamp);
        return vested > released ? vested - released : 0;
    }

    function release() external {
        uint256 amount = releasableAmount();
        if (amount == 0) {
            revert NothingReleasable();
        }

        released += amount;
        vaelo.safeTransfer(beneficiary, amount);

        emit TokensReleased(beneficiary, amount);
    }
}
