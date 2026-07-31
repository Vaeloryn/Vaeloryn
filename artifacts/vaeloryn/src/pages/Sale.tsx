import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { Wallet, TrendingUp, BarChart3, Clock, AlertCircle } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function PlaceholderValue({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-2">
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60">{label}</p>
      <p className="font-display text-2xl font-light tracking-wide text-muted-foreground/40">{value}</p>
      {sub && <p className="text-xs text-muted-foreground/40">{sub}</p>}
    </div>
  );
}

export function Sale() {
  return (
    <div className="w-full">
      <SEO
        title="Token Sale — Vaeloryn | VAELO Sale Dashboard"
        description="The VAELO token sale dashboard. No sale is currently active. This page will become the official sale interface when a public distribution opens."
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full w-fit">
              Public Distribution · Not Yet Active
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              VAELO Sale
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The VAELO public distribution dashboard. No sale is currently active. This interface will be connected
              to the smart contracts when a public distribution opens.
            </motion.p>
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
              <p className="text-sm font-medium tracking-wide text-amber-300/90">No Public Sale Currently Active</p>
              <p className="text-sm text-amber-200/60 leading-relaxed">
                No real-money VAELO distribution is currently open. No token price has been published.
                Any future public distribution will require independent security review, legal and regulatory preparation,
                and completion of further development milestones — none of which are currently complete.
                This page is a UI preview only.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Dashboard ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">Sale Overview · Preview</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground/60">
                Current Sale
              </h2>
              <div className="w-10 h-px bg-white/20" />
            </motion.div>

            {/* Key metrics */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PlaceholderValue label="Current Tier"       value="—"     sub="Not yet assigned" />
              <PlaceholderValue label="Current Price"      value="—"     sub="No price published" />
              <PlaceholderValue label="Tokens Remaining"   value="—"     sub="No active allocation" />
              <PlaceholderValue label="Funds Raised"       value="—"     sub="No sale active" />
            </motion.div>

            {/* Progress bar */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground/50">
                <span>Sale Progress</span>
                <span>—%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground/40 italic">Progress bar will reflect live sale data when a distribution opens.</p>
            </motion.div>

            {/* Connect Wallet / Buy section */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Wallet size={16} className="text-muted-foreground/40" />
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50">Wallet</p>
                </div>
                <button
                  disabled
                  className="h-12 px-6 rounded-md border border-white/10 bg-white/[0.02] text-sm font-medium text-muted-foreground/30 tracking-wide cursor-not-allowed w-full"
                >
                  Connect Wallet — Not Active
                </button>
                <p className="text-xs text-muted-foreground/40 leading-relaxed">
                  Wallet connection will be enabled when a public distribution opens. Base network required.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-muted-foreground/40" />
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50">Purchase</p>
                </div>
                <div className="h-12 px-4 rounded-md border border-white/8 bg-white/[0.015] flex items-center">
                  <span className="text-sm text-muted-foreground/30">Amount (VAELO)</span>
                </div>
                <button
                  disabled
                  className="h-12 px-6 rounded-md bg-primary/20 text-sm font-medium text-primary/30 tracking-wide cursor-not-allowed w-full"
                >
                  Buy VAELO — No Sale Active
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Statistics ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-muted-foreground/40" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">Sale Statistics · Preview</span>
              </div>
              <h2 className="font-display text-3xl font-light tracking-[0.1em] uppercase text-foreground/50">
                Statistics
              </h2>
              <div className="w-10 h-px bg-white/15" />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Total Participants',    value: '—' },
                { label: 'Average Purchase',      value: '—' },
                { label: 'Largest Purchase',      value: '—' },
                { label: 'Distribution Progress', value: '—' },
                { label: 'Stage Allocation',      value: '—' },
                { label: 'Time Remaining',        value: '—' },
              ].map(({ label, value }) => (
                <motion.div key={label} variants={fadeInUp} className="p-5 rounded-lg border border-white/5 bg-white/[0.015] flex flex-col gap-1.5">
                  <p className="text-xs text-muted-foreground/40 tracking-wide uppercase">{label}</p>
                  <p className="font-display text-xl font-light text-muted-foreground/25">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Purchase History ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">Your Activity · Preview</span>
              <h2 className="font-display text-3xl font-light tracking-[0.1em] uppercase text-foreground/50">Purchase History</h2>
              <div className="w-10 h-px bg-white/15" />
            </motion.div>

            <motion.div variants={fadeInUp} className="p-12 rounded-lg border border-white/5 bg-white/[0.015] flex flex-col items-center gap-4 text-center">
              <Clock size={32} className="text-muted-foreground/20" />
              <p className="text-sm text-muted-foreground/40 max-w-sm leading-relaxed">
                Purchase history will appear here once a sale is active and your wallet is connected.
                No purchases have been made — no sale is currently open.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Tiers ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/40">Working Structure · Subject to Change</span>
              <h2 className="font-display text-3xl font-light tracking-[0.1em] uppercase text-foreground/50">
                Distribution Tiers
              </h2>
              <div className="w-10 h-px bg-white/15" />
              <p className="text-muted-foreground/50 leading-relaxed max-w-2xl text-sm">
                The Public Distribution allocation is structured in tranches. No tier is currently active.
                All details remain subject to legal, regulatory and technical review before any sale opens.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { tier: 'Stage A', amount: 'Up to 10M VAELO', status: 'Not active', desc: 'Early community distribution — subject to all required preparations and reviews.' },
                { tier: 'Initial Stages', amount: 'Up to 40M VAELO', status: 'Future', desc: 'Subsequent initial stages following milestone gate completion.' },
                { tier: 'Future Reserve', amount: '150M VAELO', status: 'Future', desc: 'Held for later distribution stages — not currently allocated for sale.' },
              ].map(({ tier, amount, status, desc }) => (
                <motion.div key={tier} variants={fadeInUp} className="p-5 rounded-lg border border-white/5 bg-white/[0.015] flex flex-col gap-3 opacity-60">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50">{tier}</span>
                  <p className="font-display text-lg font-light text-foreground/50 tracking-wide">{amount}</p>
                  <span className="text-xs text-muted-foreground/40 border border-white/8 px-2 py-0.5 rounded-full w-fit">{status}</span>
                  <p className="text-sm text-muted-foreground/40 leading-relaxed">{desc}</p>
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
            <Link href="/vaelo" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit">
              VAELO Tokenomics →
            </Link>
            <Link href="/verify" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              Verify the Protocol →
            </Link>
            <Link href="/risks" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
              Risk Disclosures →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
