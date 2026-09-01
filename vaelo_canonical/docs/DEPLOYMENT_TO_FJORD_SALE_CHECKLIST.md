# Canonical VAELO Base Mainnet Deployment and Future Distribution Checklist

**Status:** Planning checklist only — no step executed
**Network:** Base Mainnet
**Distribution:** Potential future public distribution; no venue selected or sale created

Fjord Foundry is one potential launch/distribution platform under evaluation. It is
not a protocol dependency, confirmed partner, or required deployment destination.

## Stop conditions

Stop immediately if any of the following occurs:

- A chain other than Base Mainnet (`8453`) is connected.
- A recipient differs from the approved Mainnet manifest.
- The canonical source or build settings differ from the reviewed package.
- The token address is historical, placeholder, unverified, or not recovered from
  the approved factory transaction.
- A future distribution would exceed 10,000,000 VAELO without separate approval.
- Potential venue requirements or legal approvals remain unresolved.
- Any step would require using `--broadcast` before final authorization.

## Ordered sequence

### 1. Final independent contract/security review

- Review the unchanged canonical Solidity contracts.
- Review the dedicated Base Mainnet script and manifest.
- Record findings and remediation decisions.
- Do not proceed on local test evidence alone.

### 2. Final recipient-address verification

Verify the six approved addresses against the final deployment environment and
manifest:

- Ecosystem & Community
- Public Distribution
- Treasury Safe
- Team & Contributors
- Strategic Partnerships
- Founder beneficiary

Confirm the Treasury Safe is used instead of the old MetaMask address.

### 3. Final Mainnet deployment authorization

Confirm written approval, deployment signer controls, Base Mainnet RPC,
sufficient Base ETH for gas, source-verification credentials, and the final
`NOT_DEPLOYED` manifest.

No broadcast is authorized by this checklist.

### 4. Deploy canonical factory

If authorized, run only the reviewed Base Mainnet deployment script using chain
ID `8453` and the approved environment configuration.

The factory must atomically create the distribution, token, vesting, and
allocation. Pass the reviewed `VAELO_OFFICIAL_LAUNCH_TIMESTAMP` explicitly;
never let the Mainnet path derive T0 from `block.timestamp`. Do not deploy a
separate token or sale contract as a substitute.

### 5. Read back factory, token, distribution, and vesting addresses

Capture the factory event and getter results. Record the four resulting contract
addresses and deployment transaction hash in the Mainnet manifest.

### 6. Verify Mainnet source code

Verify the factory and created contracts using:

- Solidity `0.8.24`
- Optimizer enabled
- 200 optimizer runs
- Paris EVM target
- OpenZeppelin `5.4.0`
- Exact constructor inputs

Record BaseScan verification URLs. Do not claim verification before it succeeds.

### 7. Confirm tokenomics on-chain

Read back total supply, recipient balances, allocation constants, and the zero
residual Genesis Distribution balance. Confirm exactly 1,000,000,000 VAELO.

### 8. Confirm founder vesting on-chain

Read back:

- Approved founder beneficiary
- T0
- T0 + 90-day release boundary
- T0 + 180-day release boundary
- T0 + 270-day linear start
- 1,095-day linear duration
- 100,000,000 VAELO founder cap

### 9. Confirm Treasury Safe allocation

Confirm the Treasury Safe received exactly 200,000,000 VAELO:

```text
0x3A9bee20360294F8439513Ae70D189f56288baF2
```

### 10. Confirm Public Distribution allocation

Confirm the approved Public Distribution custody received exactly
200,000,000 VAELO:

```text
0x653835dc0fF216D2B10fF64153A9aA6A0639Fb82
```

### 11. Establish the official canonical VAELO contract address

Publish the verified token address only after it matches the approved factory
transaction, event, getters, bytecode, constructor inputs, and manifest.

Do not use any historical Base Sepolia V1.1 address.

### 12. Evaluate a potential distribution venue using only the verified canonical VAELO Mainnet token

Use the verified canonical token address and Base Mainnet network. Confirm the
selected venue's current token, funding, claim, and distribution requirements
first. No venue is implied by this checklist.

### 13. Configure any approved initial distribution

If a future venue and sale structure are approved, the current external planning
target is:

- Tier 1: 1M at $0.003
- Tier 2: 2M at $0.004
- Tier 3: 3M at $0.005
- Tier 4: 4M at $0.006
- Maximum: 10M VAELO
- Maximum theoretical gross raise: $50,000

Do not modify the VAELO token contract.

### 14. Complete required distribution, legal, and disclosure checks

Confirm the selected venue's requirements, claim behavior, wallet limits,
eligibility, geographic restrictions, collateral, fees, refunds, unsold tokens,
KYC/AML, sanctions, and required public disclosures.

Any unknown venue behavior is **REQUIRES EXTERNAL VENUE CONFIRMATION**.

### 15. Create or activate a distribution only after final approval

Confirm the final distribution configuration, funding amount, custody path, and
all professional approvals before creation or activation.

### 16. Obtain the official public distribution URL

Record the real public URL only after the distribution has actually been created
and verified. Do not fabricate or publish a placeholder URL.

### 17. Add the real venue URL to the website

Update the website only with the official selected-venue URL and the verified
BaseScan VAELO contract URL. This step is intentionally deferred until Steps 11
and 16 are complete.

### 18. Publish the distribution announcement

Publish only after the token, distribution, links, disclosures, custody, and required
legal/compliance approvals are final.

## Current status

Steps 1–18 are planning gates. No deployment, transfer, sale creation, website
change, or announcement is authorized by this checklist.