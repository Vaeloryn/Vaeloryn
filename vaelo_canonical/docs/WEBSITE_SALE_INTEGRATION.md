# Future Website Sale Integration

**Status:** Planning only — website unchanged
**Sale status:** Fjord sale not created
**Canonical VAELO address:** Not deployed yet

## Integration goals

When the canonical VAELO token and initial Fjord sale are both live and verified,
the website may expose two links:

| CTA | Future destination |
|---|---|
| **BUY VAELO** | Official Fjord Foundry VAELO sale page |
| **VIEW VAELO CONTRACT** | Verified BaseScan page for the canonical VAELO token |

No URL is available yet. This document intentionally contains no fake, guessed,
or placeholder-looking live URL.

## Required activation gates

The website links must remain unconfigured until all of the following are true:

1. The canonical Base Mainnet factory deployment is approved.
2. The canonical VAELO token address is recorded in the final deployment
   manifest.
3. The token source is verified on BaseScan.
4. The Fjord sale has been created on Base Mainnet.
5. Fjord provides the official public sale URL.
6. The sale URL is checked against the official Fjord source.
7. Legal, regulatory, compliance, and disclosure review is complete.

## Future link configuration

When approved URLs exist, configure:

```text
BUY VAELO
  -> official Fjord Foundry VAELO sale URL

VIEW VAELO CONTRACT
  -> verified BaseScan canonical VAELO contract URL
```

The contract link must point to the verified canonical Mainnet token, not the
historical Base Sepolia V1.1 token and not the factory, distribution, or vesting
contract.

The sale link must point to Fjord's official public sale page, not an internal
configuration page, preview, guessed slug, or third-party mirror.

## User-facing safety requirements

- Do not present **BUY VAELO** as an active purchase flow before the official
  Fjord URL exists.
- Do not imply that a sale is live while the sale is still pending creation or
  verification.
- Do not display a token address until it has been verified and approved.
- Do not add sale prices, tiers, wallet limits, or eligibility claims to the
  website from this planning document alone.
- Keep the website integration separate from the immutable VAELO token contract.

## Required final review

Before publishing the links, check:

- The Fjord URL loads the official Base Mainnet VAELO sale.
- The BaseScan URL loads the verified canonical VAELO token.
- The token address matches the final deployment manifest.
- The sale maximum is no more than 10,000,000 VAELO.
- The sale uses the 200,000,000 Public Distribution allocation rather than
  creating a new allocation.
- Public disclosures match the final approved sale terms.

No website changes are part of the current sale-preparation scope.