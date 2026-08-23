# VAELO “ExclusiveShitcoin” Identity Investigation

**Review type:** Read-only investigation and correction planning  
**Historical address reviewed:** `0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c`  
**Network:** Base Sepolia, chain ID `84532`  
**Date:** 24 August 2026

## Executive conclusion

The available evidence indicates that “ExclusiveShitcoin” is an explorer
source-verification/name-metadata problem, not the deployed token’s runtime
identity.

The historical V1.1 token’s checked-in source is
`vaelo_prototype/contracts/VaelorynToken.sol`, with contract name
`VaelorynToken`, token name `Vaeloryn`, and symbol `VAELO`. The deployed
constructor argument recorded for the address is a single Genesis recipient
address. That matches the V1.1 `VaelorynToken(address genesisRecipient)`
constructor, not the old explorer source displayed as
`ExclusiveShitcoin(string name, string symbol)`.

The historical reconciliation report and an earlier Blockscout response
recorded the bad label as:

```text
contracts/ExclusiveShitcoin.sol
contract ExclusiveShitcoin
```

However, the current Blockscout smart-contract-details response for the same
address reports:

```text
contracts/VaelorynToken.sol
contract VaelorynToken
```

It also reports the clean V1.1 source with `Vaeloryn` / `VAELO`. This means the
explorer metadata is currently inconsistent across observations or has already
been corrected in the explorer’s active data path. No blockchain change is
needed to correct a source label.

## 1. Evidence reviewed

### Repository source

The historical V1.1 token is:

`vaelo_prototype/contracts/VaelorynToken.sol`

Its relevant identity is:

```solidity
contract VaelorynToken is ERC20 {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 ether;

    constructor(address genesisRecipient) ERC20("Vaeloryn", "VAELO") {
        require(genesisRecipient != address(0), "Invalid genesis recipient");
        _mint(genesisRecipient, MAX_SUPPLY);
    }
}
```

The historical deployment records identify the token address and constructor
input as the V1.1 deployment, not as an `ExclusiveShitcoin` deployment.

### Explorer evidence

The historical reconciliation report states that Blockscout previously
reported:

- source path: `contracts/ExclusiveShitcoin.sol`
- contract name: `ExclusiveShitcoin`
- a standard ERC-20 ABI with `MAX_SUPPLY`
- no Burn, Permit, `nonces`, or EIP-712 interface

The current direct Blockscout API response observed during this investigation
reports:

- source path: `contracts/VaelorynToken.sol`
- contract name: `VaelorynToken`
- compiler `v0.8.24+commit.e11b9ed9`
- optimizer enabled, 200 runs
- EVM version `paris`
- fully verified source
- `Vaeloryn` / `VAELO` constructor identity

An earlier response for the same endpoint returned the
`ExclusiveShitcoin` source and a non-fully-verified/bytecode-database
classification. The inconsistent responses are themselves evidence that the
explorer’s verification/name presentation has not been reliable across its
metadata paths.

## 2. Where does the name originate?

### A. Deployed contract bytecode

**No evidence that “ExclusiveShitcoin” is embedded in the deployed runtime
bytecode.**

The deployed bytecode returned by Blockscout was checked for the ASCII strings
`ExclusiveShitcoin`, `VaelorynToken`, `Vaeloryn`, `VAELO`, and the source paths.
None were present in the runtime bytecode.

A Solidity contract name and source filename generally belong to compiler
source metadata and verification records; they are not normally exposed as
runtime ERC-20 identity. The deployed runtime interface also matches the
simple V1.1 ERC-20 implementation rather than the source displayed in the bad
label.

### B. Contract metadata

The compiler metadata hash is part of deployed bytecode metadata, so source
paths and compiler input metadata can affect the metadata hash. That does not
mean the literal name must appear as readable ASCII in runtime bytecode.

The evidence does not prove that the bad label was compiled into the original
runtime metadata. It does show that the `ExclusiveShitcoin` source record was
associated with the address by an explorer verification/metadata path.

### C. Solidity contract name and filename

The bad label explicitly appeared as both:

- `contract ExclusiveShitcoin`
- `contracts/ExclusiveShitcoin.sol`

That is the most direct origin of the displayed explorer identity. It is not
the identity in the checked-in V1.1 source.

### D. Compiler and deployment configuration

The old bad source included an Atlas IDE comment and an
`ExclusiveShitcoin.sol` source identity. This is consistent with a submitted
or imported verification bundle, bytecode database match, or stale explorer
metadata record. It is not consistent with the checked-in V1.1 constructor
shape.

No repository deployment configuration was found that names the deployed V1.1
token `ExclusiveShitcoin`. The current historical Hardhat source and
constructor argument files identify the V1.1 contract as Vaeloryn.

## 3. Can the existing address be corrected without changing bytecode?

**Yes, in principle.**

Explorer source verification is an off-chain metadata operation. If the exact
historical source, compiler version, optimizer settings, EVM version, imported
sources, and constructor arguments reproduce the deployed bytecode, the
explorer can legitimately replace an incorrect verification record with the
matching `VaelorynToken` source. This does not alter the address, transactions,
balances, or deployed bytecode.

For this address, the correct non-destructive procedure is:

1. Use the exact historical V1.1 source from
   `vaelo_prototype/contracts/`.
2. Use the exact historical compiler and optimizer configuration.
3. Include the exact OpenZeppelin dependency sources used for compilation.
4. Use the recorded constructor argument for the Genesis recipient.
5. Submit the source through the explorer’s official re-verification process,
   selecting the correct contract path and contract name.
6. Confirm that the explorer reports `VaelorynToken`, `Vaeloryn`, and `VAELO`
   and that the resulting verification matches the deployed bytecode.

The current Blockscout response already reports this clean source identity, so
an additional submission should not be made blindly. First check the public
address page and the explorer’s verification tab in a fresh session. If those
surfaces still show `ExclusiveShitcoin`, use the official re-verification or
correction flow. Do not attempt to overwrite metadata through an undocumented
or destructive API.

## 4. Does a new deployment need to replace the old one?

**No, not because of the name issue alone.**

The evidence does not establish that the literal name is part of the deployed
runtime bytecode. The constructor mismatch between the bad source and the
recorded deployment arguments further supports treating the bad label as an
incorrect source association.

A replacement deployment would create a new address, new balances,
transactions, and token history. It would not repair the old explorer page and
would unnecessarily fragment the historical record.

The old address may safely remain a clearly labeled:

```text
VAELO Prototype V1.1 — Historical, Non-Canonical Base Sepolia Deployment
```

It must not be presented as the new canonical protocol.

## 5. Investor-facing explorer identity

### Old V1.1 address

Investors should see and be told:

- Base Sepolia historical prototype
- Address: `0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c`
- Token name: `Vaeloryn`
- Symbol: `VAELO`
- Standard fixed-supply V1.1 ERC-20
- Non-canonical and not the newer Burnable/Permit canonical implementation

Because explorer responses have been inconsistent, investors may currently
encounter either the corrected `VaelorynToken` source view or a stale
`ExclusiveShitcoin` metadata view. That inconsistency should be corrected or
formally documented before using the address in investor materials.

### Future canonical address

The future canonical deployment should have a separately documented address
and verified source showing:

- contract: `VaelorynToken`
- token name: `Vaeloryn`
- symbol: `VAELO`
- fixed 1B supply
- OpenZeppelin ERC-20, Burnable, and Permit/EIP-2612 behavior
- canonical Genesis Distribution relationship
- canonical factory and founder vesting addresses

The canonical deployment must not reuse or imply that the V1.1 address is its
token address.

## 6. Recommended professional solution

1. Treat the old address as historical V1.1 and do not modify its blockchain
   state.
2. Confirm the current Blockscout public page and verification tab, not only
   one API response.
3. If the bad label remains visible, submit an official exact-source
   re-verification/correction using the historical Vaeloryn source bundle.
4. Preserve the old address in project records as non-canonical even after a
   clean explorer verification.
5. Deploy the new canonical protocol separately only after its own code review,
   approved addresses, manifest, credential remediation, and deployment review
   are complete.
6. Publish the canonical address and verification links together so investors
   cannot confuse V1.1 with the canonical deployment.

## 7. Final determination

| Question | Determination |
|---|---|
| Is “ExclusiveShitcoin” proven to be in runtime bytecode? | **No** |
| Is it present in an explorer source/metadata association? | **Yes, historically; current API view is clean** |
| Is it the checked-in V1.1 Solidity contract name? | **No** |
| Is it the checked-in V1.1 source filename? | **No** |
| Can the existing address be corrected without changing bytecode? | **Yes, through exact official source re-verification, if still visible** |
| Is replacement deployment required for this issue? | **No** |
| Can the old address remain historical? | **Yes, clearly labeled as non-canonical** |
| Does the new canonical deployment need clean identity? | **Yes** |

**Status:** The identity issue is an explorer metadata/verification
inconsistency, not a demonstrated deployed-bytecode identity defect. No
deployment, metadata overwrite, DNS change, website change, or contract change
was performed.