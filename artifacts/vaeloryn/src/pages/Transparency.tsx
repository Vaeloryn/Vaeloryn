import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Minus } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">{title}</h2>
      <div className="w-10 h-px bg-primary/60" />
    </motion.div>
  );
}

function StatusRow({ label, value, ok }: { label: string; value: string; ok: boolean }) {
  return (
    <div className="flex items-start justify-between gap-6 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-muted-foreground/70 leading-relaxed">{label}</span>
      <span className={ok ? 'text-primary/90 font-medium flex-shrink-0' : 'text-muted-foreground/50 flex-shrink-0 italic'}>{value}</span>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
          <span className="text-primary/50 mt-0.5 flex-shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function VerifyItem({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
      {done
        ? <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
        : <Minus size={15} strokeWidth={2} className="text-muted-foreground/40 shrink-0 mt-0.5" />}
      <span className={`text-sm leading-relaxed ${done ? 'text-foreground/85' : 'text-muted-foreground/50'}`}>{label}</span>
    </div>
  );
}

export function Transparency() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn Transparency | Protocol, Testing & Status"
        description="Review Vaeloryn protocol evidence, testing, historical deployments and open disclosures as the ecosystem works toward scientific progress and innovation."
        canonical="https://vaeloryn.com/transparency"
        keywords="Vaeloryn transparency, protocol evidence, smart contract testing, VAELO status"
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full w-fit">
              Protocol Implemented · Mainnet Pending
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Trust &amp; Transparency
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The canonical Vaeloryn protocol is implemented locally but not yet deployed. This page separates
              the historical Base Sepolia V1.1 prototype from the intended production architecture and its evidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Core Principle ── */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 items-start"
          >
            <p className="font-display text-2xl md:text-3xl font-light tracking-wide text-primary italic">
              "Trust through verifiable architecture, not promises."
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Vaeloryn's approach is to make important supply, vesting and allocation protections
               <span className="text-foreground/80"> technically enforceable and independently inspectable</span> — so that
              the architecture itself provides the assurance, not just stated intentions.
              The historical V1.1 prototype on Base Sepolia is a separate testnet record, not the canonical protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What You Can Verify Today ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Evidence Available Today" title="What You Can Verify Today" />

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-primary/15 bg-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The historical V1.1 deployment can be independently inspected using a Base Sepolia block explorer.
                The canonical implementation is currently supported by reproducible local build and test evidence,
                not by a network deployment.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Canonical one-time 1B mint design — implemented locally; not deployed', done: true },
                { label: 'Canonical token allocation — implemented locally; not deployed', done: true },
                { label: 'Historical V1.1 vesting contract — publicly readable, not canonical', done: true },
                { label: 'Canonical source verification — not yet requested or completed', done: false },
                { label: 'Historical V1.1 balances and deployment transactions — publicly readable', done: true },
                { label: 'Canonical genesis distribution — tested locally; no network transaction broadcast', done: true },
                { label: 'Canonical no-mint and admin-control assertions — covered by local tests', done: true },
              ].map(({ label, done }) => (
                <motion.div key={label} variants={fadeInUp}>
                  <VerifyItem label={label} done={done} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit inline-block">
                Full Verification Guide →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Current Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="As of Now" title="Current Status" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
              <StatusRow label="Canonical implementation"                           value="Implemented locally — not deployed"       ok={true} />
              <StatusRow label="Historical V1.1 contracts"                          value="Deployed on Base Sepolia"                  ok={true} />
              <StatusRow label="Canonical fixed supply"                             value="Locally tested — not deployed"             ok={true} />
              <StatusRow label="Canonical allocation"                               value="Locally implemented — not on-chain"        ok={true} />
              <StatusRow label="Historical V1.1 allocation"                         value="Confirmed on-chain; differs from canonical design" ok={true} />
              <StatusRow label="Canonical founder vesting"                         value="Locally tested — not deployed"             ok={true} />
              <StatusRow label="Targeted local test evidence"                       value="27 passed, 0 failed, 0 skipped"              ok={true} />
              <StatusRow label="Independent production security review"             value="Not yet completed"                         ok={false} />
              <StatusRow label="Formal professional legal / regulatory review"      value="Pending"                                   ok={false} />
              <StatusRow label="Production / mainnet deployment"                    value="Not launched"                              ok={false} />
              <StatusRow label="Active public real-money VAELO distribution"        value="None"                                      ok={false} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Single-Point-of-Failure Principle ── */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Core Design Requirement</span>
            <p className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground leading-relaxed max-w-4xl">
              "No single founder, developer, employee or private key should have unilateral technical authority
              to move or release a systemically significant proportion of VAELO's reserved supply."
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              This is a core design requirement for the production architecture — enforced at the technical level,
              not a pledge of goodwill. The testnet deployment implements this for the founder allocation through
              the VaelorynFounderVesting contract.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Implemented Safeguards ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Canonical Implementation · Local Evidence" title="Implemented Safeguards" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Fixed Maximum Supply',
                  implemented: true,
                  items: [
                    'Initial mint of 1,000,000,000 VAELO — implemented and locally tested; not deployed.',
                    'Minted once at construction to the VaelorynGenesisDistribution.',
                    'No mint function exists — supply cannot increase after deployment.',
                    'Voluntary holder burns reduce total supply — verifiable via totalSupply().',
                  ],
                },
                {
                  title: 'On-Chain Founder Vesting',
                  implemented: true,
                  items: [
                    '100M VAELO canonical founder allocation — implemented locally, not deployed.',
                    '2,500,000 VAELO claimable at T0.',
                    '2,500,000 VAELO released at each of T0 + 90, +180 and +270 days — exactly three scheduled releases.',
                    'Remaining 90,000,000 VAELO vested linearly from T0 + 270 days over exactly 1,095 days.',
                    'Schedule enforced by contract logic — no admin bypass.',
                  ],
                },
                {
                  title: 'No Admin Controls in Token Contract',
                  implemented: true,
                  items: [
                    'No ownership or admin roles in VaelorynToken.',
                    'No pause function.',
                    'No blacklist or account freezing.',
                    'No transfer taxes or hidden fees.',
                    'No upgradeability.',
                  ],
                },
                {
                  title: 'Supply Transparency',
                  implemented: true,
                  items: [
                    'Canonical implementation and test evidence are reproducible from the repository.',
                    'Canonical source verification has not yet been completed.',
                    'Canonical founder vesting schedule is locally tested, not publicly deployed.',
                    'No canonical genesis distribution transaction has been broadcast.',
                  ],
                },
                {
                  title: 'Custody & Governance (Production)',
                  implemented: false,
                  items: [
                    'Multisignature custody for major reserves — proposed for production.',
                    'Timelocks for sensitive actions — proposed for production.',
                    'Separation of developer, treasury and grant authority — proposed.',
                    'Key rotation and signer replacement procedures — proposed.',
                  ],
                },
                {
                  title: 'Independent Review',
                  implemented: false,
                  items: [
                    'Independent smart-contract security review — required before mainnet.',
                    'Professional legal, regulatory, economic and security review — pending.',
                    'Production audit has not yet been completed.',
                  ],
                },
              ].map(({ title, implemented, items }) => (
                <motion.div key={title} variants={fadeInUp} className={`p-6 rounded-lg border bg-white/[0.02] flex flex-col gap-4 ${implemented ? 'border-primary/15' : 'border-white/8'}`}>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">{title}</p>
                    {implemented
                      ? <span className="text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full ml-auto flex-shrink-0">Implemented</span>
                      : <span className="text-xs text-muted-foreground/40 border border-white/8 px-2 py-0.5 rounded-full ml-auto flex-shrink-0">Proposed</span>}
                  </div>
                  <BulletList items={items} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Protection ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Canonical Design · Local Evidence" title="Founder Protection" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-primary/15 bg-primary/5 flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Allocation</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">
                  100M VAELO <span className="text-base text-muted-foreground/60">/ 10%</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Held inside the VaelorynFounderVesting contract. The founder cannot freely access this allocation —
                  releases are governed entirely by the on-chain vesting schedule.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Vesting Schedule (Implemented)</p>
                <BulletList items={[
                  '2,500,000 VAELO claimable at T0, the official launch timestamp.',
                  '2,500,000 VAELO released at T0 + 90, +180 and +270 days — exactly three scheduled releases.',
                  'Remaining 90,000,000 VAELO vested linearly from T0 + 270 days over exactly 1,095 days.',
                  'Schedule enforced by smart contract — no admin override.',
                  'Tested locally with Foundry; not deployed on Base Sepolia.',
                ]} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Treasury Protection ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Proposed for Production" title="Treasury Protection" />

            <motion.div variants={fadeInUp}>
              <p className="font-display text-xl font-light tracking-wide text-foreground italic mb-6">
                "The Vaeloryn Treasury is not intended to function as a personal founder wallet."
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Major reserves are intended to use secure custody and appropriate governance to ensure the treasury
                serves its purpose of supporting long-term ecosystem development. These structures are proposed for
                the production architecture and have not yet been implemented.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 mb-4">Proposed Treasury Safeguards</p>
              <BulletList items={[
                'Multisignature approval for major treasury movements.',
                'Separation of powers between treasury and founder authority.',
                'Timelocks for significant or sensitive actions where appropriate.',
                'Publicly identifiable treasury and reserve addresses where appropriate.',
                'Material treasury movement transparency.',
              ]} />
              <p className="text-xs text-muted-foreground/50 italic mt-4 pt-4 border-t border-white/5">
                These safeguards are proposed for the production architecture and remain subject to professional review.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Transparency & Accountability ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Communication Standard" title="Transparency & Accountability" />

            <motion.div variants={fadeInUp}>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Subject to applicable law, cybersecurity requirements, privacy obligations and legitimate commercial confidentiality,
                Vaeloryn intends to communicate material information including:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Significant development milestones',
                'Material security incidents',
                'Significant project delays or failed milestones',
                'Major changes to token architecture',
                'Material treasury movements where appropriate',
                'Supply and circulation information',
                'Vesting and significant upcoming unlock information where appropriate',
              ].map((item) => (
                <motion.div key={item} variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
                  <span className="text-primary/50 mt-0.5 flex-shrink-0">—</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Limits ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Important" title="Limits of These Protections" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-amber-400/80 mb-4">These safeguards cannot:</p>
              <BulletList items={[
                'Guarantee VAELO\'s market value.',
                'Prevent independent holders from selling their own VAELO.',
                'Eliminate all cybersecurity, governance or market risks.',
              ]} />
              <p className="text-sm text-muted-foreground/80 leading-relaxed mt-5 pt-4 border-t border-amber-500/10">
                The objective is to <span className="text-foreground/80">reduce avoidable insider, concentration and single-point-of-failure risks</span> through
                transparent and verifiable architecture — not to eliminate all risk, which is not possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Professional Review ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-6"
          >
            <SectionHeader eyebrow="Pending" title="Professional Review" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The final production systems require appropriate independent review across:
              </p>
              <div className="mt-5">
                <BulletList items={[
                  'Legal and regulatory compliance',
                  'Economic and tokenomics design',
                  'Smart-contract security (full production audit)',
                  'Operational security',
                ]} />
              </div>
              <p className="text-sm text-muted-foreground/60 italic mt-5 pt-4 border-t border-white/5">
                No such review has been completed for production. The canonical implementation has a recorded local
                Foundry result of 27 targeted tests passing (0 failed, 0 skipped); it has not undergone independent
                security review or network deployment. This is required before mainnet deployment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 md:py-28">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
            <p className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground max-w-2xl italic">
              "Build trust through what people can verify — not merely through what we ask them to believe."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Verify the Protocol →
              </Link>
              <Link href="/risks" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Risk Disclosures →
              </Link>
              <Link href="/vaelo" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                VAELO Tokenomics →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
