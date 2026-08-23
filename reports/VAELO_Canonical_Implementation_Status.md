# VAELO Canonical Implementation Status

**Date:** 23 August 2026  
**Status:** Locally implemented and tested; not deployed

## 1. Canonical tokenomics

The new implementation preserves the confirmed fixed 1,000,000,000 VAELO
total supply and all six canonical allocations:

| Category | VAELO | Share |
|---|---:|---:|
| Ecosystem & Community | 300,000,000 | 30% |
| Public Distribution | 200,000,000 | 20% |
| Vaeloryn Treasury | 200,000,000 | 20% |
| Team & Contributors | 150,000,000 | 15% |
| Founder | 100,000,000 | 10% |
| Strategic Partnerships | 50,000,000 | 5% |
| **Total** | **1,000,000,000** | **100%** |

## 2. Founder vesting

`VaelorynFounderVesting` enforces the finalized 100,000,000 VAELO schedule:

- 2,500,000 at `T0`
- 2,500,000 at `T0 + 90 days`
- 2,500,000 at `T0 + 180 days`
- 2,500,000 at `T0 + 270 days`
- 90,000,000 vested linearly from `T0 + 270 days` over exactly 1,095 days

There is no fourth quarterly release. The contract has immutable token,
beneficiary, start, linear-start and linear-end values; its cumulative vested
and released amounts cannot exceed 100,000,000 VAELO.

## 3. Canonical contract architecture

The new protocol is contained in `vaelo_canonical/`:

1. `VaelorynDeploymentFactory` is a one-shot constructor-only deployment
   helper. It has no owner, mutable configuration or function that can deploy
   a second instance.
2. The factory deploys `VaelorynGenesisDistribution`, which records that
   factory as its immutable allocator.
3. The factory deploys `VaelorynToken`, which mints the full fixed supply
   directly to the distribution.
4. The factory deploys `VaelorynFounderVesting` with `T0` set to the
   deployment transaction timestamp.
5. The factory completes the six-category allocation in the same transaction.

This atomic sequence prevents an external caller from substituting a
getter-compatible vesting contract or a fake token before allocation.

The token uses OpenZeppelin ERC-20, Burnable and Permit / EIP-2612 patterns.
It has EIP-712 domain support and nonce tracking, with no owner, admin,
upgrade, pause, blacklist, transfer-tax or post-Genesis mint functionality.

## 4. Test results

The final local Foundry run passed:

```text
22 tests passed, 0 failed, 0 skipped
```

This includes 20 unit/edge/fuzz test targets, two 256-run fuzz tests, and two
128-run invariants totaling 16,384 handler calls. Full command output and
toolchain details are recorded in
`reports/VAELO_Canonical_Test_Evidence.md`.

## 5. Security and design checks

The implementation and tests cover:

- Fixed supply and absence of a second mint entry point.
- Direct minting to Genesis Distribution.
- Exact 1B allocation accounting.
- One-time allocation and no residual canonical-token balance in distribution.
- Immutable factory-only allocation execution.
- Atomic deployment and allocation.
- Malicious vesting-substitution and fake-token front-run regression cases.
- Founder cap, repeated-claim protection and exact boundary timestamps.
- ERC-20 Burn / `burnFrom`.
- Permit, EIP-712 domain and nonce handling.
- Zero-address validation.

The implementation has not been independently audited. Local tests are
evidence of behavior, not an audit opinion.

## 6. Deployment readiness

Prepared but intentionally not executed:

- Base Sepolia chain-locked deployment script.
- Placeholder recipient configuration.
- Deployment manifest template.
- Exact-commit Foundry dependency bootstrap, dependency lock and toolchain
  version check.
- Compiler, optimizer and dependency configuration.
- Source-verification fields in the manifest.

No deployment, source verification or broadcast transaction has occurred.
The dependency bootstrap was validated from an empty local dependency and
build-cache state, followed by a clean 52-file compilation and 22-pass suite.

## 7. Historical V1.1 status

The existing Base Sepolia deployment remains:

**BASE SEPOLIA PROTOTYPE V1.1 — NON-CANONICAL HISTORICAL TEST DEPLOYMENT**

No V1.1 contract, balance, deployment address or explorer metadata was
modified. The canonical project does not reuse its 150M founder allocation,
five-year vesting schedule, deployer-held balances or contract addresses.

## 8. Website restoration status

Not started in this task. The public website and its content were not changed.
Website restoration remains the downstream task after canonical implementation
work.

## 9. Remaining blockers

Deployment must remain paused until all of the following are available and
reviewed:

1. Approved custody addresses for Ecosystem & Community, Public Distribution,
   Vaeloryn Treasury, Team & Contributors and Strategic Partnerships.
2. An approved founder beneficiary address.
3. A completed deployment manifest with the real addresses, constructor
   inputs, transaction hashes and generated `T0` / linear-end timestamps.
4. A deployment and source-verification review. An independent security audit
   is recommended before a production deployment.
5. Remediation of any credential that was previously committed to project
   configuration, including removal from version control and rotation through
   the workspace secret-management flow. No deployment should proceed until
   that remediation is complete.

No wallet addresses were invented; configuration files use explicit text
placeholders.

## 10. Files created or modified

### Canonical implementation

- `vaelo_canonical/foundry.toml`
- `vaelo_canonical/.gitignore`
- `vaelo_canonical/README.md`
- `vaelo_canonical/src/VaelorynToken.sol`
- `vaelo_canonical/src/VaelorynGenesisDistribution.sol`
- `vaelo_canonical/src/VaelorynFounderVesting.sol`
- `vaelo_canonical/src/VaelorynDeploymentFactory.sol`
- `vaelo_canonical/test/VaelorynCanonical.t.sol`
- `vaelo_canonical/test/invariant/VaelorynInvariant.t.sol`
- `vaelo_canonical/script/DeployCanonical.s.sol`
- `vaelo_canonical/config/recipients.example.env`
- `vaelo_canonical/deployments/manifest.template.json`
- `vaelo_canonical/dependencies.lock`
- `vaelo_canonical/toolchain.lock`
- `vaelo_canonical/scripts/bootstrap-dependencies.sh`

### Environment and reports

- `.replit` — Foundry toolchain configuration added by the managed dependency
  installation.
- `reports/VAELO_Canonical_Test_Evidence.md`
- `reports/VAELO_Canonical_Implementation_Status.md`
