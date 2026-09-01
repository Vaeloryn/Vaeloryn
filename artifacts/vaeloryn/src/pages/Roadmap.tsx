import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Circle } from 'lucide-react';

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

function DoneBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
    </div>
  );
}

function ActiveBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Circle size={15} strokeWidth={2} className="text-primary/50 shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
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

const STAGES = [
  { label: 'Completed', sublabel: 'Protocol',    done: true,   active: false },
  { label: 'Stage A',   sublabel: 'Foundation',  done: false,  active: true  },
  { label: 'Stage B',   sublabel: 'Execution',   done: false,  active: false },
  { label: 'Stage C',   sublabel: 'Expansion',   done: false,  active: false },
  { label: 'Stage D',   sublabel: 'Global Ecosystem', done: false, active: false },
];

export function Roadmap() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn Roadmap | From Foundation to Scientific Progress"
        description="Follow Vaeloryn from protocol foundation through ecosystem development, security, partnerships and responsible progress in science and technology."
        canonical="https://vaeloryn.com/roadmap"
        keywords="Vaeloryn roadmap, scientific progress, technological innovation, ecosystem development, VAELO"
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
              Stage A — Foundation · In Progress
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Roadmap
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From a locally implemented canonical protocol through Stage A foundation building
              toward real-world execution and a long-term global ecosystem.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-wide">
                Currently in <span className="text-primary/90">Stage A — Foundation</span>
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
            className="flex flex-col gap-5"
          >
            <p className="font-display text-2xl md:text-3xl font-light tracking-wide text-primary italic">
              "Show the work before asking for trust."
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Progression is <span className="text-foreground/80">milestone-gated, not calendar-gated</span> —
              moving from one stage to another depends on demonstrated progress, appropriate governance, available resources
              and completion of relevant legal, technical and security requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stage Progress Bar ── */}
      <section className="py-14 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch gap-0"
          >
            {STAGES.map(({ label, sublabel, done, active }, i) => (
              <React.Fragment key={label}>
                <div className={`flex-1 flex flex-col gap-2 p-5 rounded-none border ${
                  done
                    ? 'border-primary/30 bg-primary/6'
                    : active
                    ? 'border-primary/40 bg-primary/8'
                    : 'border-white/8 bg-white/[0.015]'
                } ${i === 0 ? 'rounded-l-lg' : ''} ${i === STAGES.length - 1 ? 'rounded-r-lg' : ''}`}>
                  <div className="flex items-center gap-2">
                    {done  && <CheckCircle2 size={12} strokeWidth={1.75} className="text-primary/80 flex-shrink-0" />}
                    {active && <div className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse flex-shrink-0" />}
                    <span className={`text-xs font-medium tracking-[0.15em] uppercase ${done || active ? 'text-primary/90' : 'text-muted-foreground/50'}`}>
                      {label}
                    </span>
                  </div>
                  <span className={`text-sm font-light tracking-wide ${done || active ? 'text-foreground/90' : 'text-muted-foreground/40'}`}>
                    {sublabel}
                  </span>
                  {done && (
                    <span className="text-xs text-primary/70 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full w-fit mt-1">
                      Complete
                    </span>
                  )}
                  {active && (
                    <span className="text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full w-fit mt-1">
                      Current
                    </span>
                  )}
                  {!done && !active && (
                    <span className="text-xs text-muted-foreground/30 italic mt-1">Future</span>
                  )}
                </div>
                {i < STAGES.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center w-6 flex-shrink-0 bg-transparent z-10 -mx-0">
                    <div className="w-full h-px bg-white/10" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
          <p className="text-xs text-muted-foreground/40 italic mt-4">
            Future stages are proposed objectives only — not commitments to specific timelines or outcomes.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPLETED
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-primary/[0.03]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} strokeWidth={1.75} className="text-primary" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80">Achieved</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.12em] uppercase text-foreground">
                Completed
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                The following milestones describe completed local implementation work and historical testnet
                evidence. The canonical protocol is not yet deployed; Stage A continues toward production readiness.
              </p>
            </motion.div>

            {/* Smart Contracts & Protocol */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">01</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">Smart Contract Protocol</h3>
              </div>
              <div className="pl-8 border-l border-primary/20 flex flex-col gap-2">
                {[
                  'VaelorynToken implemented — ERC-20, one-time 1B initial mint, burn, permit (EIP-2612).',
                  'VaelorynFounderVesting implemented locally — canonical on-chain vesting logic with an enforced schedule.',
                  'VaelorynGenesisDistribution implemented — constitutional distribution at deployment.',
                  'Canonical Foundry implementation tested locally — 28 targeted tests passed, with zero failures.',
                  'Historical V1.1 prototype remains deployed on Base Sepolia; canonical deployment is pending.',
                  'Canonical source verification and deployment remain pending.',
                ].map((item) => (
                  <DoneBullet key={item} text={item} />
                ))}
              </div>
            </motion.div>

            {/* Allocation Verification */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">02</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">On-Chain Verification</h3>
              </div>
              <div className="pl-8 border-l border-primary/20 flex flex-col gap-2">
                {[
                  'Canonical initial mint of 1,000,000,000 VAELO implemented locally — minted once at construction.',
                  'Historical V1.1 allocation recorded and inspectable on-chain.',
                  'Canonical founder vesting schedule tested and confirmed locally; canonical deployment is pending.',
                  'Historical V1.1 genesis distribution transaction permanently recorded on Base Sepolia.',
                ].map((item) => (
                  <DoneBullet key={item} text={item} />
                ))}
              </div>
            </motion.div>

            {/* Public Foundation */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">03</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">Public Foundation</h3>
              </div>
              <div className="pl-8 border-l border-primary/20 flex flex-col gap-2">
                {[
                  'Vaeloryn public website developed and launched.',
                  'Public project documentation published.',
                  'Testnet evidence and verified contract information published.',
                  'VAELO tokenomics framework developed.',
                  'Trust, Transparency & Supply Protection Framework developed.',
                  'Stage A roadmap developed.',
                  'Public White Paper draft developed.',
                  'Public Risk Disclosure developed.',
                  'Help Build Vaeloryn contribution pathway established.',
                  'Public social channels established.',
                ].map((item) => (
                  <DoneBullet key={item} text={item} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STAGE A — IN PROGRESS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80">Current Phase</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.12em] uppercase text-foreground">
                Stage A — Foundation
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                With the canonical protocol implemented locally, Stage A continues with the organisational, legal,
                security and community foundations needed to progress responsibly toward production.
              </p>
            </motion.div>

            {/* In Progress */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">01</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">In Progress</h3>
              </div>
              <div className="pl-8 border-l border-white/8 flex flex-col gap-2">
                {[
                  'Building public awareness and community presence.',
                  'Developing the Help Build Vaeloryn contributor network.',
                  'Exploring appropriate professional legal and regulatory guidance.',
                  'Refining Stage A strategy and priorities.',
                  'Evaluating potential first flagship project directions.',
                ].map((item) => (
                  <ActiveBullet key={item} text={item} />
                ))}
              </div>
            </motion.div>

            {/* Minimum Legal Gate */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">02</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">Minimum Legal Gate</h3>
              </div>
              <div className="pl-8 border-l border-white/8 flex flex-col gap-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Before activating any real-money public VAELO distribution, Vaeloryn must obtain appropriate professional
                  guidance on:
                </p>
                <BulletList items={[
                  'Appropriate legal entity and issuer structure.',
                  'Applicable regulatory requirements.',
                  'Licensing, registration or regulated-provider requirements.',
                  'KYC/AML and sanctions obligations.',
                  'Participant and jurisdiction restrictions.',
                  'Marketing and disclosure requirements.',
                  'Required participant documentation.',
                  'Tax, accounting, banking and custody considerations.',
                ]} />
                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <p className="text-sm text-primary/90 italic font-display font-light tracking-wide">
                    "If a required legal or regulatory gate cannot yet be cleared, the regulated activity should not proceed."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Production Security */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">03</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">Production Security</h3>
              </div>
              <div className="pl-8 border-l border-white/8 flex flex-col gap-5">
                <BulletList items={[
                  'Design the production smart-contract architecture.',
                  'Develop secure treasury custody with appropriate multisignature controls.',
                  'Introduce separation of powers.',
                  'Consider timelocks for sensitive actions.',
                  'Complete appropriate independent smart-contract and security review before production / mainnet.',
                ]} />
                <p className="text-xs text-muted-foreground/50 italic">
                  The testnet contracts have been built and tested. Production architecture and independent audit remain pending.
                </p>
              </div>
            </motion.div>

            {/* Stage A Funding Direction */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">04</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">Stage A Funding Direction</h3>
              </div>
              <div className="pl-8 border-l border-white/8 flex flex-col gap-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vaeloryn is exploring a limited future Stage A VAELO distribution as one possible funding mechanism.
                  The constitutional allocation designates <span className="text-foreground/80">up to 10M VAELO</span> as
                  potentially eligible for Stage A / early community distribution.
                </p>
                <div className="p-5 rounded-lg border border-amber-500/20 bg-amber-500/5">
                  <BulletList items={[
                    'This is not a commitment to distribute or sell any VAELO.',
                    'No active public real-money VAELO distribution currently exists.',
                    'No token price has been published.',
                    'Any future distribution requires all legal, regulatory, technical and security preparations.',
                  ]} />
                </div>
              </div>
            </motion.div>

            {/* First Flagship Project */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-light tracking-widest text-primary/60">05</span>
                <h3 className="text-base font-medium tracking-[0.1em] uppercase text-foreground/85">First Real Vaeloryn Project</h3>
              </div>
              <div className="pl-8 border-l border-white/8 flex flex-col gap-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Stage A includes selecting and defining Vaeloryn's first flagship project. Selection should consider:
                </p>
                <BulletList items={[
                  'Real-world value.',
                  'Technical feasibility.',
                  'Ability to execute with available resources.',
                  'Potential scalability.',
                  'Long-term strategic fit with Vaeloryn.',
                  'Ability to demonstrate measurable progress.',
                ]} />
                <p className="text-sm text-muted-foreground/60 italic">
                  The first flagship project has not yet been selected.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FUTURE DEVELOPMENT
      ══════════════════════════════════════════ */}
      <section className="py-16 border-b border-white/5 bg-white/[0.005]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/40">Future Development · Not Commitments</span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground/40">
              Stages B, C &amp; D
            </h2>
            <div className="w-10 h-px bg-white/10" />
            <p className="text-muted-foreground/50 leading-relaxed max-w-2xl text-sm">
              Future stages represent long-term objectives — not commitments to specific timelines or outcomes.
              Progression depends on demonstrated success, available resources, appropriate governance and
              completion of all relevant requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">Future Objective · Not a Guarantee</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.12em] uppercase text-foreground/60">
                Stage B — Execution
              </h2>
              <div className="w-10 h-px bg-white/15" />
            </motion.div>

            <motion.div variants={fadeInUp} className="pl-0 flex flex-col gap-6">
              <BulletList items={[
                'Build and launch the first flagship project.',
                'Demonstrate measurable real-world value.',
                'Develop sustainable revenue where possible.',
                'Grow technical and organisational capability.',
                'Introduce genuine VAELO utility only where it provides real value.',
              ]} />
              <div className="p-4 rounded-lg border border-white/8 bg-white/[0.02] w-fit">
                <p className="text-sm text-muted-foreground/80 italic font-display font-light tracking-wide">
                  "Utility follows products."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/40">Long-Term Objective · Not a Guarantee</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.12em] uppercase text-foreground/50">
                Stage C — Expansion
              </h2>
              <div className="w-10 h-px bg-white/10" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BulletList items={[
                'Expand successful Vaeloryn projects.',
                'Develop additional internal projects.',
                'Build strategic partnerships.',
                'Explore selective strategic investments where appropriate.',
                'Expand the contributor and innovation ecosystem.',
                'Strengthen long-term financial sustainability.',
              ]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/30">Long-Term Vision · Not a Guarantee</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.12em] uppercase text-foreground/40">
                Stage D — Global Ecosystem
              </h2>
              <div className="w-10 h-px bg-white/8" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <p className="text-muted-foreground/60 leading-relaxed max-w-3xl">
                Develop Vaeloryn into a globally connected innovation ecosystem capable of building, supporting
                and collaborating around meaningful science and technology projects.
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/40">Areas of Long-Term Interest</p>
                <div className="flex flex-wrap gap-2">
                  {['Energy', 'Artificial Intelligence', 'Medical Science', 'Biotechnology', 'Aerospace', 'Robotics', 'Advanced Engineering'].map((field) => (
                    <span key={field} className="text-xs text-muted-foreground/40 border border-white/8 bg-white/[0.02] px-3 py-1.5 rounded-full tracking-wide">
                      {field}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/35 italic">
                  These are areas of long-term interest — not commitments to launch specific businesses.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Roadmap Principle ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-8"
          >
            <SectionHeader eyebrow="Guiding Principle" title="Milestone-Gated Progression" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4 max-w-3xl">
              <BulletList items={[
                'Progression is milestone-gated — not simply calendar-gated.',
                'Moving from one stage to the next depends on demonstrated progress, appropriate governance, available resources and completion of relevant legal, technical and security requirements.',
                'The roadmap will evolve as Vaeloryn learns and develops.',
                'Future stages, timelines and outcomes are not guaranteed.',
              ]} />
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
            <p className="font-display text-xl md:text-2xl font-light tracking-[0.1em] uppercase text-foreground">
              Born in South Africa. Built for a global future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/status" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Engineering Dashboard →
              </Link>
              <Link href="/verify" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Verify the Protocol →
              </Link>
              <Link href="/help-build" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Help Build Vaeloryn →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
