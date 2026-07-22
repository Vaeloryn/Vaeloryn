// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title VaelorynToken
 * @notice Fixed-supply VAELO Prototype V1.
 * @dev Mints the complete 1 billion VAELO supply once at deployment.
 *      No additional mint function exists.
 */
contract VaelorynToken is ERC20 {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 ether;

    constructor(address genesisRecipient) ERC20("Vaeloryn", "VAELO") {
        require(genesisRecipient != address(0), "Invalid genesis recipient");
        _mint(genesisRecipient, MAX_SUPPLY);
    }
}
