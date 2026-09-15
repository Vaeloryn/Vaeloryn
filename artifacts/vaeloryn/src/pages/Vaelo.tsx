import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CheckCircle2 } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ALLOCATION = [
  { label: 'Ecosystem & Community', pct: 30, amount: '300M', note: 'Largest allocation — held in reserve to fund long-term ecosystem growth.' },
  { label: 'Public Distribution',   pct: 20, amount: '200M', note: 'Milestone-gated. No active sale. Subject to regulatory preparation.' },
  { label: 'Vaeloryn Treasury',     pct: 20, amount: '200M', note: 'Long-term development reserve. Not a founder wallet.' },
  { label: 'Team & Contributors',   pct: 15, amount: '150M', note: 'Reserved for future team and contributor grants with vesting conditions.' },
  { label: 'Founder',               pct: 10, amount: '100M', note: 'Held in FounderVesting contract. 2.5M at T0 and at +90, +180 and +270 days; 90M linear over exactly 1,095 days from +270 days.' },
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
        title="VAELO | Vaeloryn Digital Asset, Utility and Status"
        description="Explore VAELO, the intended native economic layer of the wider Vaeloryn ecosystem, including its canonical tokenomics, historical prototype and pre-mainnet status."
        canonical="https://vaeloryn.com/vaelo"
        keywords="VAELO, Vaeloryn economic layer, onchain innovation, tokenomics, Base, Base Sepolia"
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
              Native Economic Layer · Pre-Mainnet
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              VAELO
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              VAELO is the intended native economic and onchain infrastructure layer for the wider Vaeloryn
              ecosystem. Its canonical design is implemented locally with a 1,000,000,000 VAELO initial mint and no
              additional mint path.
              The published Base Sepolia deployment is a historical, non-canonical V1.1 prototype and does not
              represent the canonical implementation described on this page.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-wide">
                Canonical implementation <span className="text-primary/90">not yet deployed</span> · Historical V1.1 prototype on Base Sepolia
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Status Notice ── */}
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
              <p className="text-sm font-medium tracking-wide text-primary/90 uppercase">Testnet Notice</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The historical V1.1 prototype is deployed on Base Sepolia testnet only and has no monetary value.
                The canonical tokenomics described on this page are intended design and are implemented locally,
                not in the published V1.1 contracts. No real-money VAELO distribution is currently active. Mainnet launch requires independent security review
                and legal and regulatory preparation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Protocol Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Protocol Status</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Canonical Design · Not Deployed
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
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Protocol Details</p>
                <div className="space-y-3">
                  {[
                    { key: 'Protocol Status',    val: 'Implemented locally · not deployed', highlight: true },
                    { key: 'Network',            val: 'Historical V1.1 · Base Sepolia', highlight: true },
                    { key: 'Chain ID',           val: '84532' },
                     { key: 'Test Evidence',      val: '32 targeted local tests passing', highlight: true },
                    { key: 'Production / Mainnet', val: 'Not launched' },
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

      {/* ── Deployed Contracts ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Historical V1.1 Contracts</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Published on Base Sepolia
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                These three contracts are the historical V1.1 testnet prototype, not the canonical implementation.
                Their addresses can be independently inspected via BaseScan or Blockscout; source-verification
                metadata is not treated as verification of the canonical production design.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { name: 'VaelorynToken',            addr: '0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c', role: 'V1.1 ERC-20 · legacy testnet prototype' },
                { name: 'VaelorynFounderVesting',   addr: '0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2', role: 'Historical V1.1 testnet vesting contract · non-canonical' },
                { name: 'VaelorynGenesisAllocator', addr: '0xa3eF040471497538a617061FdDEea0CD4C03beBa', role: 'V1.1 genesis allocation · historical only' },
              ].map(({ name, addr, role }, i) => (
                <motion.div
                  key={name}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-lg border border-white/8 bg-white/[0.02]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-foreground/90 tracking-wide block">{name}</span>
                      <span className="text-xs text-muted-foreground/60">{role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-6 sm:pl-0">
                    <span className="text-xs font-mono text-muted-foreground/70 break-all">{addr}</span>
                    <span className="flex-shrink-0 text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">Explorer-inspectable · testnet</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp}>
              <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit inline-block">
                Full Verification Details →
              </Link>
            </motion.div>
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
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Intended Canonical Tokenomics · Not Deployed</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Token Allocation
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                   <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Initial Minted Supply</span>
                  <span className="font-display text-3xl font-light tracking-wider text-primary">1,000,000,000 <span className="text-lg text-primary/70">VAELO</span></span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                This six-category allocation is the intended canonical design and is implemented locally.
                It has not been deployed or source-verified on a network. The historical V1.1 deployment uses
                different allocation and vesting terms.
              </p>
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

            {/* Key principle */}
            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 mb-2">Key Principle</p>
              <p className="text-sm font-display italic text-foreground/90 mb-2">"Allocation does not equal circulation."</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                 Allocated VAELO may remain locked, reserved, vested or otherwise non-circulating for extended periods.
                  The canonical design mints one billion VAELO once at construction and includes no additional mint path.
                  Voluntary burns would be able to reduce totalSupply() after deployment.
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
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Working Structure · Subject to Regulatory Review</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Public Distribution
              </h2>
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                The 200M Public Distribution allocation is structured in three tranches.
                Distribution is <span className="text-foreground/80">milestone-gated, not calendar-gated.</span>
                No sale is currently active.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tranche: 'Stage A',
                  amount: 'Up to 10M VAELO',
                  desc: 'Potential Stage A / early community distribution — subject to all legal, regulatory and security preparations.',
                },
                {
                  tranche: 'Initial Stages',
                  amount: 'Up to 40M VAELO',
                  desc: 'For subsequent initial stages, subject to milestone gates.',
                },
                {
                  tranche: 'Future Reserve',
                  amount: '150M VAELO',
                  desc: 'Held for later distribution stages — not currently allocated for sale.',
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
                No real-money public VAELO distribution is currently active. No token price is published.
                Any future distribution requires appropriate legal, regulatory, technical and security preparation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Vesting ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Canonical Design · Implemented Locally</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Founder Vesting
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-primary/15 bg-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The canonical design places the founder allocation inside the <span className="text-foreground/90 font-medium">VaelorynFounderVesting</span> contract.
                Its locally tested vesting logic contains no admin bypass or manual override. The canonical schedule has been tested locally but has not
                been deployed. The published V1.1 address above is historical prototype evidence, not the canonical
                founder vesting deployment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Allocation</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">100M VAELO <span className="text-base text-muted-foreground/60">/ 10%</span></p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Contract</span>
                    <span className="text-foreground/80 font-medium">VaelorynFounderVesting</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="text-primary/80 font-medium">Implemented locally · not deployed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Vesting Schedule</p>
                <ul className="space-y-4">
                  {[
                    { phase: 'Initial release', amount: '2,500,000 VAELO', desc: 'Claimable at T0, the official launch timestamp.' },
                    { phase: 'Three scheduled releases', amount: '2,500,000 VAELO at +90, +180 and +270 days', desc: 'Exactly three additional releases; no fourth release at +360 days.' },
                    { phase: 'Linear phase', amount: '90,000,000 VAELO', desc: 'Vests from T0 + 270 days over exactly 1,095 days.' },
                  ].map(({ phase, amount, desc }) => (
                    <li key={phase} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground/90">{phase}</p>
                        <p className="text-sm text-primary/80">{amount}</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team & Treasury ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Proposed Structure · Subject to Professional Review</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">
                Team &amp; Treasury
              </h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Team &amp; Contributors</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">150M VAELO <span className="text-base text-muted-foreground/60">/ 15%</span></p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reserved for future team and contributor grants. Significant allocations are intended to use vesting
                  or milestone conditions rather than becoming immediately transferable.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Vaeloryn Treasury</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">200M VAELO <span className="text-base text-muted-foreground/60">/ 20%</span></p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Long-term development reserve. <span className="text-foreground/80">Not intended to function as a personal founder wallet.</span>
                  Major treasury actions are intended to use multisignature custody and appropriate governance.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                Team, contributor and treasury structures are proposed working arrangements and remain subject to professional
                legal, regulatory, tax and security review before production implementation.
              </p>
            </motion.div>
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
              Verify the protocol on-chain, read the technical architecture, or explore the broader Vaeloryn vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/verify" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Verify Protocol →
              </Link>
              <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Trust &amp; Transparency →
              </Link>
              <Link href="/whitepaper" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                White Paper →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
