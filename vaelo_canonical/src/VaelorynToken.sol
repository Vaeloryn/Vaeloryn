// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/**
 * @title VaelorynToken
 * @notice The canonical fixed-supply VAELO token.
 * @dev The complete supply is minted exactly once to the canonical Genesis
 *      Distribution contract. No owner, admin, upgrade, pause or second-mint
 *      mechanism exists.
 */
contract VaelorynToken is ERC20, ERC20Burnable, ERC20Permit {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 ether;

    address public immutable genesisDistribution;

    error InvalidGenesisDistribution();

    constructor(address genesisDistribution_)
        ERC20("Vaeloryn", "VAELO")
        ERC20Permit("Vaeloryn")
    {
        if (genesisDistribution_ == address(0)) {
            revert InvalidGenesisDistribution();
        }

        genesisDistribution = genesisDistribution_;
        _mint(genesisDistribution_, TOTAL_SUPPLY);
    }
}
