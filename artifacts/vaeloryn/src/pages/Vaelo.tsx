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

const ALLOCATION = [
  { label: 'Ecosystem & Community', pct: 30, amount: '300M', note: 'Largest allocation — intended to fund long-term ecosystem growth.' },
  { label: 'Public Distribution',   pct: 20, amount: '200M', note: 'Milestone-gated. No active sale. Subject to regulatory preparation.' },
  { label: 'Vaeloryn Treasury',     pct: 20, amount: '200M', note: 'Long-term development reserve. Not a founder wallet.' },
  { label: 'Team & Contributors',   pct: 15, amount: '150M', note: 'Intended to use vesting or milestone conditions.' },
  { label: 'Founder',               pct: 10, amount: '100M', note: 'Subject to proposed cliff and progressive vesting schedule.' },
  { label: 'Strategic Partnerships',pct:  5, amount:  '50M', note: 'For aligned ecosystem partners and integrations.' },
];

function AllocationBar({ pct }: { pct: number }) {
  return (
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary/80 to-primary/40 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      />
    </div>
  );
}

export function Vaelo() {
  return (
    <div className="w-full">
      <SEO
        title="VAELO — Vaeloryn Digital Asset | Testnet Prototype"
        description="Explore the developing digital asset of the Vaeloryn ecosystem, including its current testnet status, proposed tokenomics and long-term design principles."
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40 pointer-events-none -translate-y-1/2" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full w-fit">
              Digital Asset · Testnet Prototype
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              VAELO
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore the developing digital asset of the Vaeloryn ecosystem, including its current testnet status, proposed tokenomics and long-term design principles.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-wide">
                Currently live on <span className="text-primary/90">Base Sepolia Testnet</span> · Mainnet not launched
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Important Status Notice ── */}
      <section className="py-10 border-b border-white/5 bg-white/[0.02]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start p-5 rounded-lg border border-primary/20 bg-primary/5"
          >
            <div className="mt-0.5 w-4 h-4 rounded-full border border-primary/60 flex-shrink-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-medium tracking-wide text-primary/90 uppercase">Early-Stage Project Notice</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vaeloryn and VAELO are early-stage. VAELO currently exists as a prototype on Base Sepolia testnet only.
                The tokenomics and production architecture described on this page are <span className="text-foreground/80">working proposals</span> and
                remain subject to ongoing technical development and appropriate professional legal, regulatory, tax, economic and security review.
                No real-money VAELO distribution is currently active.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Current Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Current Status</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Prototype on Testnet
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core principle */}
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Core Principle</p>
                <p className="font-display text-xl font-light tracking-wide text-foreground italic">
                  "Utility follows products."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vaeloryn does not intend to force VAELO into products merely to manufacture token demand.
                  Mature utility should develop around real products, services and ecosystem activity where VAELO provides genuine value.
                </p>
              </motion.div>

              {/* Network info */}
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Network Details</p>
                <div className="space-y-3">
                  {[
                    { key: 'Network',        val: 'Base Sepolia', highlight: true },
                    { key: 'Chain ID',       val: '84532' },
                    { key: 'Production / Mainnet',       val: 'Not launched' },
                    { key: 'Public Distribution', val: 'Not active' },
                  ].map(({ key, val, highlight }) => (
                    <div key={key} className="flex justify-between items-center gap-4 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-muted-foreground/70">{key}</span>
                      <span className={highlight ? 'text-primary/90 font-medium' : 'text-foreground/80'}>{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Verified Prototype Contracts ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Prototype Contracts</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Verified on Base Sepolia
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                All three prototype contracts have been source-verified on Base Sepolia testnet.
                A controlled 100 VAELO wallet-to-wallet test transfer has been completed successfully.
                The V1.1 prototype is <span className="text-foreground/80">not the final production or mainnet architecture.</span>
              </p>
            </motion.div>

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
                    <span className="text-xs text-primary/50 font-mono w-5 text-right flex-shrink-0">{i + 1}</span>
                    <span className="text-sm font-medium text-foreground/90 tracking-wide">{name}</span>
                  </div>
                  <div className="flex items-center gap-2 pl-8 sm:pl-0">
                    <span className="text-xs font-mono text-muted-foreground/70 break-all">{addr}</span>
                    <span className="flex-shrink-0 text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">Verified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tokenomics ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Working Tokenomics V1.0 · Pre-Professional Review</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Proposed Token Allocation
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Proposed Maximum Supply</span>
                  <span className="font-display text-3xl font-light tracking-wider text-primary">1,000,000,000 <span className="text-lg text-primary/70">VAELO</span></span>
                </div>
              </div>
            </motion.div>

            {/* Allocation bars */}
            <div className="flex flex-col gap-5">
              {ALLOCATION.map(({ label, pct, amount, note }) => (
                <motion.div key={label} variants={fadeInUp} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-foreground/85 tracking-wide">{label}</span>
                    <div className="flex items-baseline gap-2 flex-shrink-0">
                      <span className="text-sm font-medium text-primary/90">{pct}%</span>
                      <span className="text-xs text-muted-foreground/60 font-mono">{amount}</span>
                    </div>
                  </div>
                  <AllocationBar pct={pct} />
                  <p className="text-xs text-muted-foreground/55 leading-relaxed">{note}</p>
                </motion.div>
              ))}
            </div>

            {/* Allocation ≠ circulation notice */}
            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 mb-2">Key Principle</p>
              <p className="text-sm font-display italic text-foreground/90 mb-2">"Allocation does not equal circulation."</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Allocated VAELO may remain locked, reserved, vested or otherwise non-circulating for extended periods.
                The intended production architecture should not permit minting beyond the proposed 1 billion maximum supply.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Public Distribution ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Working Structure · Subject to Review</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Public Distribution Direction
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                The 200M Public Distribution working allocation is currently structured in three tranches.
                Distribution is intended to be <span className="text-foreground/80">milestone-gated, not calendar-gated.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tranche: 'Stage A',
                  amount: 'Up to 10M VAELO',
                  desc: 'Potentially eligible for Stage A / early community distribution.',
                },
                {
                  tranche: 'Initial Stages',
                  amount: 'Up to 40M VAELO',
                  desc: 'For subsequent initial stages, subject to milestone gates.',
                },
                {
                  tranche: 'Future Reserve',
                  amount: '150M VAELO',
                  desc: 'Future Public Distribution Reserve — held for later stages.',
                },
              ].map(({ tranche, amount, desc }) => (
                <motion.div key={tranche} variants={fadeInUp} className="p-5 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">{tranche}</span>
                  <p className="font-display text-lg font-light text-foreground tracking-wide">{amount}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <p className="text-sm text-amber-200/80 leading-relaxed">
                These allocations do not represent an active offer or sale.
                No real-money public VAELO distribution is currently active.
                Any future distribution remains subject to appropriate legal, regulatory, technical and security preparation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder & Team ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Proposed Structure · Subject to Professional Review</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Founder &amp; Team
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Founder Allocation</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">100M VAELO <span className="text-base text-muted-foreground/60">/ 10%</span></p>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>Up to <span className="text-foreground/80">10M progressively eligible during Year 1</span>, with a maximum of 2.5M per quarter.</p>
                  <p>Remaining 90M subject to a proposed <span className="text-foreground/80">12-month cliff</span> followed by progressive vesting over the subsequent <span className="text-foreground/80">36 months</span>.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Team &amp; Contributors</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">150M VAELO <span className="text-base text-muted-foreground/60">/ 15%</span></p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Significant team and contributor grants are intended to use vesting or milestone conditions
                  rather than becoming immediately transferable.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                These are proposed working structures and remain subject to professional legal, regulatory, tax and security review. They do not represent final or binding arrangements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Treasury ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Proposed Design</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Vaeloryn Treasury
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Purpose</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">200M VAELO <span className="text-base text-muted-foreground/60">/ 20%</span></p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Vaeloryn Treasury is intended to support long-term ecosystem development.
                  It is <span className="text-foreground/80">not intended to function as a personal founder wallet.</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Proposed Safeguards</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {[
                    'Multisignature custody for sensitive actions',
                    'Separation of powers between treasury and founder',
                    'Timelocks for significant treasury movements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary/50 mt-1 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/50 italic pt-1">
                  Proposed design. Final architecture subject to professional review.
                </p>
              </motion.div>
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
            className="flex flex-col items-center gap-8 text-center"
          >
            <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
            <p className="text-muted-foreground/70 text-sm max-w-lg leading-relaxed">
              For a broader view of Vaeloryn's vision, technical architecture and economic model, read the working White Paper draft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/whitepaper" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                White Paper Draft →
              </Link>
              <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Trust &amp; Transparency →
              </Link>
              <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Project Status →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
