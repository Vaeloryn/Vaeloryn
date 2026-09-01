# Canonical VAELO protocol

This directory contains the new canonical Foundry implementation. It is
separate from `vaelo_prototype/`, which remains the untouched Base Sepolia
Prototype V1.1 historical deployment.

## Architecture

1. `VaelorynDeploymentFactory` atomically deploys the complete canonical
   instance in its one-shot constructor. It holds no owner, admin, mutable
   configuration or method that can deploy a second instance.
2. `VaelorynGenesisDistribution` is deployed with five approved custody
   recipients. Its immutable factory completes allocation only inside the
   atomic deployment. The founder allocation is sent to the just-created
   `VaelorynFounderVesting` contract.
3. `VaelorynToken` is deployed with the distribution contract address and
   mints the fixed 1,000,000,000 VAELO supply directly to that contract.
4. `VaelorynFounderVesting` is deployed with the canonical token, approved
   founder beneficiary and the explicit official launch timestamp (`T0`).
5. The factory completes the one-time allocation in that same transaction. It
   verifies the token identifies this distribution, holds the complete supply,
   and the founder recipient is a matching 100M VAELO vesting contract.

There are no owner, administrator, upgrade, pause, blacklist, transfer-tax or
post-Genesis mint controls.

## Canonical allocations

| Category | VAELO |
|---|---:|
| Ecosystem & Community | 300,000,000 |
| Public Distribution | 200,000,000 |
| Vaeloryn Treasury | 200,000,000 |
| Team & Contributors | 150,000,000 |
| Founder Vesting | 100,000,000 |
| Strategic Partnerships | 50,000,000 |
| **Total** | **1,000,000,000** |

## Founder schedule

The 100,000,000 VAELO founder allocation follows
`reports/VAELO_Founder_Vesting_Final_Specification.md`:

- 2,500,000 at `T0`
- 2,500,000 at `T0 + 90 days`
- 2,500,000 at `T0 + 180 days`
- 2,500,000 at `T0 + 270 days`
- 90,000,000 linearly over the next 1,095 days

There is no fourth quarterly release.

## Local verification

```sh
cd vaelo_canonical
sh scripts/bootstrap-dependencies.sh # required on a clean checkout
forge test
forge test --match-path test/invariant/VaelorynInvariant.t.sol
```

The ignored `lib/` directory is reproducible from the exact pinned commits in
`dependencies.lock`. `toolchain.lock` verifies the Foundry version before
installation, and the bootstrap script intentionally refuses to overwrite an
existing library directory.

## Deployment safety

`script/DeployCanonical.s.sol` is a practice-only preparation path chain-locked
to Base Sepolia (84532). It derives T0 from the current Sepolia block and logs
every result as practice-only. It requires explicit environment variables for
every custody recipient and founder beneficiary. The accompanying
`config/recipients.example.env` contains text placeholders, not wallet
addresses; it is intentionally not deployable as supplied.

`script/DeployCanonicalMainnet.s.sol` is a separate Base Mainnet preparation
script. It accepts recipient values and the explicit
`VAELO_OFFICIAL_LAUNCH_TIMESTAMP` only through environment variables, requires
that T0 be a strictly future Unix timestamp chosen before the authorized
broadcast, compares recipients to the approved public Mainnet addresses, and
refuses every chain other than Base Mainnet (8453). It does not fall back to
Base Sepolia. The associated `config/base-mainnet.example.env` contains no
credentials, and `deployments/base-mainnet.manifest.json` is a
`NOT_DEPLOYED` record with all deployment-specific address and transaction
fields left null.

The Mainnet package requires Solidity 0.8.24, optimizer enabled with 200 runs,
and the Paris EVM target. BaseScan verification must use a secret-managed
`ETHERSCAN_API_KEY` only after deployment.

Do not run a broadcast deployment until recipient custody, the generated
manifest, source-verification inputs and test evidence have been reviewed.
