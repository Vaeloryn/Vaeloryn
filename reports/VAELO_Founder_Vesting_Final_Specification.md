# VAELO Founder Vesting — Final Specification

**Specification version:** 1.1  
**Status:** Canonical and implementation-ready for the founder allocation schedule  
**Date:** 23 August 2026  
**Scope:** Founder allocation and vesting schedule only

## 1. Canonical allocation

The canonical Founder allocation is:

- **100,000,000 VAELO**
- **10%** of the fixed 1,000,000,000 VAELO total supply

This specification supersedes the historical Base Sepolia V1.1 prototype allocation of 150,000,000 VAELO / 15%. The V1.1 deployment remains untouched and is not modified by this specification.

## 2. Relative time definitions

All times are defined relative to the Genesis/deployment timestamp. No calendar dates are assumed.

Let:

- `T0` = the official Genesis/deployment timestamp recorded for the canonical deployment.
- `T90` = `T0 + 90 days`.
- `T180` = `T0 + 180 days`.
- `T270` = `T0 + 270 days`.
- `TlinearStart` = `T270`.
- `TlinearEnd` = `TlinearStart + 1,095 days`.

For deterministic smart-contract timestamps, the stated 36-month period is defined as **three 365-day years**, or exactly **1,095 × 24 hours**. No leap-day adjustment and no fixed 30-day-month approximation is applied. The canonical implementation must record the exact `T0`, `TlinearStart` and `TlinearEnd` values in its deployment manifest. It must not invent calendar dates or silently replace the stated 36-month period with a fourth quarterly release.

## 3. Release schedule

The schedule contains one initial release and exactly three subsequent quarterly releases.

| Event | Relative time | Additional VAELO released | Cumulative VAELO released |
|---|---:|---:|---:|
| Initial release | `T0` | 2,500,000 | 2,500,000 |
| Quarterly release 1 | `T90` | 2,500,000 | 5,000,000 |
| Quarterly release 2 | `T180` | 2,500,000 | 7,500,000 |
| Quarterly release 3 | `T270` | 2,500,000 | 10,000,000 |
| Linear phase completion | `TlinearEnd` | 90,000,000 accrued linearly after `T270` | 100,000,000 |

There is **no fourth 2,500,000 VAELO release** at `T0 + 360 days` or before the linear phase begins.

## 4. Arithmetic proof

### Discrete releases

```text
Initial release       2,500,000
90-day release        2,500,000
180-day release       2,500,000
270-day release       2,500,000
                       ---------
Discrete subtotal    10,000,000 VAELO
```

### Linear phase

```text
Founder allocation total        100,000,000
Less discrete-release subtotal   10,000,000
                                  ----------
Linear phase allocation          90,000,000 VAELO
```

### Final total

```text
10,000,000 discrete releases
+90,000,000 linear vesting
----------------------------
100,000,000 VAELO exactly
```

The founder vesting contract must enforce an absolute allocation cap of exactly `100,000,000 VAELO`. Its cumulative vested amount and cumulative released amount must never exceed that cap.

## 5. Linear vesting behavior

The 90,000,000 VAELO linear phase begins at `TlinearStart = T270` and ends at:

```text
TlinearEnd = TlinearStart + (3 × 365 days)
           = TlinearStart + 1,095 days
```

This fixed-duration definition is the canonical timestamp convention for the future EVM implementation. “36 months” is not interpreted as a variable-length calendar-month calculation.

At any timestamp `t`:

```text
if t < T0:
    cumulative vested amount = 0

if T0 <= t < T90:
    cumulative vested amount = 2,500,000

if T90 <= t < T180:
    cumulative vested amount = 5,000,000

if T180 <= t < T270:
    cumulative vested amount = 7,500,000

if T270 <= t < TlinearEnd:
    cumulative vested amount =
        10,000,000
        + 90,000,000 × (t - TlinearStart)
          / (TlinearEnd - TlinearStart)

if t >= TlinearEnd:
    cumulative vested amount = 100,000,000
```

The implementation must use integer-safe arithmetic and cap the result at exactly 100,000,000 VAELO. Rounding must never allow the result to exceed the cap.

At `T270`, the third quarterly release makes the cumulative amount exactly 10,000,000 VAELO; the linear phase contributes zero additional VAELO at that boundary. At `TlinearEnd`, the linear phase contributes exactly 90,000,000 VAELO and the cumulative amount is exactly 100,000,000 VAELO.

## 6. Claim and boundary requirements for the future contract

The future contract must:

1. Make the initial 2,500,000 VAELO claimable at `T0`.
2. Make the next 2,500,000 claimable at each of `T90`, `T180` and `T270`.
3. Reject or expose zero releasable amount before each applicable boundary.
4. Not create a fourth quarterly release at `T0 + 360 days`.
5. Start the linear phase at `T270` with no double-counting of the third quarterly release.
6. Reach exactly 100,000,000 VAELO at `TlinearEnd`.
7. Remain capped at 100,000,000 VAELO after `TlinearEnd`.
8. Track previously released amounts so repeated claims cannot release the same VAELO twice.
9. Ensure `released <= cumulativeVested <= 100,000,000 VAELO` at all times.
10. Validate non-zero token and beneficiary addresses.
11. Keep beneficiary, allocation, start timestamp and end timestamp immutable or otherwise non-modifiable without introducing an unspecified admin mechanism.

## 7. Required tests

The canonical implementation must test at least:

- Initial claim at `T0`.
- No release before `T0`.
- Exact `T90` boundary.
- Exact `T180` boundary.
- Exact `T270` boundary.
- No fourth quarterly release at `T0 + 360 days`.
- Linear vesting immediately after `T270`.
- Linear vesting at an interior timestamp.
- Exact `TlinearEnd` boundary.
- Full 100,000,000 VAELO completion.
- No additional vesting after `TlinearEnd`.
- Repeated claim attempts and prior-release accounting.
- Fuzzed timestamps across the complete schedule.
- The invariant `released <= 100,000,000 VAELO`.
- Zero-address validation.
- Exact allocation correctness.

## 8. Implementation note on the 36-month duration

The canonical economic schedule and its deterministic EVM duration are fixed above: the linear phase follows `T270` and lasts exactly 1,095 days, representing three 365-day years / 36 months for contract purposes. The canonical deployment must record the resulting `TlinearEnd` timestamp.

The implementation must not:

- Add a fourth 2,500,000 VAELO quarterly release.
- Treat the historical five-year V1.1 schedule as canonical.
- Substitute a 30-day-month, leap-day-adjusted or calendar-month duration while describing it as the canonical 36-month period.
- Use a guessed calendar date.

The deployment manifest and test evidence must include the fixed 1,095-day duration and exact `TlinearEnd` value for the selected `T0`. No calendar dates are required.

## 9. Status and relationship to other deployments

- This is the canonical intended founder vesting schedule.
- It applies to a new canonical VAELO implementation.
- It does not retrofit or alter the Base Sepolia V1.1 deployment.
- The V1.1 deployment remains a historical non-canonical test deployment with its existing 150,000,000 VAELO / five-year schedule.
- No smart contract was created or changed as part of this specification task.