# VAELO Canonical Hardening Status

**Date:** 24 August 2026  
**Scope:** Targeted hardening only; no deployment or historical-contract changes

## 1. Changes made

- Added explicit canonical-identity requirements to the deployment manifest
  template.
- Kept `VaelorynDeploymentFactory` one-shot, without adding owner, admin,
  upgradeability, centralized control, or new minting.
- Added focused Permit rejection tests for replay, expiry, incorrect signer,
  and incorrect nonce.
- Added a focused test proving permissionless founder-vesting triggering is
  safe.
- Updated the canonical test evidence and code-review reports.

## 2. Tests added

The existing valid Permit, nonce increment, and EIP-712 domain tests were
retained. New tests cover:

- Replayed signature rejection
- Expired signature rejection
- Incorrect signer rejection
- Incorrect nonce rejection
- Third-party founder claim triggering

## 3. Test results

Only the relevant canonical unit and invariant contracts were run:

```text
Previous recorded baseline: 28 total
New targeted result: 32 total
32 passed, 0 failed, 0 skipped
```

The run included 30 unit/edge/fuzz tests and 2 invariant tests. The two
existing fuzz targets ran 256 cases each, and each invariant ran 128 cases.
The full suite was not rerun, and no blockchain transaction was performed.

## 4. Factory identity status

**Operationally controlled.**

The factory remains one-shot per instance and has no callable second-deployment
method. Multiple independent factory instances remain possible at the EVM
level, so Solidity cannot by itself establish a global singleton without
introducing additional architecture or trust.

The canonical identity is now explicitly controlled by the deployment
manifest, including:

- Base Sepolia chain ID
- Official factory address
- Canonical token, distribution, and vesting addresses
- Deployment transaction hash
- Factory event and constructor inputs
- Verified source/build settings
- Canonical bytecode hashes

Only the approved, published manifest is to be treated as canonical.

## 5. Permit status

**Hardened and tested.**

The existing OpenZeppelin Permit implementation was not changed. Focused
tests now cover valid signing, nonce increment, EIP-712 domain behavior,
replayed signatures, expired signatures, incorrect signers, and incorrect
nonces.

## 6. Founder vesting status

**Safe and explicitly documented.**

Founder vesting triggering is permissionless by design. A third party can call
`release()`, but the immutable beneficiary is the only transfer recipient.
The targeted test proves the founder receives the vested amount, the triggering
third party receives zero, and the released amount remains within the 100M
allocation cap.

## 7. Remaining deployment blockers

- Approved custody addresses for all allocation categories
- Approved founder beneficiary address
- Completed deployment manifest with real addresses and timestamps
- Deployment and source-verification review
- Revocation/rotation of any historical external deployment credential
- Independent professional smart-contract audit recommended before production
  deployment

The historical Base Sepolia V1.1 deployment remains untouched. The
“ExclusiveShitcoin” explorer metadata issue is out of scope for this pass.

## 8. Overall status

**AMBER — further deployment preparation and review required.**

The targeted hardening findings are resolved or operationally controlled, and
the canonical code is ready for deployment preparation. This work does not
constitute an independent security audit and does not authorize deployment.