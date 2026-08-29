# VAELO Launchpad-Agnostic Architecture

**Status:** Pre-Mainnet hardening direction  
**Current state:** Canonical implementation complete locally; Base Mainnet not deployed

## Principle

VAELO must be deployable independently of any launchpad, sale platform, or
distribution venue. The canonical token, allocation architecture, founder
vesting, and Base Mainnet deployment package must remain usable whether a future
distribution uses:

- Fjord Foundry;
- another launchpad;
- a direct sale mechanism;
- a private or public distribution;
- another compliant distribution structure; or
- no immediate sale.

Changing the distribution venue must not require changing or redeploying the
canonical VAELO token.

## 1. Canonical protocol

The canonical protocol consists of the reviewed Solidity package:

- `VaelorynToken`
- `VaelorynGenesisDistribution`
- `VaelorynFounderVesting`
- `VaelorynDeploymentFactory`

The token contains no launchpad-specific logic, addresses, contracts,
transfer restrictions, sale mechanics, or platform dependencies.

The token mints 1,000,000,000 VAELO once at construction, has no additional mint
path, supports standard burn behavior, and supports ERC-2612 permit behavior.
Voluntary burns may reduce `totalSupply()` after deployment.

## 2. Base Mainnet deployment

The target network is Base Mainnet, chain ID 8453. The deployment package
requires:

- Solidity 0.8.24;
- optimizer enabled with 200 runs;
- Paris EVM target;
- approved non-zero recipient addresses;
- secure environment configuration;
- post-deployment readback;
- deployment receipt and event reconciliation; and
- source verification after deployment.

The current manifest remains `NOT_DEPLOYED`. No deployment, broadcast, transfer,
or transaction is authorized by this document.

## 3. Tokenomics

The canonical allocation is:

| Allocation | Amount | Share |
|---|---:|---:|
| Ecosystem & Community | 300,000,000 | 30% |
| Public Distribution | 200,000,000 | 20% |
| Vaeloryn Treasury | 200,000,000 | 20% |
| Team & Contributors | 150,000,000 | 15% |
| Founder | 100,000,000 | 10% |
| Strategic Partnerships | 50,000,000 | 5% |
| **Total initial mint** | **1,000,000,000** | **100%** |

The founder schedule is exactly:

- 2,500,000 VAELO at T0;
- 2,500,000 at +90 days;
- 2,500,000 at +180 days;
- 2,500,000 at +270 days; and
- 90,000,000 linearly over exactly 1,095 days beginning at +270 days.

## 4. Treasury and custody

The six approved recipients are external custody destinations. Treasury Safe
ownership, signer threshold, signer independence, recovery, and operational
controls remain deployment gates. The token does not provide multisig custody,
timelocks, or governance by itself.

## 5. Product and ecosystem development

Product utility, ecosystem initiatives, contributor programs, and flagship
projects are separate from the token's deployment and distribution mechanism.
VAELO utility should follow useful products and services rather than being
manufactured solely to create token demand.

## 6. Future distribution

The 200,000,000 VAELO Public Distribution allocation remains independent of any
specific sale design. A future sale may use a portion of that allocation, but
the current working planning assumption of up to 10,000,000 VAELO is not a
canonical contract requirement.

Sale quantities, prices, FDV references, payment assets, eligibility, claims,
wallet limits, geographic restrictions, collateral, fees, refunds, and unsold
token treatment remain external distribution parameters.

## 7. Potential sale venues

Fjord Foundry is currently a potential launch/distribution platform under
evaluation. There is no guarantee of acceptance, no confirmed partnership, no
created sale, and no official sale URL.

Any future venue must be evaluated separately and must not be represented as a
dependency of the canonical protocol. Venue-specific integration documents may
be added only after the venue and its requirements are confirmed.

## Historical V1.1 boundary

The Base Sepolia V1.1 deployment remains **HISTORICAL — NON-CANONICAL**. Its old
addresses, allocation amounts, vesting schedule, and test results must never be
used as evidence of the canonical Base Mainnet deployment.

## Current blocker summary

- Independent smart-contract audit: pending.
- Treasury Safe custody and signer verification: pending.
- Base Mainnet deployment: not performed.
- Mainnet source verification: pending deployment.
- Legal, regulatory, tax, and distribution review: pending.
- Distribution venue selection and confirmation: pending.

**Final status: NOT READY — LAUNCHPAD-AGNOSTIC PRE-MAINNET PACKAGE**