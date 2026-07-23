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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

type StatusKind = 'done' | 'inactive' | 'pending' | 'inprogress';

function StatusIcon({ kind }: { kind: StatusKind }) {
  if (kind === 'done')       return <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />;
  if (kind === 'inprogress') return <Circle       size={15} strokeWidth={2}    className="text-primary/50 shrink-0 mt-0.5" />;
  if (kind === 'inactive')   return <Minus        size={15} strokeWidth={2}    className="text-muted-foreground/40 shrink-0 mt-0.5" />;
  return                            <Clock        size={15} strokeWidth={1.75} className="text-muted-foreground/55 shrink-0 mt-0.5" />;
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

export function Status() {
  return (
    <div className="w-full">
      <SEO
        title="Project Status — Vaeloryn | Stage A Foundation"
        description="See what Vaeloryn has completed, what is currently being developed and what remains proposed or pending."
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
              Stage A — Foundation · Current
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Project Status
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              See what Vaeloryn has completed, what is currently being developed and what remains proposed or pending.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Status Principle ── */}
      <section className="py-12 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <p className="font-display text-lg md:text-xl font-light tracking-wide text-primary italic">
              "Be clear about what exists today, what comes next, and what remains uncertain."
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              This page is the definitive public record of Vaeloryn's development state. It will evolve as the project progresses
              and is intended to give visitors a transparent view of where the project actually stands — not where it hopes to be.
            </p>
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

            <motion.div variants={fadeInUp}>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
                Vaeloryn is currently focused on building its public, technical, legal, security and organisational foundations —
                the necessary groundwork before responsible progression toward production.
              </p>
            </motion.div>

            {/* VAELO status grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StatusRow label="Network"                               value="Base Sepolia Testnet"           kind="done"     />
              <StatusRow label="Chain ID"                              value="84532"                          kind="done"     />
              <StatusRow label="Prototype Version"                     value="V1.1"                           kind="done"     />
              <StatusRow label="Production / Mainnet"                  value="Not launched"                   kind="inactive" />
              <StatusRow label="Public Real-Money VAELO Distribution"  value="Not active"                     kind="inactive" note="No public sale or token distribution is currently active" />
              <StatusRow label="Independent Production Security Review" value="Pending"                       kind="pending"  />
              <StatusRow label="Professional Legal / Regulatory Review" value="Pending"                       kind="pending"  />
              <StatusRow label="First Flagship Project"                value="Selection pending"              kind="pending"  />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Completed To Date ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Achieved" title="Completed to Date" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                'VAELO V1.1 prototype deployed to Base Sepolia testnet.',
                'Three prototype contracts deployed.',
                'All three prototype contracts source-verified.',
                'Controlled 100 VAELO wallet-to-wallet test transfer completed successfully.',
                'Initial VAELO tokenomics framework developed.',
                'Trust, Transparency & Supply Protection Framework developed.',
                'Stage A roadmap developed.',
                'Public White Paper draft developed.',
                'Public Risk Disclosure developed.',
                'Vaeloryn public website under active development.',
                'Public social channels established.',
                'Help Build Vaeloryn contribution pathway established.',
              ].map((item) => (
                <BulletItem key={item} text={item} kind="done" />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xs text-muted-foreground/50 italic border-l border-white/10 pl-4">
                Developed internal frameworks do not equal professional legal, regulatory or independent security approval.
                All frameworks remain subject to appropriate professional review.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Verified Testnet Contracts ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Base Sepolia · Prototype Only" title="Verified Testnet Contracts" />

            <div className="flex flex-col gap-4">
              {[
                { name: 'VaelorynToken',            addr: '0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c' },
                { name: 'VaelorynFounderVesting',   addr: '0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2' },
                { name: 'VaelorynGenesisAllocator', addr: '0xa3eF040471497538a617061FdDEea0CD4C03beBa' },
              ].map(({ name, addr }, i) => (
                <motion.div
                  key={name}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-lg border border-white/8 bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground/90 tracking-wide">{name}</span>
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
                These are Base Sepolia testnet prototype contracts. They are not final production contracts
                and do not represent a launched mainnet product.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Currently In Progress ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Active" title="Currently in Progress" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                'Public website development and documentation.',
                'Building public awareness and community presence.',
                'Developing the Help Build Vaeloryn contributor network.',
                'Refining Stage A strategy.',
                'Exploring appropriate professional legal and regulatory guidance.',
                'Preparing for future production architecture design.',
                'Evaluating potential first flagship project directions.',
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
                'Final production token architecture.',
                'Production-grade founder and team vesting implementation.',
                'Secure treasury custody architecture.',
                'Appropriate multisignature controls.',
                'Separation-of-powers implementation.',
                'Timelocks where appropriate.',
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
              <p>No production or mainnet VAELO is currently represented as launched.</p>
              <p>No active public real-money VAELO distribution currently exists.</p>
              <p>The current contracts are testnet prototypes only.</p>
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
            <Link href="/roadmap" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit">
              View Roadmap →
            </Link>
            <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              Trust &amp; Transparency →
            </Link>
            <Link href="/vaelo" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              VAELO Tokenomics →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
