# Vaeloryn — Base Ecosystem Fund Evidence and Application Preparation

> **PRIVATE / INTERNAL — NOT FOR PUBLICATION**
>
> This document is an internal preparation record. It must not be linked from the
> public website or represented as Base or Coinbase approval, endorsement,
> investment, or partnership.
>
> **Evidence standard:** Statements below are limited to repository evidence and
> fresh local verification completed on 15 September 2026. Intended designs and
> proposed plans are separated from deployed systems, commercial traction, and
> independently verified outcomes.

## Evidence status labels

- **Currently implemented:** Present in the repository and locally runnable or
  inspectable.
- **Historical / testnet:** Evidence from the non-canonical V1.1 Base Sepolia
  prototype.
- **Planned:** Future work that has not been completed.
- **Founder input required:** A fact or decision that cannot be derived from the
  repository.
- **Not verified:** No reliable supporting evidence was found in the repository.

---

## 1. Executive summary

Vaeloryn is building an onchain ecosystem designed to connect capital with
scientific, medical, and technological innovation. The problem it is addressing
is that promising innovation can struggle to access aligned long-term capital,
specialist expertise, infrastructure, and globally accessible participation
through traditional funding and coordination systems.

VAELO is the intended native economic and onchain infrastructure layer for the
wider Vaeloryn ecosystem. It is designed to support future participation,
coordination, payments, funding flows, and other useful economic activity as real
products and projects emerge. VAELO is not the whole Vaeloryn product and should
not be presented primarily as a speculative investment.

Blockchain is relevant because Vaeloryn's intended model requires transparent,
programmable, globally accessible financial infrastructure. Appropriate onchain
systems could make future funding flows, payments, allocation rules, and ecosystem
participation inspectable and composable.

Vaeloryn is being developed with Base as its intended primary blockchain ecosystem
and production home. Base is strategically relevant because it offers low-cost,
scalable EVM infrastructure; access to an active developer ecosystem; suitability
for payments and financial applications; global accessibility; and a connection
to Coinbase infrastructure and distribution. This rationale does not imply a
relationship with, endorsement by, or investment from Base or Coinbase.

What exists today is a public website and documentation layer, a locally
implemented canonical VAELO protocol, a historical non-canonical V1.1 deployment
on Base Sepolia, a Base Sepolia wallet frontend that is inactive without a
canonical address, and local technical evidence. The canonical protocol has not
been deployed to Base Mainnet. No independent security audit, active public
distribution, verified customer traction, or selected flagship project is
evidenced.

The work remaining includes founder and team substantiation, a concrete first
product or project, customer and partner validation, a defined business model,
independent security and legal review, an approved funding request and budget,
measurable milestones, and—only when readiness conditions are met—a canonical
Base deployment and first real economic activity.

### Core positioning

> Vaeloryn is building an onchain ecosystem designed to connect capital with
> scientific, medical, and technological innovation.

> VAELO is the intended native economic and onchain infrastructure layer for that
> ecosystem.

> Base is the intended primary blockchain ecosystem and production home.

### Primary evidence

- `artifacts/vaeloryn/src/pages/Home.tsx`
- `artifacts/vaeloryn/src/pages/Vaelo.tsx`
- `artifacts/vaeloryn/src/pages/Status.tsx`
- `artifacts/vaeloryn/src/pages/Roadmap.tsx`
- `artifacts/vaeloryn/src/pages/Whitepaper.tsx`
- `vaelo_canonical/README.md`
- `reports/VAELO_Canonical_Implementation_Status.md`
- `vaelo_canonical/deployments/base-mainnet.manifest.json`

---

## 2. Company

### Application answer: What does your company do?

Vaeloryn is an early-stage onchain technology company building infrastructure to
connect capital, expertise, and participation with scientific, medical, and
technological innovation. Its intended model combines project discovery and
evaluation with transparent, programmable financial infrastructure. VAELO is
designed to become the native economic layer supporting useful activity across
that ecosystem, while Base is the intended primary blockchain and production
home. The canonical protocol is implemented and tested locally but is not yet
deployed to Base Mainnet.

### Claims this answer deliberately does not make

- It does not claim that Vaeloryn has customers, revenue, or funded projects.
- It does not claim that VAELO has current production utility.
- It does not claim a canonical Base Mainnet deployment.
- It does not claim a Base or Coinbase relationship.
- It does not claim independent audit completion.

---

## 3. Team

### Verified information

- Vaeloryn describes itself as South African-founded and globally focused.
- A founder allocation and vesting design exist in the canonical protocol.
- The repository does not establish the founder's legal name, biography, or
  professional history.
- No verified team members or advisors were found.
- The name “John Lilic” appears in an investor-teaser artifact title. That is not
  evidence that he is a founder, team member, advisor, investor, or partner.
- The internal preparation brief refers to “Gregory,” but the repository does not
  establish that person's identity, role, credentials, or relationship to a legal
  entity.

### Founder input required

The founder should provide verifiable, concise answers to:

1. Full name and current role.
2. Location and relationship to the “South African-founded” positioning.
3. Relevant technical and engineering experience.
4. Relevant blockchain, smart-contract, or financial-infrastructure experience.
5. Previous companies, products, projects, or research work.
6. Evidence of execution: shipped products, deployments, publications, patents,
   grants, exits, open-source work, or other relevant outcomes.
7. Education and professional qualifications.
8. Relevant scientific, medical, technology, finance, or Base ecosystem
   relationships.
9. Current time commitment to Vaeloryn.
10. Other current team members, their roles, and commitment levels.
11. Advisors, with explicit permission to name them and evidence of the
    relationship.
12. Hiring plan for the next 12–18 months.

### Minimum evidence package

- Short founder biography with links to independently verifiable sources.
- Current team table: name, role, employment/contract status, commitment, and
  relevant track record.
- Advisor table only for confirmed advisors.
- Clear disclosure of roles that are currently unfilled.

---

## 4. Product status

| Area | Status | Verified evidence | Next step |
|---|---|---|---|
| Vaeloryn website | Currently implemented | React/Vite site with public positioning, status, roadmap, verification, white paper, risks, transparency, contribution, and contact routes in `artifacts/vaeloryn/` | Keep claims synchronized with current repository evidence |
| Public documentation | Currently implemented | White paper, roadmap, status, verification, risks, and transparency pages; white paper is described as a working public draft | Add evidence links and update only as facts change |
| Canonical VAELO implementation | Currently implemented locally | Contracts and tests in `vaelo_canonical/`; architecture documented in `vaelo_canonical/README.md` | Independent review and deployment-readiness process |
| Canonical smart contracts | Currently implemented locally | Token, genesis distribution, founder vesting, and deployment factory exist under `vaelo_canonical/src/` | Finalize custody inputs, review deployment policy, and obtain independent security review |
| Canonical tokenomics | Currently implemented locally | Six allocations total exactly 1,000,000,000 VAELO; see Section 6 | Do not change without a separate approved canonical process |
| Founder vesting | Currently implemented locally | Canonical schedule exists in code and tests; see Section 6 | Confirm beneficiary, official T0 policy, and independent review |
| Local contract testing | Currently implemented | Fresh targeted run on 15 September 2026: 33 passed, 0 failed, 0 skipped | Reconcile the website and older evidence report, which state 32 |
| Historical V1.1 contracts | Historical / testnet | Non-canonical prototype described in `vaelo_prototype/README.md`; website publishes Base Sepolia addresses | Preserve as historical evidence only |
| Canonical Base Mainnet deployment | Planned / not deployed | `vaelo_canonical/deployments/base-mainnet.manifest.json` is `NOT_DEPLOYED`; address and transaction fields are null | Security, legal, custody, manifest, and operational readiness before broadcast |
| Canonical source verification | Planned / not requested | Mainnet manifest says `NOT_REQUESTED`; no canonical broadcast exists | Verify source and bytecode only after canonical deployment |
| Wallet infrastructure | Currently implemented but inactive | Base Sepolia frontend in `artifacts/vaeloryn-wallet/`; injected wallet support; no custody/backend; canonical VAELO address is empty | Connect only to an approved verified canonical address |
| Verification infrastructure | Partially implemented | Public verification/status pages and deployment manifest structure exist | Populate canonical onchain evidence only after deployment |
| Roadmap | Currently documented; future execution planned | `artifacts/vaeloryn/src/pages/Roadmap.tsx` separates foundation work from future stages | Convert broad stages into dated, owned, measurable milestones |
| White paper | Currently documented as a working draft | `artifacts/vaeloryn/src/pages/Whitepaper.tsx` | Reconcile after flagship product, business model, legal, and deployment decisions |
| Pitch materials | Currently implemented | Fjord pitch deck and John Lilic investor-teaser artifacts exist | Create a Base-specific deck after founder, funding, and milestone inputs |
| API server | Infrastructure artifact exists | `artifacts/api-server/` builds and runs | Establish which production functions it supports; do not present it as traction |
| Project submission flow | Not operationally verified | Public form implementation has been identified as showing success without proven transmission or storage | Implement confirmed delivery/storage and honest failure states before application |
| First flagship project | Planned / not selected | Roadmap and status pages say selection is pending | Select and validate one concrete use case |
| Public VAELO distribution | Not active | Website and reports state no real-money distribution is active | Legal, regulatory, security, and product-readiness gates first |

### Required status distinction

**Currently implemented:** public website/docs, canonical local contracts, local
tests, wallet frontend shell, deployment-manifest structure.

**Historical / testnet:** V1.1 Base Sepolia contracts and their materially
different allocation and vesting model.

**Planned:** canonical Base Mainnet deployment, canonical source verification,
independent audit, live wallet integration, active economic utility, public
distribution, flagship project, customer activity, and ecosystem expansion.

---

## 5. Technical evidence

### Fresh verification completed on 15 September 2026

#### Canonical build and targeted tests

Command:

```bash
cd vaelo_canonical
forge build
forge test --match-contract 'Vaeloryn(Canonical|Invariant)Test' -vv
```

Fresh result:

- Solidity compiler: `0.8.24`
- Build: passed
- Canonical tests: 31 passed
- Invariant tests: 2 passed
- Total: **33 passed, 0 failed, 0 skipped**
- Fuzz runs: 256 per reported fuzz test
- Invariant runs: 128 per invariant
- Invariant calls: 8,192 per invariant

#### Important test-count reconciliation

`reports/VAELO_Canonical_Test_Evidence.md` and the current public website record
**32 targeted tests passed**. The fresh command above now finds **33** because the
current canonical suite contains 31 canonical tests plus 2 invariant tests.

Before submission:

1. Decide and document the exact canonical test scope.
2. Regenerate the evidence report from a clean checkout.
3. Update all public references to the same fresh total.
4. Record the date, commit/checkpoint, toolchain, and command.

The current 33-test result is fresh local behavior evidence. It is not an
independent audit or production-security guarantee.

#### Website checks

Commands:

```bash
pnpm --filter @workspace/vaeloryn run typecheck
pnpm --filter @workspace/vaeloryn run build
```

Fresh result:

- TypeScript typecheck: passed.
- Vite production build: passed.
- Modules transformed: 2,249.
- SEO prerender: generated HTML for 12 public routes.
- Non-blocking warnings remain for sourcemap lookup in three UI dependency files
  and a JavaScript chunk larger than 500 kB.

### Contract architecture supported by repository evidence

- A deployment factory creates the genesis distribution, token, and founder
  vesting contracts.
- The intended initial supply is minted to the genesis distribution contract.
- The six canonical allocations are distributed atomically.
- Each factory instance can perform its canonical deployment once.
- The reviewed local token design has no owner/admin role, upgrade path, pause
  function, blacklist, transfer-tax logic, or post-construction mint entry point.
- The token design includes ERC-20, burn functionality, and permit functionality.
- Founder vesting is capped and tested at exact boundary timestamps.
- Permissionless vesting triggering sends released tokens only to the immutable
  founder beneficiary.

Primary sources:

- `vaelo_canonical/README.md`
- `vaelo_canonical/src/`
- `vaelo_canonical/test/VaelorynCanonical.t.sol`
- `vaelo_canonical/test/invariant/VaelorynInvariant.t.sol`
- `reports/VAELO_Canonical_Implementation_Status.md`
- `reports/VAELO_Canonical_Smart_Contract_Code_Review.md`

### Known technical and operational limitations

- The internal code review is not a formal or independent security audit.
- The canonical deployment factory is one-shot per factory instance, not a
  globally unique singleton. Official canonical identity therefore depends on an
  approved manifest and communication process.
- Recipient custody and multisignature decisions remain unresolved.
- No canonical deployment transaction or onchain bytecode exists.
- No canonical source verification has been requested.
- The wallet cannot perform real canonical VAELO operations without an approved
  deployed address.
- Historical V1.1 testnet evidence does not verify the canonical implementation.

### Deployment status

**Canonical Base Mainnet:** not deployed.

The manifest records:

- Status: `NOT_DEPLOYED`
- Factory address: null
- Token address: null
- Genesis distribution address: null
- Founder vesting address: null
- Transaction hash: null
- Block number: null
- Deployment timestamp: null
- Verification: `NOT_REQUESTED`

Source: `vaelo_canonical/deployments/base-mainnet.manifest.json`.

---

## 6. VAELO token and economic model

### Canonical total supply

**1,000,000,000 VAELO**

| Allocation | Amount | Percentage |
|---|---:|---:|
| Ecosystem & Community | 300,000,000 VAELO | 30% |
| Public Distribution | 200,000,000 VAELO | 20% |
| Vaeloryn Treasury | 200,000,000 VAELO | 20% |
| Team & Contributors | 150,000,000 VAELO | 15% |
| Founder | 100,000,000 VAELO | 10% |
| Strategic Partnerships | 50,000,000 VAELO | 5% |
| **Total** | **1,000,000,000 VAELO** | **100%** |

These are canonical local design figures. They are not balances in a deployed
canonical Mainnet contract.

### Canonical founder vesting

The 100,000,000 VAELO founder allocation is designed to vest as follows:

1. 2,500,000 VAELO at official launch timestamp T0.
2. 2,500,000 VAELO at T0 + 90 days.
3. 2,500,000 VAELO at T0 + 180 days.
4. 2,500,000 VAELO at T0 + 270 days.
5. 90,000,000 VAELO linearly over exactly 1,095 days beginning at T0 + 270
   days.

There is no fourth 2,500,000 VAELO quarterly release at T0 + 360 days.

### Intended role within Vaeloryn

VAELO is intended to support useful economic activity across the future Vaeloryn
ecosystem. Potential roles include participation, coordination, payments, project
funding flows, treasury activity, and interaction with future Base-native
applications. Which roles are legally and commercially appropriate must follow
real product needs, independent review, and evidence of user value.

### Required framing

- Utility should follow products and ecosystem activity.
- Allocation does not equal circulation.
- The strategic-partnership allocation does not prove any current partnership.
- The public-distribution allocation does not mean a sale is active.
- The token should not be marketed with promises of price appreciation or return.
- Historical V1.1 properties must not be attributed to the canonical design.

---

## 7. Why Base

### Application-quality answer

Vaeloryn is being developed with Base as its intended primary blockchain ecosystem
and production home. Its long-term model requires globally accessible,
programmable financial infrastructure capable of supporting payments, funding
flows, participation, and other onchain economic activity at practical
transaction costs. Base provides scalable EVM infrastructure, an active developer
ecosystem, compatibility with established Ethereum tooling, and proximity to
Coinbase infrastructure and distribution. These characteristics make Base a
credible environment in which Vaeloryn could develop financial applications that
connect onchain participation with real-world scientific, medical, and
technological projects.

The current canonical implementation remains local and has not been deployed to
Base Mainnet. Vaeloryn has no verified endorsement, investment, or partnership
from Base or Coinbase.

### Intended Base strategy

- Use Base as the default production chain for the canonical VAELO protocol.
- Develop future payments and financial applications using EVM-compatible
  infrastructure.
- Make future ecosystem activity inspectable onchain where legally and
  operationally appropriate.
- Build integrations that serve a concrete flagship use case rather than adding
  blockchain features without user value.

### Current deployment status

- Historical V1.1 prototype: Base Sepolia only.
- Canonical implementation: local only.
- Canonical Base Mainnet deployment: not deployed.
- Canonical verification: not requested.
- Base customers, users, transactions, or integrations: not verified.
- Base or Coinbase partnership, endorsement, or investment: not verified.

---

## 8. Base economic activity

### What exists today

- A local canonical token and allocation architecture.
- A historical Base Sepolia prototype.
- A non-custodial wallet frontend shell configured for Base Sepolia.
- Public documentation describing an intended ecosystem.
- No verified canonical Base Mainnet transactions.
- No verified users, project funding flows, payments, fees, customers, or
  production integrations.

### What is planned

Potential future mechanisms, subject to product, legal, and security validation:

1. Onchain participation in selected Vaeloryn projects.
2. Transparent funding flows tied to approved project milestones.
3. Payments between ecosystem participants.
4. Treasury and grant disbursement controls.
5. Project-specific onchain assets where those assets create genuine utility.
6. Partner and service-provider settlement.
7. Financial infrastructure for future Base-native Vaeloryn applications.
8. VAELO utility that emerges from actual products and services.

### What must be proven

- A specific user and a painful, validated problem.
- Why onchain infrastructure is better than a conventional database and payment
  stack for that first use case.
- Legal feasibility of the funding and token mechanism.
- User willingness to transact or participate on Base.
- A credible project team and delivery plan.
- Security and operational readiness.
- Repeatable transaction activity that represents real value, not artificial
  volume.
- A sustainable method of capturing revenue or financing operations.
- Evidence that VAELO improves the product rather than complicating it.

### Suggested evidence metrics

These are categories, not approved numerical targets:

- Number of validated project teams interviewed.
- Number of signed pilot or partner commitments.
- Number of active pilot participants.
- Value and count of legitimate Base transactions.
- Milestone-linked funding disbursements.
- Payment completion and repeat-usage rates.
- Cost and settlement-time improvements over alternatives.
- Number of projects reaching measurable real-world milestones.
- Revenue or fees, if a legally appropriate business model is approved.

---

## 9. Funding request

### Founder input required

The repository does not contain an approved Base Ecosystem Fund request. The
founder must decide:

- Target raise.
- Minimum viable raise.
- Desired runway.
- Expected runway at target and minimum raise.
- Engineering budget.
- Independent security-review and audit budget.
- Legal and regulatory budget.
- Infrastructure and operations budget.
- Business-development budget.
- Marketing and community budget.
- Founder compensation, if applicable.
- Hiring budget and roles.
- Contingency.
- Milestones funded by the raise.
- Whether the request is equity, grant, token-related, or another structure.
- Legal entity receiving funds.

### Proposed allocation framework — no dollar amounts

| Category | Purpose | Release principle |
|---|---|---|
| Product and engineering | Flagship product, protocol hardening, application infrastructure, observability | Milestone-based |
| Independent security review | External contract review, remediation, retest, deployment review | Vendor scope and accepted report |
| Legal and regulatory | Entity, token, distribution, privacy, financial-regulation, terms, and jurisdiction analysis | Engagement deliverables |
| Base deployment readiness | Custody, multisignature, manifest, source verification, monitoring, incident procedures | Readiness checklist |
| Pilot and business development | User discovery, pilot design, partner onboarding, project diligence | Signed or completed evidence |
| Infrastructure and operations | Hosting, RPC, monitoring, data, support, and operational tooling | Usage-based controls |
| Community and communications | Evidence-led launch communications and participant education | No speculative promotion |
| Team and hiring | Approved roles required to deliver milestones | Role and performance milestones |
| Contingency | Unplanned but approved delivery risk | Controlled reserve |

The funding request should not use VAELO as a substitute for a clear operating
budget.

---

## 10. 12–18 month roadmap

> **PROPOSED — REQUIRES FOUNDER APPROVAL**
>
> Dates, owners, budgets, and numerical targets remain founder decisions.

| Phase | Objective | Deliverable | Dependency | Measurable acceptance criterion |
|---|---|---|---|---|
| 1 — Security and legal readiness | Establish whether the canonical protocol and intended business can proceed responsibly | Independent security scope/report; remediation record; legal/regulatory memorandum; custody and entity decisions | Budget, counsel, auditor, founder inputs, stable canonical scope | Independent deliverables received; material findings triaged; go/no-go criteria documented |
| 2 — Base Mainnet readiness / deployment | Prepare an attributable canonical deployment without confusing historical V1.1 | Approved manifest inputs, custody setup, deployment rehearsal, verification procedure, monitoring and incident runbook; deployment only after approval | Phase 1 readiness, recipient addresses, multisignature, official T0, operational owner | Every readiness item signed off; if approved, manifest contains one attributable transaction and verified source; otherwise explicit no-go recorded |
| 3 — First Base-native product or use case | Build one focused product around a verified user problem | Working pilot product, user journey, Base interaction, product analytics, support process | Flagship selection, user research, legal feasibility, engineering capacity | Pilot works end to end with acceptance tests and named pilot participants |
| 4 — First real-world ecosystem partner | Establish external validation around a credible project or service relationship | Signed pilot, memorandum, or services agreement with scope, responsibilities, and success criteria | Diligence, product fit, legal review, partner consent | Signed evidence and completed first agreed milestone |
| 5 — First measurable onchain economic activity | Demonstrate legitimate Base activity tied to real product value | Production or controlled-pilot transactions representing payments, funding, or participation | Phases 2–4, user onboarding, monitoring, legal approval | Transactions are attributable to real users and a documented use case; outcome and costs measured |
| 6 — Ecosystem expansion | Prove repeatability beyond one project | Second validated project or repeat usage, improved onboarding, documented operating model | Evidence from Phase 5, capacity, sustainable funding | Repeat usage or second deployment meets founder-approved targets without artificial activity |

### Roadmap governance requirements

- Assign one accountable owner per phase.
- Define dates only after dependencies and budgets are approved.
- Record acceptance evidence, not subjective “completed” labels.
- Keep deployment and token-distribution decisions behind explicit legal and
  security gates.
- Do not use transaction volume that is generated solely to satisfy a metric.

---

## 11. Traction

### Verified traction

The repository supports development progress, not market traction:

- Public website and documentation exist.
- Canonical contracts build locally.
- Fresh targeted contract tests pass.
- Historical V1.1 contracts exist on Base Sepolia.
- Wallet frontend and investor/pitch materials exist.
- Product Hunt and Launch Llama badges are displayed publicly, but the repository
  does not establish resulting users, customers, or commercial outcomes.

### No verified traction / not yet available

- Paying customers.
- Active users.
- Signed pilots.
- Signed commercial or scientific partners.
- Revenue.
- External funding.
- Base Mainnet users or transactions.
- Canonical token holders.
- Production integrations.
- Completed projects.
- Independent audit.
- User-retention or conversion metrics.
- Evidence of willingness to pay.

### What would strengthen the application

1. A selected flagship use case with a credible external project team.
2. A signed pilot or letter of intent with explicit scope.
3. Interview evidence from target users and project teams.
4. A working Base pilot with real participants.
5. First legitimate Base transactions tied to product value.
6. An independent technical review.
7. A source-verified canonical deployment after readiness gates.
8. A first integration with a relevant Base-native service.
9. Evidence of repeated usage or a second project.
10. A documented customer and revenue model.

---

## 12. First flagship use case

> **FOUNDER DECISION REQUIRED**

The current Vaeloryn vision spans many scientific, medical, and technological
fields. That breadth communicates ambition but leaves a reviewer unable to
identify the first customer, first product, or shortest path to Base economic
activity.

### Why it matters

A flagship use case converts Vaeloryn from a broad ecosystem thesis into a
testable company. It provides a specific customer, workflow, regulatory surface,
technical scope, milestone, and reason to use Base.

### Selection criteria

- Clear scientific, medical, or technological value.
- A specific and credible project team.
- Identifiable funding or coordination need.
- A specific user or customer.
- Measurable real-world outcome.
- Realistic 12–18 month delivery path.
- Legal and regulatory feasibility.
- Appropriate use of onchain infrastructure.
- Potential for legitimate Base economic activity.
- Ability to demonstrate the wider Vaeloryn model.
- Defined operating and revenue model.
- Limited dependency on speculative token demand.

### Founder decisions required

1. Which problem and sector should be first?
2. Who is the first user and who pays?
3. Which real project team can participate?
4. What milestone can be reached within the available runway?
5. What information must be onchain, and why?
6. What role, if any, does VAELO need in the first version?
7. What legal structure is required?
8. What result would prove the model should expand?

The repository does not support choosing a flagship project on the founder's
behalf.

---

## 13. Business model

### Verified current business model

No verified current business model was found. There is no repository evidence of
revenue, pricing, paying customers, protocol fees, service contracts, or a
validated willingness to pay.

### Intended future business model

The repository describes a future ecosystem in which capital, expertise,
projects, and onchain participation are coordinated, with successful activity
potentially supporting future projects. It also states that sustainable revenue
should be developed where possible. This is a strategic intent, not a complete
business model.

### Decisions required before applying

- First customer and economic buyer.
- Product or service being purchased.
- Pricing method.
- Whether revenue comes from software, services, transaction fees, project
  administration, asset issuance, treasury management, or another approved
  mechanism.
- Gross-margin assumptions.
- Customer-acquisition approach.
- Relationship between company revenue and VAELO.
- Legal and tax treatment.
- Conflict-of-interest and treasury controls.
- Why competitors or conventional infrastructure cannot solve the problem as
  effectively.

The application should say the business model is being defined around the
flagship use case rather than presenting token distribution as revenue.

---

## 14. Base Ecosystem Fund application draft

### Company

Vaeloryn is an early-stage onchain technology company building infrastructure to
connect capital, expertise, and participation with scientific, medical, and
technological innovation. VAELO is the intended native economic layer for the
wider ecosystem, while Base is the intended primary blockchain and production
home. Vaeloryn currently has a public documentation platform, a locally
implemented canonical protocol, and historical Base Sepolia prototype evidence.
The canonical implementation has not been deployed to Base Mainnet.

### Team

Vaeloryn is South African-founded and globally focused.

**[FOUNDER INPUT REQUIRED: founder name, biography, role, commitment, technical
and blockchain experience, execution history, education, team members, advisors,
and independently verifiable links.]**

### Idea

Innovation teams can struggle to access aligned capital, specialist expertise,
infrastructure, and globally accessible participation. Vaeloryn intends to build
an onchain ecosystem that helps identify and support credible projects while
using programmable financial infrastructure for transparent funding,
participation, and payments.

The first implementation layer is the canonical VAELO protocol: a locally tested
fixed-supply token, atomic genesis distribution, and founder-vesting architecture.
The token is intended to support useful economic activity as real products and
projects develop. Utility should follow products; the company is not presenting
token demand as a substitute for product-market fit.

**[FOUNDER INPUT REQUIRED: first flagship use case, first customer, project
partner, validated problem evidence, product scope, and business model.]**

### Funding

**[FOUNDER INPUT REQUIRED: target raise, minimum viable raise, instrument or grant
structure, runway, category budget, legal entity, hiring plan, and funded
milestones.]**

Proposed use-of-funds categories are product and engineering, independent
security review, legal and regulatory work, Base deployment readiness,
infrastructure, pilot development, business development, team, and controlled
contingency.

### Why Base

Vaeloryn is being developed with Base as its intended primary blockchain ecosystem
and production home. The intended product requires low-cost, globally accessible,
programmable infrastructure for payments, funding flows, participation, and
financial applications. Base provides scalable EVM infrastructure, access to an
active developer ecosystem, compatibility with established Ethereum tooling, and
proximity to Coinbase infrastructure and distribution.

Vaeloryn does not claim Base or Coinbase endorsement, investment, or partnership.
The canonical protocol remains local and has not been deployed to Base Mainnet.

**[FOUNDER INPUT REQUIRED: approved 12–18 month milestones, funding-linked Base
deliverables, target users, and proposed measurable outcomes.]**

---

## 15. Red team: Why Base might say no

### 1. Lack of traction

**Why it matters:** The application currently demonstrates building activity but
not demand. A fund cannot distinguish a wanted product from a polished thesis.

**Strongest legitimate mitigation:** Obtain user interviews, a signed pilot, a
working controlled pilot, and usage evidence before applying.

### 2. Lack of users

**Why it matters:** There is no proof that project teams, funders, or other
participants will adopt the intended workflow.

**Strongest legitimate mitigation:** Define one user segment, recruit named pilot
participants, and measure task completion and repeat use.

### 3. Lack of revenue

**Why it matters:** The company has not shown how it will sustain operations or
capture value.

**Strongest legitimate mitigation:** Define the first paying customer, product,
pricing, and unit economics; validate willingness to pay.

### 4. Unclear first customer

**Why it matters:** “Scientific, medical and technological innovation” covers many
markets with different buyers and regulations.

**Strongest legitimate mitigation:** Choose one customer and one workflow for the
flagship use case.

### 5. Broad vision

**Why it matters:** The scope can appear impossible for an early-stage team and
can obscure the next executable step.

**Strongest legitimate mitigation:** Keep the long-term ecosystem vision but
present a narrow initial wedge, delivery plan, and expansion logic.

### 6. Token-first perception

**Why it matters:** The canonical protocol and tokenomics are more developed than
the customer product and business model. Reviewers may conclude that the token is
the product.

**Strongest legitimate mitigation:** Lead with customer problem, flagship
product, pilot evidence, and Base utility. Keep “utility follows products” as a
binding product principle.

### 7. Lack of flagship use case

**Why it matters:** There is no concrete demonstration of what Vaeloryn will build
first or why it needs Base.

**Strongest legitimate mitigation:** Select a legally feasible use case with a
credible team, measurable outcome, and onchain workflow.

### 8. Lack of Base Mainnet deployment

**Why it matters:** Base fit remains architectural and strategic rather than
demonstrated.

**Strongest legitimate mitigation:** Complete security, legal, custody, and
operational readiness, then deploy and verify only if the go-live gates are met.
A strong Base Sepolia product pilot can precede Mainnet.

### 9. Lack of Base traction

**Why it matters:** There are no canonical users, transactions, integrations, or
economic flows on Base.

**Strongest legitimate mitigation:** Produce real pilot transactions tied to a
specific user workflow; avoid artificial volume.

### 10. Lack of team track record

**Why it matters:** The repository cannot establish who will execute an ambitious
technical, scientific, financial, and regulatory plan.

**Strongest legitimate mitigation:** Provide verifiable biographies, commitment,
execution evidence, missing-role disclosures, and a focused hiring plan.

### 11. Regulatory uncertainty

**Why it matters:** Token distribution, project funding, payments, and global
participation can trigger securities, payments, consumer, tax, privacy, and
financial-regulation issues.

**Strongest legitimate mitigation:** Obtain jurisdiction-specific counsel and
design the first product around an approved legal structure before distribution.

### 12. Unclear business model

**Why it matters:** Allocation and ecosystem growth do not explain who pays the
company or how operating costs are covered.

**Strongest legitimate mitigation:** Validate a customer-funded model around the
first use case and clearly separate company revenue from token value.

### 13. Unclear competitive advantage

**Why it matters:** The application does not show why Vaeloryn will outperform
grant platforms, crowdfunding, venture networks, research-funding systems,
tokenization platforms, or conventional fintech.

**Strongest legitimate mitigation:** Build a competitor matrix based on the
flagship workflow and prove one measurable advantage.

### 14. Insufficient proof of real economic activity

**Why it matters:** Token allocations and a wallet UI do not establish useful
transactions or value creation.

**Strongest legitimate mitigation:** Tie each onchain action to a real payment,
funding milestone, service, or participation event and report verifiable outcomes.

### 15. Insufficient differentiation

**Why it matters:** “Connecting capital with innovation” is attractive but common.
The unique mechanism, proprietary advantage, and defensibility are not yet clear.

**Strongest legitimate mitigation:** Demonstrate a unique sourcing, diligence,
milestone, or financial workflow with exclusive access, data, expertise, or
operational capability.

### Red-team conclusion

The application currently shows serious protocol work and honest documentation,
but the evidence is weighted toward token infrastructure rather than company,
customer, and market proof. That imbalance is the central investment risk.

---

## 16. Application readiness score

| Category | Score | Explanation |
|---|---:|---|
| Product | 4/10 | Public product narrative and protocol exist, but no selected flagship customer product is evidenced |
| Team | 1/10 | South African-founded is the only verified descriptor; identity, credentials, team, and advisors are absent |
| Market | 3/10 | A broad capital-access problem is articulated, but no quantified target market, segment, or customer research is evidenced |
| Traction | 1/10 | Development activity exists; no verified users, customers, pilots, revenue, or production Base activity |
| Technical readiness | 6/10 | Canonical architecture builds and 33 fresh targeted tests pass; no independent audit, canonical deployment, or production operations |
| Base fit | 6/10 | Base is a credible intended home and fits the financial-infrastructure thesis; fit has not been validated by a live use case |
| Business model | 2/10 | Sustainable revenue is an intention, not a defined or validated model |
| Token/economic design | 6/10 | Canonical allocation and vesting are precise and tested locally; utility, legal structure, custody, circulation, and economic demand remain unproven |
| Roadmap | 4/10 | Stages and gates are documented, but dates, owners, budgets, and measurable acceptance criteria are not approved |
| **Overall application readiness** | **3/10** | The repository supports an honest technical pre-seed story, but key investability evidence is missing |

The scores assess application evidence, not the ambition or eventual potential of
the project.

---

## 17. Top five priorities

### 1. Select and validate one flagship Base use case

Name the first user, customer, workflow, real-world outcome, and reason Base is
necessary. Secure a credible pilot participant.

### 2. Establish the founder and execution evidence

Publish a verifiable founder biography, team structure, commitment, shipped-work
evidence, missing roles, and hiring plan.

### 3. Prove customer demand and define the business model

Run structured interviews, obtain a signed pilot or letter of intent, identify
the economic buyer, and test pricing or willingness to pay.

### 4. Complete independent legal and technical readiness work

Obtain legal/regulatory analysis and an independent security review; resolve
custody, canonical identity, deployment, monitoring, and incident procedures.

### 5. Approve a specific funding request and measurable 12–18 month plan

Set target and minimum funding, runway, category budgets, owners, dates,
dependencies, and acceptance criteria tied to legitimate Base outcomes.

Evidence and actual progress should take priority over additional cosmetic website
work.

---

## 18. Final submission checklist

### Website and communications

- [x] Website clearly positions Vaeloryn, VAELO, and intended Base strategy.
- [x] Canonical and historical V1.1 status are distinguished.
- [x] No canonical Mainnet deployment is claimed.
- [ ] Reconcile public “32 tests” copy with the fresh 33-test result.
- [ ] Confirm Product Hunt and Launch Llama badges are accurate and useful.
- [ ] Remove or qualify any remaining unsupported flagship-product wording.
- [ ] Make the project-submission form transmit/store submissions before showing
      success.
- [ ] Final claim-by-claim review immediately before submission.

### Founder and team

- [ ] Verified founder biography.
- [ ] Founder role and commitment.
- [ ] Technical and blockchain track record.
- [ ] Previous company/project evidence.
- [ ] Education and achievements, where relevant.
- [ ] Current team table.
- [ ] Missing-role and hiring plan.
- [ ] Confirmed advisors with permission to name.

### Application and funding

- [ ] Base-specific pitch deck.
- [ ] Approved funding request.
- [ ] Minimum viable request.
- [ ] Use-of-funds budget.
- [ ] Runway calculation.
- [ ] Milestone-linked funding plan.
- [ ] Legal entity and funding recipient.
- [ ] Final application answers.

### Product and market

- [ ] First flagship use case selected.
- [ ] First customer/user defined.
- [ ] User interviews documented.
- [ ] Pilot or letter of intent.
- [ ] Business model and pricing.
- [ ] Competitor and differentiation analysis.
- [ ] Measurable product outcomes.

### Technical and Base readiness

- [x] Canonical contracts present locally.
- [x] Canonical tokenomics reconciled.
- [x] Founder vesting implemented locally.
- [x] Fresh targeted local test run completed.
- [x] Website typecheck and production build completed.
- [ ] Clean-checkout test-evidence report regenerated.
- [ ] Independent security review.
- [ ] Findings remediation and retest.
- [ ] Legal/regulatory review.
- [ ] Recipient custody and multisignature decisions.
- [ ] Official T0 policy.
- [ ] Canonical deployment manifest approval.
- [ ] Base deployment rehearsal.
- [ ] Source-verification procedure.
- [ ] Monitoring and incident-response plan.
- [ ] Canonical Mainnet deployment, only if approved and ready.

### Partnerships and traction

- [ ] Verified pilot.
- [ ] Signed real-world project or ecosystem partner.
- [ ] First Base integration.
- [ ] First legitimate Base transaction.
- [ ] First measurable onchain economic activity.
- [ ] User-retention or repeated-use evidence.
- [ ] Revenue evidence, if applicable.

---

## Final recommendation

# STRENGTHEN FIRST

Vaeloryn should not submit the Base Ecosystem Fund application yet if the goal is
to maximize the probability of a serious investment review. The current evidence
supports a technically credible, unusually transparent pre-production protocol
story, but not yet a sufficiently complete company and market story.

The decisive gaps are founder/team proof, a selected flagship use case, customer
validation, a defined business model, an approved funding request, and independent
technical/legal readiness. Completing the first three priorities would improve
the application more than further website positioning work. A strong submission
should lead with a verified team and concrete Base-native pilot, then use the
canonical protocol as supporting infrastructure—not as a substitute for product
and traction.

---

## Repository evidence index

- `vaelo_canonical/README.md`
- `vaelo_canonical/src/`
- `vaelo_canonical/test/VaelorynCanonical.t.sol`
- `vaelo_canonical/test/invariant/VaelorynInvariant.t.sol`
- `vaelo_canonical/deployments/base-mainnet.manifest.json`
- `vaelo_prototype/README.md`
- `reports/VAELO_Canonical_Implementation_Status.md`
- `reports/VAELO_Canonical_Test_Evidence.md`
- `reports/VAELO_Canonical_Smart_Contract_Code_Review.md`
- `reports/VAELO_Product_Documentation_Final_Report.md`
- `artifacts/vaeloryn/src/pages/Home.tsx`
- `artifacts/vaeloryn/src/pages/Vaelo.tsx`
- `artifacts/vaeloryn/src/pages/Status.tsx`
- `artifacts/vaeloryn/src/pages/Roadmap.tsx`
- `artifacts/vaeloryn/src/pages/Verify.tsx`
- `artifacts/vaeloryn/src/pages/Whitepaper.tsx`
- `artifacts/vaeloryn/src/pages/Risks.tsx`
- `artifacts/vaeloryn/src/pages/Transparency.tsx`
- `artifacts/vaeloryn/src/pages/Wallet.tsx`
- `artifacts/vaeloryn/src/pages/SubmitIdea.tsx`
- `artifacts/vaeloryn-wallet/README.md`
- `artifacts/vaeloryn-wallet/src/config.ts`
- `artifacts/vaeloryn-fjord-pitch-deck/src/pages/slides/`
- `artifacts/vaelo-john-lilic-investor-teaser/src/pages/slides/`
