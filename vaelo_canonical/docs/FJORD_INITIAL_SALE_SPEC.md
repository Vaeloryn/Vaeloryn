# VAELO Initial Fjord Foundry Sale Specification

**Status:** Preparation only — sale not created  
**Network:** Base Mainnet  
**Canonical token:** VAELO  
**Canonical token address:** Not deployed; to be populated only after the approved canonical Base Mainnet deployment and source verification

## A. Sale specification

| Item | Working target |
|---|---|
| Intended network | Base Mainnet |
| Intended token | Canonical VAELO |
| Total supply | 1,000,000,000 VAELO |
| Target FDV | $5,000,000 |
| Reference token price | $0.005 per VAELO |
| Sale type | Tiered |
| Initial sale maximum | 10,000,000 VAELO |
| Initial sale percentage | 1% of total supply |
| Maximum gross raise | $50,000 |

The working reference price is consistent with the target FDV:

```text
1,000,000,000 VAELO × $0.005 = $5,000,000 FDV
```

The sale parameters are external sale configuration. They must not be embedded in
`VaelorynToken.sol` or used to change canonical tokenomics.

## B. Token requirement

The sale must use only the verified canonical VAELO token created by the approved
`VaelorynDeploymentFactory` deployment on Base Mainnet.

Required preconditions:

- The token address is recorded in `vaelo_canonical/deployments/base-mainnet.manifest.json`.
- The token source is verified on BaseScan.
- The token address is independently checked against the factory event and getters.
- The on-chain total supply and allocation balances match the canonical manifest.
- The historical Base Sepolia V1.1 token is not used.

No canonical token address exists yet. A Fjord sale must not be created against a
placeholder, historical, or unverified address.

## C. Tier table

| Tier | VAELO | Price per VAELO | Gross proceeds |
|---|---:|---:|---:|
| Tier 1 | 1,000,000 | $0.003 | $3,000 |
| Tier 2 | 2,000,000 | $0.004 | $8,000 |
| Tier 3 | 3,000,000 | $0.005 | $15,000 |
| Tier 4 | 4,000,000 | $0.006 | $24,000 |
| **Maximum** | **10,000,000** | — | **$50,000** |

The proposed tiers total exactly 10,000,000 VAELO. Their weighted average
price is $0.005 per VAELO if every tier sells.

## D. Public Distribution accounting

The sale is carved out of the existing canonical Public Distribution allocation;
it is not an additional allocation.

| Account | Amount |
|---|---:|
| Canonical Public Distribution allocation | 200,000,000 VAELO |
| Initial Fjord sale maximum | 10,000,000 VAELO |
| Remaining Public Distribution allocation | 190,000,000 VAELO |

The approved Public Distribution custody address is:

```text
0x653835dc0fF216D2B10fF64153A9aA6A0639Fb82
```

Operationally, the canonical Genesis Distribution will send the complete
200,000,000 VAELO Public Distribution allocation to that address. After the
canonical token has been deployed and verified, the approved Public Distribution
custody will be expected to transfer no more than 10,000,000 VAELO to the final,
verified Fjord sale contract, if that arrangement is approved.

The Fjord sale contract address does not exist yet and must not be invented.
No transfer is authorized by this document. The 190,000,000 VAELO remainder
stays within the Public Distribution allocation and is not part of the initial
sale.

## E. Required sale custody arrangement

The expected pre-sale holder of the 10,000,000 VAELO sale allocation is the
approved Public Distribution custody address above. No new wallet address may
be substituted.

Before any transfer or sale creation, the following must be documented:

- The exact Fjord sale contract address.
- The authority controlling the Public Distribution custody.
- The approved transaction or operational procedure for funding the sale.
- The maximum amount funded: 10,000,000 VAELO.
- The treatment of any unsold tokens.
- A readback proving that the sale contract received the intended amount.

The exact Fjord custody and funding workflow is **REQUIRES EXTERNAL FJORD
CONFIRMATION**.

## F. Fjord-specific requirements requiring confirmation

The repository does not contain Fjord Foundry platform documentation or a created
sale configuration. The following items must therefore be confirmed externally
before sale creation:

- Whether Fjord supports this tiered sale structure and Base Mainnet token flow.
- Required token funding method and the correct sale contract recipient.
- Accepted payment asset, payment chain, settlement process, and decimal handling.
- Sale creation fields and which fields are fixed after creation.
- Parameters that cannot be changed after the sale goes live.
- Claim timing, claim contract, claim window, and treatment of unclaimed tokens.
- Whether wallet limits are required and how they are enforced.
- Eligibility, whitelist, KYC/AML, sanctions, and geographic restrictions.
- Whether collateral is required, what asset is used, and how it is held or returned.
- Oversubscription, refunds, cancellation, and unsold-token handling.
- Fjord/platform fees and any required service or settlement costs.

Each item is **REQUIRES EXTERNAL FJORD CONFIRMATION**. This document does not
assume any platform behavior.

## G. Financial model

### Gross proceeds by tier

| Tier | VAELO sold | Price | Gross proceeds |
|---|---:|---:|---:|
| Tier 1 | 1,000,000 | $0.003 | $3,000 |
| Tier 2 | 2,000,000 | $0.004 | $8,000 |
| Tier 3 | 3,000,000 | $0.005 | $15,000 |
| Tier 4 | 4,000,000 | $0.006 | $24,000 |
| **Maximum** | **10,000,000** | — | **$50,000** |

If every tier sells, the maximum gross proceeds are **$50,000**.

### Fees and costs

- Fjord/platform fees: **REQUIRES CURRENT FJORD CONFIRMATION**
- Payment or settlement fees: **REQUIRES CURRENT FJORD CONFIRMATION**
- Gas for approved token funding and operational transactions:
  **REQUIRES CURRENT FJORD CONFIRMATION**
- Legal, regulatory, compliance, accounting, custody, and communications costs:
  **REQUIRES PROFESSIONAL ESTIMATE**

### Net proceeds

No unknown fee or cost is assumed. The net proceeds formula is:

```text
Net proceeds =
  gross proceeds
  - Fjord/platform fees
  - payment and settlement fees
  - approved transaction costs
  - other approved sale costs
```

The numerical net proceeds are **REQUIRES CURRENT FJORD CONFIRMATION** and
professional cost estimates.

## H. Parameters that must be treated as final before activation

The following must be approved before sale activation, even if Fjord permits
some changes after creation:

- Canonical verified VAELO token address.
- Base Mainnet network.
- Maximum sale amount of 10,000,000 VAELO.
- Tier quantities and prices.
- Public Distribution funding source and approved custody.
- Sale start/end timing.
- Claim and settlement configuration.
- Wallet limits and eligibility rules.
- Geographic and compliance restrictions.
- Unsold-token and refund treatment.

Whether any of these fields can technically be changed after the sale goes live
is **REQUIRES EXTERNAL FJORD CONFIRMATION**. No live-sale mutation should be
assumed.

## I. Sale-to-token boundary

The VAELO token contract remains deliberately unaware of:

- Sale prices
- Tiers
- Sale caps
- Payment assets
- Wallet limits
- Eligibility rules
- Geographic restrictions
- Claims
- Collateral
- Fjord mechanics

Those settings belong to the separately reviewed sale configuration and Fjord
contracts or platform workflow.

## J. Legal and operational review

Professional review is required for the proposed public sale, including as
applicable:

- Token and sale classification in relevant jurisdictions.
- Public-offering, promotion, and disclosure requirements.
- KYC/AML and sanctions procedures.
- Geographic exclusions and access controls.
- Custody and authority over the Public Distribution allocation.
- Tax, accounting, proceeds, and fee treatment.
- Consumer, investor, risk, and refund disclosures.
- Data-protection obligations associated with eligibility checks.

This document is not legal, tax, financial, or regulatory advice.

## K. Final blockers

The sale remains blocked until:

1. The canonical VAELO Base Mainnet deployment is independently reviewed and
   authorized.
2. The canonical token is deployed and verified.
3. The factory, distribution, vesting, tokenomics, and recipient readbacks pass.
4. Fjord confirms the required sale, funding, claim, eligibility, collateral, and
   fee configuration.
5. The Public Distribution custody and funding procedure is approved.
6. Legal, regulatory, compliance, and disclosure review is complete.
7. The final sale configuration is approved.

**Final status: SALE PREPARATION COMPLETE — NOT CREATED**