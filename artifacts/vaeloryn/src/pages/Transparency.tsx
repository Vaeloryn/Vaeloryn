import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';

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

export function Transparency() {
  return (
    <div className="w-full">
      <SEO
        title="Trust & Transparency — Vaeloryn"
        description="Explore Vaeloryn's developing approach to supply protection, insider safeguards, treasury accountability and verifiable transparency."
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
              Framework · Developing
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Trust &amp; Transparency
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore Vaeloryn's developing approach to supply protection, insider safeguards, treasury accountability and verifiable transparency.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/70 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                Proposed framework · Not yet independently reviewed
              </span>
            </motion.div>
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
              Vaeloryn's long-term goal is to reduce reliance on trust in individual people by making important supply,
              vesting and treasury protections <span className="text-foreground/80">technically enforceable and independently verifiable</span> where
              appropriate — so that the architecture itself provides the assurance, not just stated intentions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Current Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="As of Now" title="Current Status" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
              <StatusRow label="VAELO network"                            value="Base Sepolia testnet prototype"          ok={true} />
              <StatusRow label="V1.1 contracts"                           value="Prototype — not final production architecture" ok={false} />
              <StatusRow label="Prototype contract source verification"   value="Complete — all three contracts verified" ok={true} />
              <StatusRow label="Controlled wallet-to-wallet test (100 VAELO)" value="Completed successfully"            ok={true} />
              <StatusRow label="Independent production security review"   value="Not yet completed"                      ok={false} />
              <StatusRow label="Formal professional legal/regulatory review" value="Pending"                            ok={false} />
              <StatusRow label="Active public real-money VAELO distribution" value="None"                               ok={false} />
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-primary/20 bg-primary/5 flex gap-4 items-start">
              <div className="mt-0.5 w-4 h-4 rounded-full border border-primary/60 flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The protections described in the remainder of this page are <span className="text-foreground/80">proposed for the future production architecture</span>.
                They are not all implemented in the current V1.1 testnet prototype. Do not treat proposed future safeguards as existing ones.
              </p>
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
              This is a core design requirement for the intended production architecture — not a pledge of goodwill,
              but a structural constraint intended to be enforced at the technical level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Proposed Production Safeguards ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Intended / Proposed · Not Yet Implemented" title="Proposed Production Safeguards" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Fixed Maximum Supply',
                  items: [
                    'Proposed fixed maximum production supply of 1,000,000,000 VAELO.',
                    'Allocation does not equal circulation — allocated VAELO may remain locked, reserved or vested.',
                    'Production architecture should not permit minting beyond the proposed 1 billion cap.',
                  ],
                },
                {
                  title: 'On-Chain Vesting',
                  items: [
                    'Intended on-chain founder vesting to enforce the proposed cliff and progressive schedule.',
                    'Vesting or milestone conditions for significant team and contributor allocations.',
                    'Grants should use documented approval processes rather than unrestricted immediate allocations.',
                  ],
                },
                {
                  title: 'Custody & Governance',
                  items: [
                    'Appropriate multisignature custody for major reserves.',
                    'Timelocks for sensitive actions where appropriate.',
                    'Separation of developer, treasury and grant authority.',
                    'Key rotation and signer replacement procedures.',
                  ],
                },
                {
                  title: 'Supply Transparency',
                  items: [
                    'Public supply and circulation verification.',
                    'Clearly labelled major wallets and contracts where appropriate.',
                    'Transparency around material token movements.',
                    'Vesting and significant upcoming unlock information where appropriate.',
                  ],
                },
                {
                  title: 'Rewards Architecture',
                  items: [
                    'Contribution Rewards, if implemented, should distribute existing allocated VAELO rather than create new supply.',
                    'Operational redundancy for critical systems.',
                  ],
                },
                {
                  title: 'Independent Review',
                  items: [
                    'Appropriate independent smart-contract security review before production/mainnet.',
                    'Professional legal, regulatory, economic and security review of the final production systems.',
                    'No current review has been completed. All of the above remains proposed.',
                  ],
                },
              ].map(({ title, items }) => (
                <motion.div key={title} variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">{title}</p>
                  <BulletList items={items} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Protection ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Proposed Working Structure · Subject to Review" title="Founder Protection" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Allocation</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">
                  100M VAELO <span className="text-base text-muted-foreground/60">/ 10%</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Proposed Vesting Structure</p>
                <BulletList items={[
                  'Up to 10M progressively eligible during Year 1.',
                  'Maximum 2.5M per quarter during Year 1.',
                  'Remaining 90M subject to a proposed 12-month cliff.',
                  'Progressive vesting over the subsequent 36 months.',
                ]} />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                This is a proposed working structure and remains subject to professional legal, regulatory, tax and security review,
                and final production implementation. It does not represent a final or binding arrangement.
              </p>
            </motion.div>
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
            <SectionHeader eyebrow="Proposed Design" title="Treasury Protection" />

            <motion.div variants={fadeInUp}>
              <p className="font-display text-xl font-light tracking-wide text-foreground italic mb-6">
                "The Vaeloryn Treasury is not intended to function as a personal founder wallet."
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Major reserves should use secure custody and appropriate governance to ensure the treasury
                serves its intended purpose of supporting long-term ecosystem development.
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Transparency & Accountability ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Intended Communication Standard" title="Transparency & Accountability" />

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

      {/* ── Limits of These Protections ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.015]">
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
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-6"
          >
            <SectionHeader eyebrow="Pending" title="Professional Review" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The final production systems remain subject to appropriate independent review across:
              </p>
              <div className="mt-5">
                <BulletList items={[
                  'Legal and regulatory compliance',
                  'Economic and tokenomics design',
                  'Smart-contract security',
                  'Operational security',
                ]} />
              </div>
              <p className="text-sm text-muted-foreground/60 italic mt-5 pt-4 border-t border-white/5">
                No such review has been completed to date. All proposed safeguards described on this page remain unaudited working proposals.
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
              <Link href="/whitepaper" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                White Paper Draft →
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
