# VAELO Canonical Implementation Reconstruction Plan

**Plan date:** 23 August 2026  
**Scope:** Reconstruct the canonical VAELO contract implementation from the confirmed tokenomics without changing the current website, deployed V1.1 contracts, DNS, Cloudflare configuration or deployment state.  
**Implementation status:** **Not started. No contracts were deployed or changed.**

## 1. Canonical tokenomics

The following is the confirmed existing canonical VAELO allocation. It is authoritative and must not be redesigned or replaced with the V1.1 figures.

| Allocation | VAELO | Share |
|---|---:|---:|
| Ecosystem & Community | 300,000,000 | 30% |
| Public Distribution | 200,000,000 | 20% |
| Vaeloryn Treasury | 200,000,000 | 20% |
| Team & Contributors | 150,000,000 | 15% |
| Founder | 100,000,000 | 10% |
| Strategic Partnerships | 50,000,000 | 5% |
| **Total supply** | **1,000,000,000** | **100%** |

### Canonical-source record

The allocation is explicitly confirmed by:

- `attached_assets/Pasted-VAELO-RECONSTRUCT-THE-CANONICAL-TOKENOMICS-IMPLEMENTATI_1787507799282.txt`
- `artifacts/vaeloryn/src/pages/Vaelo.tsx`

The newer token-only production design is documented in:

- `attached_assets/VaelorynToken.sol_–_Production_Implementation_v1_1785192281942.pages`

That document requires a fixed 1B supply, minting directly to a Genesis Distribution contract, ERC20Burnable, ERC20Permit / EIP-2612, no owner/admin authority, no upgradeability, no blacklist and no hidden transfer logic.

## 2. Existing V1.1 Base Sepolia deployment

The published addresses remain the existing **V1.1 testnet prototype**, not the canonical final implementation:

| Contract | Address |
|---|---|
| VAELO token | `0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c` |
| Founder vesting | `0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2` |
| Genesis allocator | `0xa3eF040471497538a617061FdDEea0CD4C03beBa` |

Its confirmed state and source behavior are:

| Item | V1.1 prototype |
|---|---|
| Supply | 1,000,000,000 VAELO |
| Token | Standard ERC-20; no Burn or Permit extensions |
| Token mint | Initial 1B minted to the deployer, then transferred to allocator |
| Ecosystem & Mission Treasury | 350,000,000 / 35% |
| Public & Community | 250,000,000 / 25% |
| Founder Vesting | 150,000,000 / 15% |
| Future Team & Advisers | 100,000,000 / 10% |
| Strategic Partnerships | 100,000,000 / 10% |
| Long-Term Reserve | 50,000,000 / 5% |
| Founder schedule | Five years; 10%, 25%, 45%, 70%, 100% cumulative, linear inside each year |
| Tests | 14 passing Hardhat tests |

## 3. Exact differences: canonical design vs V1.1

| Area | Canonical design | V1.1 deployment | Required outcome |
|---|---|---|---|
| Total supply | 1B VAELO | 1B VAELO | Reuse the fixed 1B constitutional maximum. |
| Ecosystem & Community | 300M | 350M ecosystem/mission treasury | Replace allocation. |
| Public Distribution | 200M | 250M public/community | Replace allocation and keep no-sale requirements distinct from custody. |
| Vaeloryn Treasury | 200M | No separate equivalent | Add a separately identified canonical allocation destination. |
| Team & Contributors | 150M | 100M future team/advisers | Replace amount; the vesting/custody mechanics are not yet specified. |
| Founder | 100M | 150M | Replace amount using the final vesting specification. |
| Strategic Partnerships | 50M | 100M | Replace amount. |
| Long-term reserve | No standalone category | 50M | Do not carry forward unless a later canonical specification adds it. |
| Token capabilities | Burn, burnFrom, Permit, EIP-712 domain, nonces | Standard ERC-20 only | Implement approved OpenZeppelin Burnable and Permit extensions. |
| Admin / upgrades | No admin/owner and no upgradeability | No owner/upgrades in prototype | Preserve this principle; do not introduce privileged controls to solve deployment convenience. |
| Genesis distribution | Full supply minted directly to Genesis Distribution | Supply minted to deployer, then transferred to allocator | Replace deployment topology. |
| Tests | Foundry is claimed publicly, but source evidence is absent | 14 Hardhat tests | Build a Foundry suite; never state a test count until it exists and passes. |

## 4. Where the existing 850M VAELO went

The current V1.1 deployment places:

- **150,000,000 VAELO** in `VaelorynFounderVesting`.
- **850,000,000 VAELO** at `0x23A88531450e2f13cC4237CCd18ee34c333e654a`, the V1.1 deployer and founder-vesting beneficiary.

The following V1.1 allocator destinations all resolve to that same deployer address:

| V1.1 allocation destination | Amount |
|---|---:|
| Ecosystem treasury | 350,000,000 |
| Community treasury | 250,000,000 |
| Team treasury | 100,000,000 |
| Strategic treasury | 100,000,000 |
| Long-term reserve | 50,000,000 |
| **Total at deployer** | **850,000,000** |

### Why the V1.1 deployment is not the canonical allocation

1. Its category amounts differ from the confirmed canonical allocation.
2. It has no separate Vaeloryn Treasury allocation.
3. Five intended categories are aggregated at one address, so the balances are not independently segregated or independently auditable.
4. The token is a standard ERC-20. The holder of the 850M can use normal ERC-20 `transfer` functionality; the allocator has no continuing custody or category-enforcement mechanism after the one-time allocation.
5. The founder vesting contract holds 150M rather than the canonical 100M and enforces the obsolete five-year schedule.

## 5. Does the canonical implementation already exist?

**No complete canonical implementation was found.**

Targeted repository and Git-object searches found:

- No `foundry.toml`
- No Foundry `*.t.sol` tests
- No newer Genesis Distribution contract
- No newer FounderVesting contract
- No Foundry deployment script
- No source or test output supporting the claimed 148/148 Foundry tests

The existing production Pages document is a specification for the token only. The V1.1 Hardhat project is the only contract suite tied to the currently published Base Sepolia deployment.

## 6. Required canonical contract architecture

The code must be reconstructed as a new, version-controlled Foundry project. It must not mutate or rely on the V1.1 deployed contracts.

### 6.1 VaelorynToken — must be implemented

Implement the explicitly specified token:

- Fixed constitutional maximum: `1_000_000_000 ether`
- One-time initial mint of the entire amount
- Initial mint directly to the Genesis Distribution contract
- `ERC20`
- `ERC20Burnable`, including inherited `burn` and `burnFrom`
- `ERC20Permit`, including EIP-2612 `permit`, `nonces` and `DOMAIN_SEPARATOR`
- Immutable Genesis Distribution address
- Revert on zero Genesis Distribution address
- No further mint path
- No owner, administrator, pause, blacklist, freeze, transfer tax or upgrade path

### 6.2 Genesis Distribution — must be implemented

Implement a one-time distribution contract that receives the entire supply and transfers exactly:

| Canonical recipient role | Amount |
|---|---:|
| Ecosystem & Community custody | 300,000,000 VAELO |
| Public Distribution custody | 200,000,000 VAELO |
| Vaeloryn Treasury custody | 200,000,000 VAELO |
| Team & Contributors custody / vesting | 150,000,000 VAELO |
| Founder vesting | 100,000,000 VAELO |
| Strategic Partnerships custody | 50,000,000 VAELO |
| **Total** | **1,000,000,000 VAELO** |

It must:

- Reject zero recipient addresses.
- Reject duplicate execution.
- Require the complete supply before allocation.
- Leave no VAELO balance after successful allocation.
- Emit allocation events containing the category and recipient so the transaction can be independently audited.
- Use the approved recipient addresses captured in a deployment manifest.

### 6.3 Founder vesting — final schedule documented

The final schedule is documented in `reports/VAELO_Founder_Vesting_Final_Specification.md`:

- 100,000,000 VAELO total founder allocation
- 2,500,000 immediately claimable at deployment
- 2,500,000 at +90 days
- 2,500,000 at +180 days
- 2,500,000 at +270 days
- Remaining 90,000,000 VAELO vested linearly over the following 36 months

The arithmetic is now explicit: one 2.5M initial release plus exactly three 2.5M quarterly releases equals 10M; the remaining 90M brings the total to exactly 100M. There is no fourth quarterly release. The future implementation must enforce exactly 100,000,000 VAELO, have no admin override, and include auditable immutable beneficiary and schedule timestamps.

### 6.4 Other allocation mechanisms — no mechanisms may be invented

The current canonical documentation specifies allocation amounts and high-level purposes but does not define:

- Custody addresses or signer arrangements
- Whether Ecosystem & Community is vested, grant-controlled or immediately transferable
- A Public Distribution release/sale mechanism
- A Team & Contributors vesting schedule
- Treasury governance or spending controls
- Strategic Partnerships lockups or release conditions

Therefore, the implementation must **not** assume multisig custody, sale contracts, lockups or vesting for those categories. Before coding the Genesis Distribution recipient configuration, the project must supply an approved recipient-address and custody decision for each category. If later specifications add a vesting or distribution mechanism, that mechanism should be a separately specified and tested contract, not silently embedded in the allocator.

### 6.5 Deployment topology — explicit design decision required

The production token specification requires the token constructor to mint directly to the Genesis Distribution address. The Genesis Distribution logic also needs to know the token address. This creates a constructor-address dependency that V1.1 bypassed by temporarily minting to the deployer.

Before implementation, approve and document a deployment topology that preserves the no-admin principle, such as a deterministic-address or factory-based deployment design. The current canonical documents do not choose one, so this must be specified rather than improvised.

## 7. What can be reused

The following V1.1 elements can be used as references or development patterns, but not as the canonical economic implementation:

- Solidity 0.8.24 compiler baseline and optimizer discipline.
- OpenZeppelin ERC-20 and SafeERC20 use.
- Base Sepolia chain-ID safety check.
- One-time allocation guard concept.
- Constructor zero-address validation.
- Release-accounting pattern for founder vesting.
- Separate contract responsibilities: token, allocation and vesting.
- Local test scenarios for fixed supply, one-time allocation and no double-release.

The V1.1 allocation amounts, recipient topology, deployer-held reserves, founder amount, vesting schedule, Hardhat deployment process and published contract addresses cannot be reused as canonical facts.

## 8. What must be replaced or implemented

### Replace

- V1.1 token contract with the specified Burnable + Permit token.
- V1.1 allocator amounts and six-role recipient structure.
- V1.1 founder vesting contract after the final schedule specification.
- V1.1 deployment script, which mints to the deployer and intentionally collapses five reserve roles into the deployer address.
- V1.1 Hardhat-only test evidence for any claimed canonical Foundry test result.

### Implement

1. A new Foundry project and pinned dependency/solidity configuration.
2. Canonical `VaelorynToken`.
3. Canonical one-time Genesis Distribution contract.
4. Canonical founder vesting contract, only after the schedule is made mathematically complete.
5. A recipient/custody manifest for all six allocation destinations.
6. A deterministic, non-privileged deployment topology that honors direct Genesis minting.
7. Deployment and post-deployment readback scripts for Base Sepolia.
8. A source-verification workflow that verifies the actual Vaeloryn-named source and constructor arguments.
9. A machine-readable deployment manifest with chain ID, addresses, transaction hashes, compiler settings, bytecode hashes, constructor arguments and verified explorer links.

## 9. Required tests

The new Foundry suite must be added before any test count is published. It should cover at least:

### Token

- Metadata, decimals and fixed 1B initial supply.
- Initial supply is minted directly to the approved Genesis Distribution address.
- No public/additional mint path exists.
- `burn` and `burnFrom` behave as standard OpenZeppelin behavior.
- Permit succeeds with a valid signature.
- Permit rejects expired, replayed and invalid signatures.
- `nonces` and `DOMAIN_SEPARATOR` behavior.
- No owner/admin/upgrade/pause/blacklist methods exist.

### Genesis Distribution

- All six exact canonical amounts.
- Total allocation equals exactly 1B VAELO.
- All six recipient addresses are non-zero.
- No duplicate allocation execution.
- Allocation cannot run unless the full supply is held.
- Allocator ends at zero VAELO.
- Event data allows each category and recipient to be reconstructed.

### Founder vesting

After the schedule is clarified:

- Allocation equals exactly 100M VAELO.
- Immediate, each scheduled release and linear phase match the approved schedule.
- No tokens release before their vesting condition.
- Multiple calls cannot double-release.
- Full allocation releases exactly once over the complete schedule.
- No admin can alter beneficiary, timing or allocation.

### Deployment and invariants

- Chain-ID guard permits Base Sepolia only in the testnet deployment script.
- Post-deployment readbacks match the manifest.
- Invariant/fuzz tests preserve supply accounting and never exceed the allocated amounts.
- Source verification uses the actual source and the exact compiler/optimizer settings.

## 10. Required deployment and verification steps

After the implementation and tests exist, but not as part of this task:

1. Obtain approved non-zero recipient addresses and the final founder schedule.
2. Select and document the direct-Genesis-mint deployment topology.
3. Run the focused Foundry test suite and save the output.
4. Run static analysis and resolve findings.
5. Deploy the new suite to Base Sepolia with a chain-ID guard.
6. Capture all deployment transaction hashes and constructor arguments.
7. Run post-deployment getter and balance readbacks.
8. Verify each contract under its correct Vaeloryn source name with the exact compiler version, optimizer settings and constructor arguments.
9. Publish the deployment manifest and test evidence.
10. Only then update public website claims and prepare investor documentation.

Any signing credential used for this process must be held in the workspace's secret-management system, not version-controlled configuration. If a credential may have been exposed, rotate it before any deployment activity.

## 11. Required documentation updates after evidence exists

Do not make these website changes now. After a new canonical deployment is verified, update:

- `artifacts/vaeloryn/src/pages/Vaelo.tsx`
- `artifacts/vaeloryn/src/pages/Verify.tsx`
- `artifacts/vaeloryn/src/pages/Transparency.tsx`
- `artifacts/vaeloryn/src/pages/Status.tsx`
- `artifacts/vaeloryn/src/pages/Roadmap.tsx`
- `artifacts/vaeloryn/src/pages/Home.tsx`

Each update must distinguish:

- **Designed:** approved canonical specification.
- **Implemented:** source present and testable in the repository.
- **Deployed:** address and transaction exist on the named network.
- **Verified:** explorer source/metadata and post-deployment readbacks are available.

The site must not claim “148/148 Foundry tests” until that exact suite exists and passes. It must not attach the canonical 100M allocation or Burn/Permit claims to the V1.1 addresses.

## 12. Disposition of the old V1.1 testnet deployment

The old V1.1 Base Sepolia deployment must remain untouched as a historical testnet prototype:

- Do not destroy, alter or redeploy it as part of canonical reconstruction.
- Do not treat its addresses, allocation, 850M deployer balance, five-year vesting schedule or 14-test result as the canonical final protocol.
- Preserve its addresses and transactions in an archival record.
- When a verified canonical replacement exists, label V1.1 clearly as **“Base Sepolia Prototype V1.1 — non-canonical historical test deployment.”**

## 13. Website/deployment diagnosis

### Local application

| Check | Result |
|---|---|
| Production build | Passes successfully |
| Managed Vaeloryn workflow | Running |
| Preview | Renders the Vaeloryn homepage successfully |
| Browser console | No application runtime errors observed |
| Artifact production setup | Valid static web setup: Vite builds to `dist/public`, and the artifact includes SPA rewrite configuration |

The build does emit non-blocking source-map notices from three UI components and a non-blocking bundle-size warning. Neither prevents the application from building or rendering.

### Published deployment

Replit deployment metadata reports:

- No active Replit deployment
- No production URL
- No successful Replit production build to inspect

Therefore the reported public website outage is **not reproducible as an application start/build failure in this workspace**. It is likely an absence of an active Replit deployment or an external hosting/domain-routing issue. This task did not change DNS, Cloudflare, deployment settings or hosting configuration.

## 14. Files created or modified by this task

Created:

- `reports/VAELO_Canonical_Implementation_Reconstruction_Plan.md`

Updated:

- `reports/VAELO_Canonical_Implementation_Tokenomics_Reconciliation.md` — canonical-tokenomics status addendum only.

Not changed:

- Website source and configuration
- Smart contracts
- Deployed Base Sepolia contracts
- Tokenomics
- DNS / Cloudflare / deployment configuration
- Investor documents

## Reconstruction decision

The canonical allocation is known, and the founder vesting schedule is now deterministic: three 2.5M quarterly releases after the initial 2.5M, followed by 90M over exactly 1,095 days. The canonical implementation does not yet exist in this repository. Once six recipient/custody decisions and the direct-Genesis-mint deployment topology are approved, the new Foundry implementation can be built, tested, verified and deployed as a replacement testnet suite.