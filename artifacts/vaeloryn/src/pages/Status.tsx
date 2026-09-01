import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Clock, Minus, Circle } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

type StatusKind = 'done' | 'inactive' | 'pending' | 'inprogress';

function StatusIcon({ kind, size = 15 }: { kind: StatusKind; size?: number }) {
  if (kind === 'done')       return <CheckCircle2 size={size} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />;
  if (kind === 'inprogress') return <Circle       size={size} strokeWidth={2}    className="text-primary/50 shrink-0 mt-0.5" />;
  if (kind === 'inactive')   return <Minus        size={size} strokeWidth={2}    className="text-muted-foreground/40 shrink-0 mt-0.5" />;
  return                            <Clock        size={size} strokeWidth={1.75} className="text-muted-foreground/55 shrink-0 mt-0.5" />;
}

function StatusRow({ label, value, kind, note }: { label: string; value: string; kind: StatusKind; note?: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
      <StatusIcon kind={kind} />
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xs text-muted-foreground/60 tracking-wide uppercase">{label}</span>
        <span className={`text-sm font-medium leading-snug ${
          kind === 'done'       ? 'text-foreground'
        : kind === 'inprogress' ? 'text-foreground/80'
        : kind === 'inactive'   ? 'text-muted-foreground/50'
        : 'text-muted-foreground/60'}`}>
          {value}
        </span>
        {note && <span className="text-xs text-muted-foreground/50 leading-relaxed mt-0.5">{note}</span>}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">{title}</h2>
      <div className="w-10 h-px bg-primary/60" />
    </motion.div>
  );
}

function BulletItem({ text, kind }: { text: string; kind: StatusKind }) {
  return (
    <div className="flex items-start gap-3">
      <StatusIcon kind={kind} />
      <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
    </div>
  );
}

const MILESTONES = [
  { label: 'Canonical Protocol Implemented',    detail: 'Built locally; not deployed' },
  { label: 'Canonical Smart Contracts',          detail: 'Token, founder vesting, genesis distribution and factory' },
  { label: 'Historical V1.1 Testnet',            detail: 'Three prototype contracts remain on Base Sepolia' },
  { label: 'Canonical Founder Vesting',          detail: 'Locally tested; not deployed' },
  { label: 'Canonical Genesis Distribution',     detail: 'Locally tested; no network transaction broadcast' },
  { label: 'Canonical Allocation',               detail: 'Six-category design implemented locally' },
  { label: 'Canonical Source Verification',      detail: 'Pending deployment' },
  { label: 'Targeted Local Test Evidence',       detail: '27 passed, 0 failed, 0 skipped' },
];

export function Status() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn Engineering Progress | Canonical Protocol Status"
        description="Track Vaeloryn engineering progress, canonical protocol evidence, testing results and the distinction between local work and historical deployment status."
        canonical="https://vaeloryn.com/status"
        keywords="Vaeloryn engineering progress, protocol status, Foundry testing, VAELO deployment"
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
              Stage A — Foundation · Engineering Dashboard
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Protocol Status
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
               A transparent record of what has been built, deployed and source-verified — and what remains ahead.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Protocol Milestones ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Achieved</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Protocol Milestones
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                The canonical Vaeloryn protocol has been implemented and tested locally, but is not deployed.
                The historical V1.1 prototype is the separate deployment currently visible on Base Sepolia.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MILESTONES.map(({ label, detail }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 rounded-lg border border-primary/15 bg-primary/5 hover:border-primary/25 transition-colors"
                >
                  <CheckCircle2 size={18} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground tracking-wide">{label}</span>
                    <span className="text-xs text-muted-foreground/70 leading-relaxed">{detail}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit inline-block">
                Verify the Protocol →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Current Phase & VAELO Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Right Now" title="Current Phase & VAELO Status" />

            {/* Current phase callout */}
            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-primary/25 bg-primary/6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 mb-0.5">Current Phase</p>
                  <p className="font-display text-xl font-light tracking-wide text-foreground">Stage A — Foundation</p>
                </div>
              </div>
              <div className="sm:ml-auto">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary/80 border border-primary/25 bg-primary/8 px-3 py-1.5 rounded-full">
                  Active Development
                </span>
              </div>
            </motion.div>

            {/* VAELO status grid */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StatusRow label="Canonical Protocol"                   value="Implemented locally · not deployed" kind="done"     />
              <StatusRow label="Historical Prototype"                 value="V1.1 · Base Sepolia Testnet"        kind="done"     />
              <StatusRow label="Chain ID"                             value="84532"                            kind="done"     />
              <StatusRow label="Targeted Test Evidence"               value="27 local tests passing"            kind="done"     />
              <StatusRow label="Canonical Allocation"                 value="Implemented locally · not on-chain" kind="done"    />
              <StatusRow label="Canonical Founder Vesting"            value="Locally tested · not deployed"      kind="done"     />
              <StatusRow label="Official launch timestamp (T0)"       value="Not set · deployment pending"      kind="pending"  />
              <StatusRow label="Production / Mainnet"                 value="Not launched"                     kind="inactive" />
              <StatusRow label="Public VAELO Distribution"            value="Not active"                       kind="inactive" note="No public sale or token distribution is currently active" />
              <StatusRow label="Independent Production Security Review" value="Pending"                        kind="pending"  />
              <StatusRow label="Professional Legal / Regulatory Review" value="Pending"                        kind="pending"  />
              <StatusRow label="First Flagship Project"               value="Selection pending"                kind="pending"  />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Verified Contracts ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Historical V1.1 · Base Sepolia Testnet" title="Published Prototype Contracts" />

            <div className="flex flex-col gap-4">
              {[
                { name: 'VaelorynToken',            addr: '0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c', role: 'Historical V1.1 ERC-20 · legacy testnet prototype' },
                { name: 'VaelorynFounderVesting',   addr: '0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2', role: 'Historical V1.1 vesting contract · non-canonical' },
                { name: 'VaelorynGenesisAllocator', addr: '0xa3eF040471497538a617061FdDEea0CD4C03beBa', role: 'Historical V1.1 genesis distribution · non-canonical' },
              ].map(({ name, addr, role }, i) => (
                <motion.div
                  key={name}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-lg border border-white/8 bg-white/[0.02]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground/90 tracking-wide">{name}</span>
                      <span className="text-xs text-muted-foreground/60">{role}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pl-6 sm:pl-0">
                    <span className="text-xs font-mono text-muted-foreground/60 break-all">{addr}</span>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <span className="text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">Verified</span>
                      <span className="text-xs text-muted-foreground/40 border border-white/8 bg-white/[0.02] px-2 py-0.5 rounded-full">Testnet</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp}>
              <p className="text-xs text-muted-foreground/50 italic border-l border-white/10 pl-4">
                These are Base Sepolia testnet contracts. They are not mainnet production contracts and do not represent a launched product.
                Their deployed bytecode and published source metadata are independently inspectable on Base Sepolia
                block explorers. This does not constitute an independent security audit or canonical Mainnet verification.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Completed to Date ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Engineering Record" title="Completed to Date" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                'VaelorynToken smart contract designed and implemented.',
                'VaelorynFounderVesting smart contract designed and implemented.',
                'VaelorynGenesisDistribution smart contract designed and implemented.',
                'Canonical Foundry implementation tested locally — 27 targeted tests passed, zero failures.',
                'Historical V1.1 prototype remains deployed to Base Sepolia; canonical deployment is pending.',
                'Canonical source verification is pending deployment.',
                'Historical V1.1 allocation recorded and inspectable on-chain.',
                'Canonical founder vesting schedule implemented and locally tested; not deployed.',
                'Canonical initial mint of 1,000,000,000 VAELO implemented and locally tested — minted once at construction.',
                'VAELO tokenomics framework developed.',
                'Trust, Transparency & Supply Protection Framework developed.',
                'Stage A roadmap developed.',
                'Public White Paper draft developed.',
                'Public Risk Disclosure developed.',
                'Vaeloryn public website developed and launched.',
                'Public social channels established.',
                'Help Build Vaeloryn contributor pathway established.',
              ].map((item) => (
                <BulletItem key={item} text={item} kind="done" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Currently in Progress ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Active" title="Currently in Progress" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                'Building public awareness and community presence.',
                'Developing the Help Build Vaeloryn contributor network.',
                'Exploring appropriate professional legal and regulatory guidance.',
                'Refining Stage A strategy and priorities.',
                'Evaluating potential first flagship project directions.',
                'Preparing production architecture design documentation.',
              ].map((item) => (
                <BulletItem key={item} text={item} kind="inprogress" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Pending Before Production / Mainnet ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Pending" title="Required Before Production / Mainnet" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                'Appropriate professional legal and regulatory review.',
                'Appropriate entity and organisational structure.',
                'Final production token architecture design.',
                'Secure treasury custody architecture.',
                'Appropriate multisignature controls for production.',
                'Separation-of-powers implementation for production.',
                'Timelocks where appropriate for production.',
                'Independent smart-contract and security review.',
                'Final production deployment.',
                'Any required compliance systems.',
                'Any future public real-money distribution process.',
              ].map((item) => (
                <BulletItem key={item} text={item} kind="pending" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Important Notice ── */}
      <section className="py-16 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg border border-amber-500/20 bg-amber-500/5 flex gap-4 items-start"
          >
            <div className="mt-0.5 w-4 h-4 rounded-full border border-amber-400/50 flex-shrink-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
            </div>
            <div className="space-y-2 text-sm text-amber-200/70 leading-relaxed">
              <p>The deployed contracts are Base Sepolia testnet contracts — not mainnet production.</p>
              <p>No active public real-money VAELO distribution currently exists.</p>
              <p>Future plans remain subject to ongoing development and appropriate professional review.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer links ── */}
      <section className="py-20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit">
              Verify the Protocol →
            </Link>
            <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              Roadmap →
            </Link>
            <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              Trust &amp; Transparency →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
