# VAELO Canonical Protocol — Test Evidence

**Status:** All required local Foundry checks passed  
**Date:** 23 August 2026  
**Deployment status:** Not deployed

## Scope

This evidence covers the new canonical implementation in `vaelo_canonical/`.
It does not test, modify, transfer from or otherwise interact with the
historical Base Sepolia Prototype V1.1 contracts.

## Reproducible commands

```sh
cd vaelo_canonical
forge build
forge test -vv
```

## Toolchain and dependency configuration

| Item | Value |
|---|---|
| Foundry | `forge Version: 1.1.0-dev` |
| Solidity compiler | `0.8.24` |
| Optimizer | Enabled |
| Optimizer runs | `200` |
| OpenZeppelin Contracts | `v5.4.0` |
| forge-std | `v1.9.7` |
| Workspace baseline revision | `6306c57` |

The final `forge build` completed successfully with Solidity `0.8.24`.
Dependencies are reproducible from a clean checkout using
`vaelo_canonical/scripts/bootstrap-dependencies.sh`. The script reads exact
dependency commits from `vaelo_canonical/dependencies.lock` and verifies the
Foundry version specified in `vaelo_canonical/toolchain.lock` before
installation.

## Clean-checkout reproducibility validation

The final evidence was independently reproduced from an empty local
`lib/`, `out/` and `cache/` state:

```sh
cd vaelo_canonical
sh scripts/bootstrap-dependencies.sh
forge build
forge test -vv
```

The bootstrap restored OpenZeppelin Contracts `v5.4.0` and forge-std
`v1.9.7` from their exact locked commits; the clean rebuild compiled 52
Solidity files with `0.8.24`, and the complete suite passed again with 22
passed, 0 failed and 0 skipped.

## Final test result

```text
Ran 2 test suites in 593.05ms (1.18s CPU time):
22 tests passed, 0 failed, 0 skipped (22 total tests)
```

### Unit and edge-case result

```text
Ran 20 tests for VaelorynCanonicalTest
20 passed; 0 failed; 0 skipped
```

Covered behavior includes:

- Fixed 1,000,000,000 VAELO supply minted directly to Genesis Distribution.
- No `owner()` or `mint(address,uint256)` entry point.
- Canonical allocation sum and exact six-category balances.
- One-time Genesis allocation.
- Standard ERC-20 Burn and `burnFrom`.
- EIP-2612 Permit, EIP-712 domain separator and nonce increment.
- Founder schedule boundaries at `T0`, `T0 + 90`, `+180` and `+270` days.
- Linear vesting through the fixed 1,095-day duration.
- Repeated-claim protection and the 100,000,000 VAELO allocation cap.
- Zero-address validation.
- Atomic deployment from the one-shot factory.
- No second deployment method on the canonical factory.
- Rejection of untrusted allocation attempts.
- Regression coverage for a getter-compatible malicious vesting contract.
- Regression coverage for a fake VAELO token attempting to front-run allocation.

### Fuzz result

| Fuzz test | Runs | Result |
|---|---:|---|
| Founder vested amount never exceeds cap | 256 | Pass |
| Founder vested amount is monotonic over time | 256 | Pass |

**Fuzz executions:** 512  
**Fuzz failures:** 0

### Invariant result

| Invariant | Runs | Handler calls | Reverts | Result |
|---|---:|---:|---:|---|
| Founder vesting remains capped | 128 | 8,192 | 0 | Pass |
| Token supply never increases above fixed supply | 128 | 8,192 | 0 | Pass |

**Invariant executions:** 256 runs  
**Invariant handler calls:** 16,384  
**Invariant failures:** 0

## Security and design assertions tested

- The token exposes no owner, administrator, upgrade, pause, blacklist,
  transfer-tax or post-Genesis mint control.
- The one-shot deployment factory creates exactly one canonical instance in
  its constructor; it has no callable function that can create another.
- The distribution accepts allocation only from its immutable creator factory.
- Token, distribution and founder vesting are created and allocated in one
  transaction, preventing an external vesting or token substitution between
  deployment and allocation.
- The founder vesting contract cannot release more than 100,000,000 VAELO.
- The distribution can only transfer the complete 1,000,000,000 VAELO supply
  according to the six canonical amounts.

## Important limitations

Passing local tests is not an independent security audit. No source
verification was requested or completed, and no transaction was broadcast to
Base Sepolia or any other network.
