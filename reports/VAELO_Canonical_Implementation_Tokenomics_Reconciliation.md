# VAELO Canonical Implementation & Tokenomics Reconciliation

**Reconciliation date:** 23 August 2026  
**Scope:** Repository history, current website source, attached project documentation, local prototype source and tests, live Base Sepolia RPC reads, and Blockscout explorer data.  
**Status:** **Investor documentation must not be generated from the current public figures yet.** The production specification, public website and deployed testnet contracts do not reconcile.

## Canonical-tokenomics status update

A subsequent project directive, `attached_assets/Pasted-VAELO-RECONSTRUCT-THE-CANONICAL-TOKENOMICS-IMPLEMENTATI_1787507799282.txt`, explicitly confirms that the website's six-category 1,000,000,000 VAELO allocation is the existing **canonical intended tokenomics**. This resolves the prior question about which allocation is authoritative:

- Ecosystem & Community: 300,000,000 VAELO / 30%
- Public Distribution: 200,000,000 VAELO / 20%
- Vaeloryn Treasury: 200,000,000 VAELO / 20%
- Team & Contributors: 150,000,000 VAELO / 15%
- Founder: 100,000,000 VAELO / 10%
- Strategic Partnerships: 50,000,000 VAELO / 5%

This update does **not** establish that those figures are implemented by the published Base Sepolia addresses. The reconstruction plan records the work required to align a new implementation with the confirmed canonical allocation.

## Executive conclusion

There is **not currently one complete, traceable canonical implementation** covering the VAELO token, genesis allocation, founder vesting and test suite.

Three distinct evidence sets exist:

1. **Current production token specification**  
   `attached_assets/VaelorynToken.sol_–_Production_Implementation_v1_1785192281942.pages` is the newest named production specification. It defines a future production **VaelorynToken** design with a fixed 1,000,000,000 VAELO supply, `ERC20Burnable`, `ERC20Permit` (EIP-2612), an immutable Genesis Distribution address, no owner/admin privilege and no upgradeability. It is a token-only specification: it does **not** define the 100M founder allocation, six-category allocation or founder vesting terms. Its own readiness checklist is explicitly framed as requirements **before Base Mainnet deployment**.

2. **Current public website / milestone claims**  
   The website and its July 2026 milestone brief claim a 100M / 10% founder allocation, a 300M / 200M / 200M / 150M / 100M / 50M allocation, quarterly-plus-linear founder vesting, Burn + Permit functionality, three source-verified contracts and 148/148 Foundry tests.

3. **Actual published Base Sepolia deployment**  
   The three addresses published by the website are active on Base Sepolia and correspond to the VAELO Prototype V1.1 deployment from 22 July 2026. Live state confirms the V1.1 allocation: **150M / 15% founder vesting**, five-year vesting, and an aggregated 850M balance at the deployer address. The deployed token is a standard fixed-supply ERC-20 and its explorer ABI does not include Burn or Permit functions. The checked-in Hardhat suite runs **14/14** tests.

Accordingly, the evidence does **not** establish that a 100M / 10% founder allocation, the revised allocation structure, quarterly-plus-linear vesting, or a 148-test Foundry implementation has been deployed to the published Base Sepolia addresses.

## 1. Current canonical specification

### Production token specification

**Path:**  
`attached_assets/VaelorynToken.sol_–_Production_Implementation_v1_1785192281942.pages`

The document identifies itself as:

- `VaelorynToken.sol`
- Version `1.0`
- Status `Production Implementation`

Its explicit technical design is:

| Item | Production token specification |
|---|---:|
| Token standard | ERC-20 |
| Fixed supply | 1,000,000,000 VAELO |
| Initial mint | Once, directly to the Genesis Distribution contract |
| Burn support | ERC20Burnable |
| Permit support | ERC20Permit / EIP-2612 |
| Admin / owner role | None |
| Upgradeability | None |
| Transfer taxes / hidden transfer logic | None |
| Blacklist / freeze capability | None |
| Production readiness | Pending testing, static analysis, verification and other checklist items before Base Mainnet |

This document is the strongest evidence for the **intended future token design**, but it is not a complete VAELO constitutional specification. It has no tokenomics allocation table, no founder allocation, no vesting schedule, no deployment address, no Foundry project or test output, and no completed-production-deployment statement.

### Public canonical claims

The current website and accompanying milestone brief are the only repository sources for the later public allocation and vesting model:

- `artifacts/vaeloryn/src/pages/Vaelo.tsx`
- `artifacts/vaeloryn/src/pages/Verify.tsx`
- `artifacts/vaeloryn/src/pages/Transparency.tsx`
- `artifacts/vaeloryn/src/pages/Status.tsx`
- `artifacts/vaeloryn/src/pages/Roadmap.tsx`
- `attached_assets/Pasted-The-Vaeloryn-protocol-has-now-reached-a-major-milestone_1785531732890.txt`

Those files are newer than the V1.1 prototype documentation. However, no corresponding Foundry contracts, Foundry configuration, Foundry tests, deployment manifest, verified source bundle, transaction record, or replacement contract addresses were found in the repository or its retained Git object paths.

**Canonical-status conclusion:** the project has a newer intended token specification and newer public claims, but it does not yet have a single, complete, repository-verifiable canonical implementation that supports the public 100M / 10% tokenomics and 148-test claims.

## 2. Current intended implementation

### Foundry implementation

No Foundry implementation is present in the workspace or retained Git history:

- No `foundry.toml`
- No `.t.sol` test files
- No Foundry contract project
- No Foundry deployment script
- No Foundry test result artifact

The 148/148 Foundry claim appears in the milestone brief and later website source, but its source code and test evidence are absent from this repository.

### Hardhat Prototype V1.1

**Path:** `vaelo_prototype/`

The checked-in implementation is explicitly labelled:

- `VAELO Prototype V1.1`
- `Test-only prototype`
- `For local development and Base Sepolia testing only`

It contains:

- `contracts/VaelorynToken.sol`
- `contracts/VaelorynFounderVesting.sol`
- `contracts/VaelorynGenesisAllocator.sol`
- `scripts/deploy.js`
- Two Hardhat test files

The prototype source was introduced and last updated on 22 July 2026. The production token specification and public protocol-milestone files were added in the later 31 July 2026 commit.

The later date is evidence that the public material is newer. It is **not**, by itself, proof that a 148-test Foundry codebase exists or that it superseded the deployed V1.1 contracts.

## 3. Deployed contracts

**Network:** Base Sepolia testnet  
**Chain ID:** 84532  
**Mainnet:** Not launched

| Contract | Published address | Deployment evidence |
|---|---|---|
| VAELO token | `0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c` | Contract code exists. Creation transaction `0x11b445afcfe03e56051b03a288f130065470876f11727a3bfc97638687a5c021`, 22 July 2026 10:58:14 UTC. |
| Founder vesting | `0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2` | Contract code exists. Creation transaction `0xae530f7cc17017ae4a76ab9e04b0a5704d14bbd1ea26ef55e44d1da146424f81`, 22 July 2026 10:58:16 UTC. |
| Genesis allocator | `0xa3eF040471497538a617061FdDEea0CD4C03beBa` | Contract code exists. Creation transaction `0x02a1d9138fbb916380227c0e481e59df6c2743a2736fd687bb81973c9e700445`, 22 July 2026 10:58:16 UTC. Genesis allocation transaction `0xd99975cb8c5e09bf740ae77737e0f5d7d62bdfd86ae2ce68d2567608a4c4613a`, 22 July 2026 10:58:18 UTC. |

The token deployment transaction, vesting deployment, allocator deployment and allocation transaction all originate from:

`0x23A88531450e2f13cC4237CCd18ee34c333e654a`

This matches the checked-in V1.1 deployment argument files and prototype deployment script.

## 4. On-chain verification status

### Confirmed through live Base Sepolia RPC

| Read | Result |
|---|---|
| Token code | Present at the published token address |
| `name()` | `Vaeloryn` |
| `symbol()` | `VAELO` |
| `decimals()` | `18` |
| `totalSupply()` | `1,000,000,000 VAELO` |
| `MAX_SUPPLY()` | `1,000,000,000 VAELO` |
| Token runtime bytecode | Exact match with the checked-in V1.1 `VaelorynToken.sol` runtime bytecode |
| Vesting `TOTAL_ALLOCATION()` | `150,000,000 VAELO` |
| Vesting `startTimestamp()` | `1784717892` |
| Vesting `beneficiary()` | `0x23A88531450e2f13cC4237CCd18ee34c333e654a` |
| Vesting `released()` | `0 VAELO` at the time of the reconciliation |
| Allocator `allocationCompleted()` | `true` |
| Allocator balance | `0 VAELO` |
| Founder vesting balance | `150,000,000 VAELO` |
| Five non-founder allocator destinations | The same deployer address, aggregating to `850,000,000 VAELO` |

The allocator exposes the same deployer address for ecosystem, community, team, strategic and long-term reserve destinations. Consequently, the deployed testnet state does not preserve separately auditable balances for those five categories.

### Explorer source-verification evidence

The explorer evidence does not support the website’s unqualified claim that all three VAELO contracts are source-verified as the intended Vaeloryn production implementation:

| Contract | Explorer evidence | Reconciliation assessment |
|---|---|---|
| Token | Blockscout reports a verified standard ERC-20 source with compiler 0.8.24, optimizer enabled (200 runs), but labels the source `ExclusiveShitcoin` at `contracts/ExclusiveShitcoin.sol`. Its ABI contains only standard ERC-20 functions plus `MAX_SUPPLY`; it has no `burn`, `burnFrom`, `permit`, `nonces`, or EIP-712 interface. | The verified bytecode supports the V1.1 standard ERC-20 behavior, not the newer production token specification. The source identity/contract-name mismatch must be resolved. |
| Founder vesting | The address-history response identifies a verified `VaelorynFounderVesting` creation, but the smart-contract-details endpoint returned no ABI, compiler settings, source path or source metadata. | Verification status is internally inconsistent across explorer endpoints. Treat as unverified for investor purposes until manually confirmed and source files are retrieved. |
| Genesis allocator | The address-history response identifies a verified `VaelorynGenesisAllocator` creation, but the smart-contract-details endpoint returned no ABI, compiler settings, source path or source metadata. | Verification status is internally inconsistent across explorer endpoints. Treat as unverified for investor purposes until manually confirmed and source files are retrieved. |

## 5. Complete tokenomics reconciliation

### Public current tokenomics

The current website figures mathematically reconcile:

| Public allocation category | VAELO | Percentage |
|---|---:|---:|
| Ecosystem & Community | 300,000,000 | 30% |
| Public Distribution | 200,000,000 | 20% |
| Vaeloryn Treasury | 200,000,000 | 20% |
| Team & Contributors | 150,000,000 | 15% |
| Founder | 100,000,000 | 10% |
| Strategic Partnerships | 50,000,000 | 5% |
| **Total** | **1,000,000,000** | **100%** |

### Hardhat V1.1 / deployed Base Sepolia tokenomics

| V1.1 allocation category | VAELO | Percentage |
|---|---:|---:|
| Ecosystem & Mission Treasury | 350,000,000 | 35% |
| Public & Community | 250,000,000 | 25% |
| Founder Vesting | 150,000,000 | 15% |
| Future Team & Advisers | 100,000,000 | 10% |
| Strategic Partnerships | 100,000,000 | 10% |
| Long-Term Reserve | 50,000,000 | 5% |
| **Total** | **1,000,000,000** | **100%** |

### Required reconciliation table

| Item | Current public / intended documentation | Foundry implementation | Hardhat Prototype V1.1 | Deployed on-chain at published addresses |
|---|---|---|---|---|
| Total supply | 1,000,000,000 VAELO | No source present | 1,000,000,000 VAELO | 1,000,000,000 VAELO confirmed |
| Founder allocation | 100,000,000 VAELO | No source present | 150,000,000 VAELO | 150,000,000 VAELO confirmed |
| Founder percentage | 10% | No source present | 15% | 15% confirmed |
| Ecosystem allocation | 300,000,000 / 30% | No source present | 350,000,000 / 35% | V1.1 destination assigned, but aggregated with other deployer-held allocations |
| Public / community allocation | 200,000,000 / 20% | No source present | 250,000,000 / 25% | V1.1 destination assigned, but aggregated with other deployer-held allocations |
| Treasury allocation | 200,000,000 / 20% | No source present | No equivalent separate V1.1 category | Not present as a separate address |
| Team allocation | 150,000,000 / 15% | No source present | 100,000,000 / 10% | V1.1 destination assigned, but aggregated with other deployer-held allocations |
| Founder vesting allocation | 100,000,000 / 10% | No source present | 150,000,000 / 15% | 150,000,000 VAELO held by vesting contract |
| Strategic allocation | 50,000,000 / 5% | No source present | 100,000,000 / 10% | V1.1 destination assigned, but aggregated with other deployer-held allocations |
| Long-term reserve | Included nowhere as a separate public category | No source present | 50,000,000 / 5% | V1.1 destination assigned, but aggregated with other deployer-held allocations |
| Founder vesting | 2.5M immediate; 2.5M every 90 days in Year 1; stated 90M linear for following 36 months | No source present | Five-year cumulative linear schedule: 15M / 37.5M / 67.5M / 105M / 150M | V1.1 150M vesting contract confirmed by public getters |
| Tests | 148/148 Foundry claimed | No source, config or output present | 14/14 Hardhat tests | The repository can only reproduce 14/14 Hardhat tests |

## 6. Vesting reconciliation

### Deployed V1.1 vesting

The live vesting contract confirms the V1.1 schedule:

- Total allocation: **150,000,000 VAELO**
- Vesting start timestamp: **1784717892**
- Cumulative vesting:
  - End of Year 1: 15,000,000 VAELO / 10%
  - End of Year 2: 37,500,000 VAELO / 25%
  - End of Year 3: 67,500,000 VAELO / 45%
  - End of Year 4: 105,000,000 VAELO / 70%
  - End of Year 5: 150,000,000 VAELO / 100%
- Vesting is linear within each annual segment.
- `release()` is permissionless but pays the fixed beneficiary.
- There is no owner/admin bypass, revoke, pause or emergency-recovery function in the checked-in V1.1 contract.

### Publicly claimed vesting

The website claims:

- 100,000,000 VAELO total founder allocation
- 2,500,000 immediately claimable
- 2,500,000 every 90 days during Year 1
- Remaining 90,000,000 VAELO vested linearly over the following 36 months

This is not supported by the live Base Sepolia vesting contract. It also requires a written clarification: if there are four 90-day releases in Year 1, the stated terms total 102,500,000 VAELO; if there are three releases, they total exactly 100,000,000 VAELO. The release count and schedule must be explicitly defined before publication.

## 7. Current test suite

The reproducible repository test result is:

```text
14 passing
```

The two Hardhat test files contain 3 and 11 tests respectively, and `npm test` passes all 14.

No Foundry test project, test files or execution output was found. Therefore:

- The project can accurately say the checked-in V1.1 prototype has **14/14 passing Hardhat tests**.
- The project cannot, from this repository alone, substantiate **148/148 Foundry tests passing**.

## 8. Obsolete prototype identification

The 150M / 15% Hardhat material is not obsolete in the sense of being irrelevant to the published testnet addresses. It is the only source code and test suite that can currently be tied to the published Base Sepolia deployment.

It is likely superseded as an **intended production design** by the newer token specification and later public website claims, but no replacement contract suite has been supplied. Therefore it should be classified as:

> **Active testnet prototype / superseded candidate for production, not yet superseded by traceable repository evidence.**

## 9. Remaining discrepancies

1. **Founder allocation:** public 100M / 10%; deployed 150M / 15%.
2. **Allocation structure:** public six categories differ materially from V1.1/deployed categories and amounts.
3. **Founder vesting:** public quarterly-plus-linear schedule differs from deployed five-year linear schedule.
4. **Public vesting arithmetic:** the 100M schedule needs an explicit number of Year 1 90-day releases.
5. **Token functionality:** public/proposed production design includes Burn + Permit; deployed token ABI does not.
6. **Genesis architecture:** production token specification requires minting directly to Genesis Distribution; V1.1 minted to the deployer and transferred to the allocator.
7. **Test suite:** public claim 148 Foundry tests; reproducible project evidence is 14 Hardhat tests.
8. **Source verification:** token verification is associated with an unrelated visible source/contract name; vesting and allocator explorer verification metadata is inconsistent.
9. **Treasury separation:** deployed V1.1 assigns five reserve destinations to the same deployer address; individual category balances cannot be independently distinguished on-chain.
10. **Production readiness:** the production specification itself treats security, testing, verification and deployment readiness as outstanding requirements before Base Mainnet.

## 10. Exact files requiring update or review

No files were changed as part of this reconciliation.

| File | Problem | Recommended action |
|---|---|---|
| `artifacts/vaeloryn/src/pages/Vaelo.tsx` | Publishes the 100M allocation, Burn + Permit, and source-verification claims against the V1.1 testnet addresses. | Do not publish these claims against the listed addresses until replacement contract evidence is supplied or the page is corrected to distinguish intended production design from deployed testnet prototype. |
| `artifacts/vaeloryn/src/pages/Verify.tsx` | Labels all three published contracts as source-verified and describes the newer allocation/feature set. | Update only after manually confirming explorer sources and reconciling the contract addresses. |
| `artifacts/vaeloryn/src/pages/Transparency.tsx` | States 148 Foundry tests, 100M founder vesting and production-style safeguards as deployed. | Replace with evidence-backed testnet wording or add a distinct “intended production architecture” section after evidence is supplied. |
| `artifacts/vaeloryn/src/pages/Status.tsx` | Represents 148/148 tests and full constitutional protocol completion as implementation facts. | Reconcile with the reproducible 14-test Hardhat suite or add the missing Foundry repository/output. |
| `artifacts/vaeloryn/src/pages/Roadmap.tsx` | Treats the 148-test Foundry protocol as completed. | Reconcile completed milestone wording with the actual deployed implementation. |
| `artifacts/vaeloryn/src/pages/Home.tsx` | Deployment banner repeats the public 148-test and constitutional-allocation claims. | Update after a canonical deployment manifest is established. |
| `attached_assets/Pasted-The-Vaeloryn-protocol-has-now-reached-a-major-milestone_1785531732890.txt` | Contains the newer public tokenomics, vesting and Foundry-test assertions without associated source/deployment evidence. | Retain as a product-direction brief; do not use as sole proof of deployment. |
| `attached_assets/VaelorynToken.sol_–_Production_Implementation_v1_1785192281942.pages` | Defines only the production token, not the related Genesis and vesting contracts or deployment evidence. | Convert to version-controlled Solidity source plus a full canonical specification and test suite. |
| `vaelo_prototype/README.md` | Correctly labels V1.1 as a test-only prototype, but can be mistaken for current production documentation. | Keep it as archival/testnet documentation and clearly link it to the actual V1.1 testnet deployment. |
| `vaelo_prototype/contracts/` | Holds the only traceable source for the published addresses, while the public site describes a different implementation. | Retain untouched; do not present as a production implementation. |

## 11. Evidence supporting the conclusion

### Repository evidence

- `vaelo_prototype/README.md`
- `vaelo_prototype/contracts/VaelorynToken.sol`
- `vaelo_prototype/contracts/VaelorynFounderVesting.sol`
- `vaelo_prototype/contracts/VaelorynGenesisAllocator.sol`
- `vaelo_prototype/scripts/deploy.js`
- `vaelo_prototype/args/token.js`
- `vaelo_prototype/args/vesting.js`
- `vaelo_prototype/args/allocator.js`
- `vaelo_prototype/test/VaeloPrototype.test.js`
- `vaelo_prototype/test/VaeloPrototype.additional.test.js`
- `attached_assets/Pasted-VAELO-Prototype-V1-1-is-now-ready-for-Base-Sepolia-test_1784717853544.txt`
- `attached_assets/Pasted-TASK-Verify-VAELO-V1-1-Deployed-Smart-Contracts-on-Base_1784731090668.txt`
- `attached_assets/Pasted-The-Vaeloryn-protocol-has-now-reached-a-major-milestone_1785531732890.txt`
- `attached_assets/VaelorynToken.sol_–_Production_Implementation_v1_1785192281942.pages`

### Git-history evidence

- 22 July 2026: VAELO Prototype V1.1 release and deployment support files.
- 31 July 2026: later public website protocol-milestone update, production token specification attachment and newer public claims.
- No Foundry files appear in current source or retained Git object paths.

### Live chain / explorer evidence

- Base Sepolia RPC: contract code, token metadata and supply, vesting getters, allocator getters and balances.
- Blockscout Base Sepolia: contract-creation and `allocateGenesis()` transaction records.
- Local bytecode comparison: the live token runtime bytecode exactly matches the checked-in V1.1 token runtime bytecode.

## 12. Manual verification still required

Before investor documents may present the newer public figures as implemented, provide or independently verify all of the following:

1. The complete newer Foundry contract repository, including `foundry.toml`, all token, allocation and vesting contracts, tests and test output.
2. Deployment manifest with contract addresses, deployment transaction hashes, compiler settings, constructor arguments and source-verification links.
3. Proof that the 100M / 10% allocation and the exact revised six-category allocation are deployed to the intended addresses.
4. A mathematically complete founder vesting schedule that unambiguously totals 100,000,000 VAELO.
5. BaseScan or Blockscout source-verification evidence for all three intended contracts, including correct Vaeloryn source names and ABIs.
6. A clear decision on whether the V1.1 Base Sepolia deployment remains the official public testnet deployment or should be described as an archived prototype.
7. Independent security review, legal/regulatory review and production governance/custody evidence before any mainnet, public sale or regulated-investment statement.

## Investor-readiness decision

The evidence does **not** conclusively establish the 100M / 10% founder allocation, revised allocation structure, quarterly-plus-linear vesting, Burn + Permit token functionality, or 148/148 Foundry tests as the actual implementation at the published Base Sepolia addresses.

Under the stated accuracy rule, investor documents must remain on hold until the VAELO team either:

1. supplies the newer Foundry source, deployment evidence and verification records; or
2. formally directs that the investor package use the actual V1.1 Base Sepolia prototype figures, with its explicit prototype, centralised-testnet and unaudited status.