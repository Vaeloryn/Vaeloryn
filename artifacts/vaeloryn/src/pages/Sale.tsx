import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  Clock,
  LockKeyhole,
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const readinessGates = [
  {
    label: 'Canonical protocol',
    value: 'Implemented locally',
    status: 'Review required',
  },
  {
    label: 'Canonical deployment',
    value: 'Not deployed',
    status: 'Pending',
  },
  {
    label: 'Independent security review',
    value: 'Pending',
    status: 'Pending',
  },
  {
    label: 'Legal and regulatory preparation',
    value: 'Pending',
    status: 'Pending',
  },
];

const saleStages = [
  {
    stage: 'Stage A',
    title: 'Preparation',
    amount: 'Up to 10M VAELO',
    state: 'Current stage',
    description: 'Early community distribution remains gated behind protocol, security, legal and operational readiness.',
    current: true,
  },
  {
    stage: 'Initial Stages',
    title: 'Milestone-gated distribution',
    amount: 'Up to 40M VAELO',
    state: 'Next stage',
    description: 'Subsequent distribution stages can open only after the required milestones are complete.',
    current: false,
  },
  {
    stage: 'Future Reserve',
    title: 'Later distribution',
    amount: '150M VAELO',
    state: 'Future',
    description: 'Held for later stages and not currently allocated for an active sale.',
    current: false,
  },
];

function PlaceholderValue({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-2">
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60">
        {label}
      </p>
      <p className="font-display text-2xl font-light tracking-wide text-foreground/85">
        {value}
      </p>
      <p className="text-xs text-muted-foreground/50">{sub}</p>
    </div>
  );
}

export function Sale() {
  return (
    <div className="w-full">
      <SEO
        title="VAELO Sale | Vaeloryn Distribution Monitor"
        description="Track the current VAELO public distribution stage, readiness gates and future allocation windows. No public sale is active."
        canonical="https://vaeloryn.com/sale"
        keywords="VAELO sale, Vaeloryn distribution, public distribution status, VAELO stage"
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[560px] h-[560px] bg-primary/5 rounded-full blur-[120px] opacity-40 pointer-events-none -translate-y-1/2" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full w-fit"
            >
              Public Distribution · Monitoring
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground"
            >
              VAELO Sale
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Follow the public distribution roadmap, current readiness stage and
              milestone gates. No public sale is currently active.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              <span className="text-sm text-muted-foreground tracking-wide">
                Current stage:{' '}
                <span className="text-foreground/90">Stage A — Preparation</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── No Sale Active Notice ── */}
      <section className="py-10 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg border border-amber-500/25 bg-amber-500/6 flex gap-4 items-start"
          >
            <AlertCircle size={18} className="text-amber-400/70 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium tracking-wide text-amber-300/90">
                No Public Sale Currently Active
              </p>
              <p className="text-sm text-amber-200/60 leading-relaxed">
                No real-money VAELO distribution is currently open and no token
                price has been published. This monitor will be connected to
                verified distribution data only after the required protocol,
                security, legal and operational milestones are complete.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Monitor ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-primary/70" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">
                  Sale Monitor · Preview
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Current Stage
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PlaceholderValue label="Sale status" value="Not active" sub="No distribution open" />
              <PlaceholderValue label="Current stage" value="Stage A" sub="Preparation" />
              <PlaceholderValue label="Stage allocation" value="Up to 10M" sub="VAELO reserved" />
              <PlaceholderValue label="Readiness gates" value="0 / 4" sub="Gates complete" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                <span>Stage readiness</span>
                <span>0%</span>
              </div>
              <div
                className="h-2 w-full bg-white/5 rounded-full overflow-hidden"
                role="progressbar"
                aria-label="Stage A readiness"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={0}
              >
                <div className="h-full w-0 bg-gradient-to-r from-primary/70 to-primary/30 rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground/45 italic">
                Readiness will advance only when verified milestone evidence is
                available.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Readiness Gates ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">
                Milestone Tracking
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground/85">
                Readiness Gates
              </h2>
              <div className="w-10 h-px bg-white/20" />
              <p className="text-sm text-muted-foreground/65 leading-relaxed max-w-2xl">
                The sale monitor stays informational until these gates are
                independently evidenced. There is no countdown or implied launch
                date.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readinessGates.map(({ label, value, status }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="p-5 rounded-lg border border-white/8 bg-white/[0.02] flex items-start gap-4"
                >
                  <Clock size={17} className="text-muted-foreground/50 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground/55">
                      {label}
                    </p>
                    <p className="text-sm text-foreground/80 mt-1">{value}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground/45 border border-white/10 rounded-full px-2 py-1 shrink-0">
                    {status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Activity ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-muted-foreground/50" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">
                  Sale Activity · Preview
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground/75">
                Live Statistics
              </h2>
              <div className="w-10 h-px bg-white/15" />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Participants', value: '—', sub: 'No sale active' },
                { label: 'VAELO distributed', value: '—', sub: 'No allocation open' },
                { label: 'Funds raised', value: '—', sub: 'No sale active' },
                { label: 'Stage progress', value: '0%', sub: 'Preparation stage' },
                { label: 'Last verified update', value: '—', sub: 'Awaiting live data' },
                { label: 'Time remaining', value: '—', sub: 'No sale window set' },
              ].map(({ label, value, sub }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="p-5 rounded-lg border border-white/5 bg-white/[0.015] flex flex-col gap-1.5"
                >
                  <p className="text-xs text-muted-foreground/45 tracking-wide uppercase">{label}</p>
                  <p className="font-display text-xl font-light text-muted-foreground/35">{value}</p>
                  <p className="text-xs text-muted-foreground/35">{sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-lg border border-white/5 bg-white/[0.015] flex flex-col items-center gap-4 text-center"
            >
              <LockKeyhole size={28} className="text-muted-foreground/25" />
              <p className="text-sm text-muted-foreground/50 max-w-lg leading-relaxed">
                Participant activity, allocation events and settlement metrics
                will appear here only when a verified public distribution opens.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Stages ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/40">
                Working Structure · Subject to Review
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground/75">
                Distribution Stages
              </h2>
              <div className="w-10 h-px bg-white/15" />
              <p className="text-muted-foreground/55 leading-relaxed max-w-2xl text-sm">
                The Public Distribution allocation is structured in stages. No
                stage is currently active, and all future details remain subject
                to legal, regulatory, technical and security review.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {saleStages.map(({ stage, title, amount, state, description, current }) => (
                <motion.div
                  key={stage}
                  variants={fadeInUp}
                  className={`p-5 rounded-lg border flex flex-col gap-3 ${
                    current
                      ? 'border-primary/25 bg-primary/[0.05]'
                      : 'border-white/5 bg-white/[0.015] opacity-65'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-medium tracking-[0.15em] uppercase ${current ? 'text-primary/80' : 'text-muted-foreground/50'}`}>
                      {stage}
                    </span>
                    {current ? (
                      <CheckCircle2 size={15} className="text-primary/80" />
                    ) : (
                      <Clock size={15} className="text-muted-foreground/40" />
                    )}
                  </div>
                  <p className={`font-display text-lg font-light tracking-wide ${current ? 'text-foreground/90' : 'text-foreground/55'}`}>
                    {title}
                  </p>
                  <p className={`text-sm ${current ? 'text-primary/80' : 'text-muted-foreground/45'}`}>
                    {amount}
                  </p>
                  <span className="text-xs text-muted-foreground/45 border border-white/8 px-2 py-0.5 rounded-full w-fit">
                    {state}
                  </span>
                  <p className="text-sm text-muted-foreground/45 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/vaelo"
              className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit"
            >
              VAELO Tokenomics →
            </Link>
            <Link
              href="/status"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit"
            >
              Project Status →
            </Link>
            <Link
              href="/risks"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit"
            >
              Risk Disclosures →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}