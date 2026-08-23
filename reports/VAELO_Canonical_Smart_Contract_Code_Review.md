# VAELO Canonical Smart Contract Code Review

**Review type:** Read-only static code-level review  
**Scope:** Canonical Solidity contracts, existing Foundry tests, and recorded test evidence  
**Deployment status:** Not deployed  
**Review date:** 24 August 2026

## 1. Executive summary

The canonical implementation is present and matches the specified fixed supply,
six allocations, founder vesting schedule, and non-administrative token design.
The contracts use OpenZeppelin ERC-20, Burnable, and Permit/EIP-2612
implementations. The recorded Foundry evidence reports 22 passed tests, with no
failures or skips; the test suite was not rerun for this review.

No CRITICAL or HIGH code-level finding was identified in the reviewed source.
The principal finding is a **MEDIUM deployment-identity risk**: the factory is
one-shot per instance, but it is not a singleton. Any party can deploy another
factory instance with different non-zero recipient addresses, producing a
separate canonical-looking protocol. This does not alter or compromise an
already deployed instance, but it creates operational and verification risk.

The review is **AMBER — changes/process review required before deployment**.
The implementation is suitable for code review, but deployment should not
proceed until the official instance, recipient addresses, credential
remediation, and deployment/source-verification process are approved. This
review is not a formal independent smart-contract audit.

## 2. Contract architecture

### `VaelorynToken.sol`

`VaelorynToken` inherits OpenZeppelin `ERC20`, `ERC20Burnable`, and
`ERC20Permit`. Its constructor validates a non-zero Genesis Distribution
address, stores it immutably, and mints `TOTAL_SUPPLY` exactly once to that
address.

### `VaelorynGenesisDistribution.sol`

The distribution contract stores the five non-founder recipients and the
deployment factory immutably. Its `allocateGenesis` function is restricted to
that factory and can execute only once. It validates the token interface,
canonical supply, token/distribution relationship, founder vesting interface,
full token custody, and then transfers all six fixed allocations.

### `VaelorynFounderVesting.sol`

The vesting contract stores the token, beneficiary, start timestamp, linear
start, and linear end immutably. `release` calculates cumulative vested tokens,
subtracts previously released tokens, and transfers only to the immutable
beneficiary.

### `VaelorynDeploymentFactory.sol`

The constructor deploys one distribution, token, and vesting contract, then
allocates the full supply in the same transaction. It has no callable deployment
function, owner, admin, upgrade mechanism, custody, or mutable configuration.

## 3. Token review

| Property | Result | Assessment |
|---|---|---|
| Total supply permanently capped at exactly 1B | **TESTED / CONFIRMED BY SOURCE** | `TOTAL_SUPPLY` is fixed at `1_000_000_000 ether`; the only `_mint` call is in the constructor. |
| Additional minting | **TESTED / CONFIRMED BY SOURCE** | No public or internal post-construction mint entry point exists. |
| Genesis mint one-time | **TESTED / CONFIRMED BY SOURCE** | Constructor-only minting to immutable `genesisDistribution`. |
| Owner/admin/multisig control | **TESTED / CONFIRMED BY SOURCE** | No ownership or administrative state/function exists. |
| Upgradeability | **CONFIRMED BY SOURCE** | No proxy, delegatecall, upgrade, or implementation slot exists. |
| Pause/freeze/blacklist | **CONFIRMED BY SOURCE** | No such mechanism exists. |
| Transfer tax/restrictions | **CONFIRMED BY SOURCE** | No transfer override or tax logic exists; standard OpenZeppelin ERC-20 behavior is inherited. |
| ERC-20 behavior | **TESTED / CONFIRMED BY SOURCE** | OpenZeppelin ERC-20 implementation is used. |
| `burn` | **TESTED** | Existing test confirms supply and holder balance decrease. |
| `burnFrom` | **TESTED** | Existing test confirms allowance-based burning and supply decrease. |
| Permit / EIP-2612 | **TESTED** | Existing test constructs and submits a valid signed permit. |
| EIP-712 domain | **TESTED** | Existing test checks name, version, chain ID, and verifying contract domain construction. |
| Nonces | **TESTED** | Existing test checks nonce increment after permit. |
| Signature replay protection | **CONFIRMED BY SOURCE / PARTIALLY TESTED** | OpenZeppelin `ERC20Permit` and `Nonces` are inherited; the existing test checks nonce increment but does not explicitly submit the same signature twice or test expiry. |
| Zero-address rejection | **TESTED** | Constructor rejects a zero Genesis Distribution address. |

The token has no hidden privileged control. Burning can reduce total supply,
which is expected ERC-20 Burnable behavior; it cannot increase supply.

## 4. Genesis Distribution review

The six immutable allocation constants are:

| Category | Amount |
|---|---:|
| Ecosystem & Community | 300,000,000 VAELO |
| Public Distribution | 200,000,000 VAELO |
| Vaeloryn Treasury | 200,000,000 VAELO |
| Team & Contributors | 150,000,000 VAELO |
| Founder | 100,000,000 VAELO |
| Strategic Partnerships | 50,000,000 VAELO |
| **Total** | **1,000,000,000 VAELO** |

Assessment:

- All six allocations are represented as compile-time constants.
- The source arithmetic totals exactly 1B; the existing test explicitly checks
  the sum.
- Recipient addresses are immutable after construction.
- `allocateGenesis` is callable only by the immutable factory and only once.
- The function requires the complete 1B balance before setting
  `allocationCompleted`.
- The six transfers total the complete balance, leaving zero canonical tokens
  in the distribution after successful allocation.
- There is no minting, arbitrary transfer, owner, admin, or withdrawal
  backdoor.
- The existing tests cover exact recipient balances, zero residual balance,
  one-time execution, factory-only access, malicious vesting substitution, and
  fake-token substitution.

The recipient addresses are configurable only as constructor inputs. This is
appropriate for a fresh deployment but makes the official factory transaction
and deployment manifest part of the trust boundary.

## 5. Founder Vesting review

The source constants and arithmetic implement:

- 2.5M at `T0`
- 2.5M at `T0 + 90 days`
- 2.5M at `T0 + 180 days`
- 2.5M at `T0 + 270 days`
- 90M linearly from `T0 + 270 days` through `T0 + 270 days + 1,095 days`

The first four releases total 10M, and `LINEAR_ALLOCATION` is 90M, giving
exactly 100M. During the linear interval, the expression
`90M * elapsed / 1,095 days` uses integer floor division, so rounding cannot
overpay. At or after `linearEndTimestamp`, the function returns the exact
100M cap.

Assessment:

- Maximum allocation: **TESTED / CONFIRMED BY SOURCE**
- Initial release and quarterly boundaries: **TESTED**
- Exact linear duration: **TESTED / CONFIRMED BY SOURCE**
- Rounding and end-boundary behavior: **CONFIRMED BY SOURCE; boundary tests exist**
- Repeated claims: **TESTED**
- Cumulative release cap: **TESTED**, including invariant evidence
- Final vesting reaches exactly 100M: **TESTED**
- Zero token and beneficiary rejection: **TESTED**
- Unauthorized redirection: **CONFIRMED BY SOURCE**; payout always uses immutable `beneficiary`

`release()` is intentionally permissionless: any caller can trigger a release,
but no caller can redirect the funds. The reviewed tests do not separately
assert that an arbitrary caller can trigger payment only to the beneficiary,
although the source makes that behavior direct and clear.

## 6. Deployment Factory review

The factory introduces no owner, admin, upgrade, arbitrary token minting,
arbitrary post-deployment recipient mutation, or callable second-deployment
method. Its constructor performs the complete deployment and allocation
atomically, preventing an external party from substituting a malicious
vesting contract or token between those operations.

The factory is useful for the intended atomic architecture. Its limitation is
that it is not a global singleton: the EVM permits multiple independent
factory instances. The official deployment process must therefore identify one
approved factory instance and publish its emitted addresses and constructor
inputs.

## 7. Test coverage review

Existing recorded evidence states:

- 22 total tests
- 20 unit/edge/fuzz tests
- 2 invariant tests
- 22 passed
- 0 failed
- 0 skipped

The evidence also records two 256-run fuzz targets and two 128-run invariants
with 16,384 total invariant handler calls.

| Security property | Status |
|---|---|
| Fixed supply | **TESTED** |
| No second mint | **TESTED** |
| Allocation sum | **TESTED** |
| Allocation caps | **TESTED** |
| Founder vesting cap | **TESTED** |
| Vesting timestamps | **TESTED** |
| Linear rounding/end boundary | **TESTED by explicit boundaries; broad rounding fuzzing not present** |
| Unauthorized claims/redirection | **SOURCE-CONFIRMED; not directly isolated as a caller-identity test** |
| Permit | **TESTED** |
| Nonce increment | **TESTED** |
| Same-signature replay rejection | **NOT TESTED explicitly** |
| Permit expiry rejection | **NOT TESTED explicitly** |
| Burn | **TESTED** |
| `burnFrom` | **TESTED** |
| Genesis one-time execution | **TESTED** |
| Recipient correctness | **TESTED** |
| Admin/owner absence | **TESTED / SOURCE-CONFIRMED** |
| Invariant supply preservation | **TESTED** |

The recorded evidence is sufficient to establish substantial local regression
coverage, but it is not an audit and does not replace independent review.

## 8. Security findings

### MEDIUM — Multiple independently deployable canonical-looking instances

- **Contract:** `VaelorynDeploymentFactory`
- **Function/area:** Constructor-based deployment identity
- **Issue:** Each factory instance is one-shot, but there is no global singleton
  or registry preventing another party from deploying a separate factory with
  different recipient addresses.
- **Why it matters:** Users, exchanges, explorers, or investors could confuse
  multiple valid-looking VAELO instances or distributions. The risk is
  primarily operational and canonical-identity related; it does not grant
  control over an already deployed instance.
- **Recommended fix:** Treat the official deployment transaction, factory
  address, emitted contract addresses, chain ID, bytecode, and constructor
  inputs as the canonical identity. If protocol-level uniqueness is required,
  add a separately governed registry or a controlled deterministic deployment
  process after reviewing the added trust and complexity.

### INFORMATIONAL — Permissionless vesting trigger

- **Contract:** `VaelorynFounderVesting`
- **Function/area:** `release()`
- **Issue:** Any address may call `release()`.
- **Why it matters:** This is not a fund-stealing path because the beneficiary is
  immutable and is the only transfer recipient. It may nevertheless differ from
  an expectation that only the founder can initiate claims.
- **Recommended fix:** No fix is required if permissionless triggering is
  intended. If caller restriction is required, specify and test it explicitly;
  do not rely on caller restriction for payout safety.

### INFORMATIONAL — No explicit duplicate-signature and expiry tests

- **Contract:** `VaelorynToken`
- **Function/area:** Inherited `ERC20Permit` behavior
- **Issue:** Existing tests verify a valid permit, domain separator, and nonce
  increment, but do not explicitly submit a permit signature twice or test an
  expired deadline.
- **Why it matters:** These are important integration regressions even though
  OpenZeppelin's inherited implementation supplies the expected protections.
- **Recommended fix:** Add dedicated regression tests for duplicate signature
  rejection and expired-deadline rejection before production deployment.

## 9. Recommended fixes and process actions

1. Select and document one official deployment instance; publish its factory,
   token, distribution, and vesting addresses together with chain ID and
   constructor inputs.
2. Keep all recipient and founder addresses in the approved deployment manifest;
   do not deploy using placeholder values.
3. Complete the recorded credential revocation/rotation remediation before any
   broadcast.
4. Add explicit Permit duplicate-signature and expiry regression tests if the
   test suite is amended before deployment.
5. Obtain an independent professional smart-contract audit before a production
   or materially funded deployment.

## 10. Deployment readiness

**AMBER — changes/process review required before deployment.**

The code has no identified critical or high-severity issue in this static
review and is ready for human code review. Deployment remains pending approved
addresses, a completed manifest, official deployment identity controls,
credential remediation, deployment/source-verification review, and the
recommended independent audit.

## 11. Independent audit recommendation

This document is a code-level review based on source inspection and existing
recorded test evidence. It is **not a formal security audit** and does not
replace an independent professional smart-contract audit, especially before
mainnet deployment, public token distribution, or material custody of funds.