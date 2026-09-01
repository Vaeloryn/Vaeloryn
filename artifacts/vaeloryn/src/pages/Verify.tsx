import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CheckCircle2, ExternalLink, Shield, FlaskConical, Cpu, Lock } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
          <CheckCircle2 size={14} strokeWidth={1.75} className="text-primary/70 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-6 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-muted-foreground/70 flex-shrink-0">{label}</span>
      <span className={`text-foreground/85 text-right break-all ${mono ? 'font-mono text-xs' : ''}`}>{value}</span>
    </div>
  );
}

const CONTRACTS = [
  {
    name: 'VaelorynToken',
    addr: '0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c',
    role: 'Historical V1.1 ERC-20 token · legacy testnet',
    verified: false,
  },
  {
    name: 'VaelorynFounderVesting',
    addr: '0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2',
    role: 'Historical V1.1 vesting contract · non-canonical',
    verified: false,
  },
  {
    name: 'VaelorynGenesisAllocator',
    addr: '0xa3eF040471497538a617061FdDEea0CD4C03beBa',
    role: 'Historical V1.1 genesis allocation',
    verified: false,
  },
];

const MILESTONES = [
  'Canonical Protocol Implemented Locally',
  'Canonical Smart Contracts Tested Locally',
  'Canonical Deployment Pending',
  'Historical V1.1 Prototype on Base Sepolia',
  'Canonical Source Verification Pending',
  'Independent Security Review Pending',
  'Targeted Local Test Evidence: 27 Passed',
];

const ALLOCATION = [
  { label: 'Ecosystem & Community',  pct: 30, amount: '300,000,000' },
  { label: 'Public Distribution',    pct: 20, amount: '200,000,000' },
  { label: 'Vaeloryn Treasury',      pct: 20, amount: '200,000,000' },
  { label: 'Team & Contributors',    pct: 15, amount: '150,000,000' },
  { label: 'Founder',                pct: 10, amount: '100,000,000' },
  { label: 'Strategic Partnerships', pct:  5, amount:  '50,000,000' },
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

export function Verify() {
  return (
    <div className="w-full">
      <SEO
        title="Verify Vaeloryn | Protocol Evidence and Transparency"
        description="Verify Vaeloryn protocol claims, token details, testing evidence and historical Base Sepolia records through the public transparency hub and claims."
        canonical="https://vaeloryn.com/verify"
        keywords="verify Vaeloryn, VAELO verification, protocol evidence, Base Sepolia, transparency"
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-30 pointer-events-none -translate-y-1/2" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full w-fit">
              Transparency Hub · Repository Evidence
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Verify
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              This page distinguishes what can be verified in the repository from what can be inspected
              on the historical Base Sepolia V1.1 deployment. The canonical protocol is not yet deployed.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-wide">
                Canonical implementation · <span className="text-primary/90">Not deployed</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Protocol Status ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <SectionHeader eyebrow="Protocol Status" title="Evidence & Pending Gates" />

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MILESTONES.map((m) => (
                <motion.div
                  key={m}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 rounded-lg border border-primary/15 bg-primary/5"
                >
                  <CheckCircle2 size={16} strokeWidth={1.75} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground tracking-wide">{m}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Smart Contracts ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <SectionHeader eyebrow="Smart Contracts" title="Canonical Contracts · Not Deployed" />

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The listed addresses belong to the historical V1.1 testnet prototype, not the canonical implementation.
                The canonical contracts are implemented locally and have not been deployed or source-verified.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {CONTRACTS.map(({ name, addr, role, verified }) => (
                <motion.div
                  key={name}
                  variants={fadeInUp}
                  className="p-5 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={15} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground tracking-wide">{name}</p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{role}</p>
                      </div>
                    </div>
                    {verified && (
                      <span className="text-xs text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full flex-shrink-0">
                         Historical Prototype
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 pl-6">
                    <span className="text-xs font-mono text-muted-foreground/60 break-all">{addr}</span>
                    <a
                      href={`https://sepolia.basescan.org/address/${addr}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary/60 hover:text-primary transition-colors flex-shrink-0"
                    >
                      BaseScan <ExternalLink size={11} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/8 bg-white/[0.015]">
              <p className="text-xs text-muted-foreground/60 leading-relaxed italic">
                These are Base Sepolia V1.1 testnet prototype contracts. They are not the canonical implementation
                or mainnet production contracts. Canonical deployment and source verification remain pending.
                Blockscout links: <a href="https://base-sepolia.blockscout.com" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">base-sepolia.blockscout.com</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Vaeloryn Token ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <SectionHeader eyebrow="Vaeloryn Token" title="VAELO — Token Details" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Token Properties</p>
                <div className="space-y-3">
                  <DataRow label="Name"     value="Vaeloryn" />
                  <DataRow label="Symbol"   value="VAELO" />
                  <DataRow label="Decimals" value="18" />
                  <DataRow label="Standard" value="ERC-20" />
                  <DataRow label="Network"  value="Base Sepolia (Chain ID 84532)" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Capabilities</p>
                <BulletList items={[
                  'ERC-20 standard transfer and approval',
                   'Historical V1.1 ABI does not establish canonical Permit support',
                   'Historical V1.1 ABI does not establish canonical Burnable support',
                  'Full supply verifiable via totalSupply()',
                  'Per-address balance verifiable via balanceOf()',
                ]} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-12"
          >
            <SectionHeader eyebrow="Architecture" title="Constitutional Design" />

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-primary/15 bg-primary/5">
              <p className="text-sm font-display italic text-foreground/90 leading-relaxed">
                "The canonical VaelorynToken design contains no ownership, no administrative privileges, no upgradeability,
                 no minting after deployment, no transfer taxes, no blacklisting, and no freezing.
                 These are locally tested design properties, not claims about the historical deployment."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Cpu size={15} className="text-primary/70" />
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Technical Stack</p>
                </div>
                <BulletList items={[
                  'Solidity 0.8.24',
                  'OpenZeppelin ERC20 base',
                  'OpenZeppelin ERC20Burnable extension',
                  'OpenZeppelin ERC20Permit extension',
                   'Foundry test framework · targeted local evidence',
                ]} />
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Shield size={15} className="text-primary/70" />
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">What is NOT Present</p>
                </div>
                <BulletList items={[
                  'No ownership or admin roles',
                  'No upgradeability',
                  'No minting after deployment',
                  'No transfer taxes or fees',
                  'No blacklisting or address blocking',
                  'No freezing of accounts',
                  'No hidden logic or backdoors',
                ]} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Initial Mint and Supply Mechanics ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
              <SectionHeader eyebrow="Canonical Intended Supply" title="1,000,000,000 VAELO" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">How to Verify</p>
                <BulletList items={[
                   'Review the canonical implementation and local test evidence in the repository.',
                   'The canonical design specifies 1,000,000,000 × 10^18 (accounting for 18 decimals).',
                   'No post-construction minting function exists in the locally tested canonical design.',
                   'Voluntary burns are part of the locally tested canonical design; not yet deployed.',
                ]} />
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Supply Facts</p>
                <div className="space-y-3">
                  <DataRow label="Maximum supply"      value="1,000,000,000 VAELO" />
                  <DataRow label="Minted"              value="Once — at contract construction" />
                  <DataRow label="Minted to"           value="VaelorynGenesisDistribution" />
                  <DataRow label="Post-deployment mint" value="Not possible — no mint function" />
                  <DataRow label="Voluntary burn"       value="Supported — reduces total supply" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Token Allocation ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Token Allocation" title="Constitutional Distribution" />

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-sm text-muted-foreground leading-relaxed">
                 The full supply of 1,000,000,000 VAELO is intended to be allocated atomically at deployment by the
                 VaelorynGenesisDistribution contract.
                The on-chain balance of each allocation address can be independently verified via balanceOf() at any time.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {ALLOCATION.map(({ label, pct, amount }) => (
                <motion.div key={label} variants={fadeInUp} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-foreground/85 tracking-wide">{label}</span>
                    <div className="flex items-baseline gap-2 flex-shrink-0">
                      <span className="text-sm font-medium text-primary/90">{pct}%</span>
                      <span className="text-xs text-muted-foreground/60 font-mono">{amount}</span>
                    </div>
                  </div>
                  <AllocationBar pct={pct} />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                Allocation does not equal circulation. Allocated VAELO may remain locked, reserved, vested or otherwise
                non-circulating for extended periods. Only the Founder allocation currently has an implemented on-chain
                vesting schedule through the FounderVesting contract.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Vesting ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Founder Vesting" title="Canonical Vesting — Local Evidence" />

            <motion.div variants={fadeInUp} className="p-5 rounded-lg border border-primary/15 bg-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The founder allocation is held inside the <span className="text-foreground/90 font-medium">VaelorynFounderVesting</span> contract
                and cannot be freely accessed. The vesting schedule is enforced entirely by smart contract logic —
                no manual override, no admin bypass.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Allocation</p>
                <p className="font-display text-2xl font-light tracking-wide text-foreground">
                  100,000,000 VAELO <span className="text-base text-muted-foreground/60">/ 10%</span>
                </p>
                <div className="space-y-3">
                  <DataRow label="Contract" value="VaelorynFounderVesting" />
                  <DataRow
                    label="Address"
                    value="0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2"
                    mono
                  />
                  <DataRow label="Status" value="Implemented locally · not deployed" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">Vesting Schedule</p>
                <ul className="space-y-4">
                  {[
                    { phase: 'Initial release', amount: '2,500,000 VAELO', desc: 'Claimable at T0, the official launch timestamp.' },
                    { phase: 'Three scheduled releases', amount: '2,500,000 VAELO at +90, +180 and +270 days', desc: 'Exactly three additional releases after the T0 initial release; no fourth release at +360 days.' },
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

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/8 bg-white/[0.015]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                 The canonical vesting schedule is enforced by the locally tested smart contract. It has not been
                 deployed to Base Sepolia. The published address is a historical prototype reference, not the
                 canonical deployment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Genesis Distribution ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Genesis Distribution" title="Constitutional Allocation" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The historical V1.1 VaelorynGenesisAllocator received and distributed the full supply of
                1,000,000,000 VAELO at deployment. Its allocation structure differs from the canonical design
                described elsewhere on this page.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This historical V1.1 distribution occurred in a single on-chain transaction and is recorded on
                Base Sepolia. It is not evidence that the canonical allocation has been deployed.
              </p>
              <div className="space-y-3">
                <DataRow label="Contract"            value="VaelorynGenesisAllocator" />
                <DataRow label="Address"             value="0xa3eF040471497538a617061FdDEea0CD4C03beBa" mono />
                <DataRow label="VAELO received"      value="1,000,000,000" />
                <DataRow label="Allocation verified" value="Historical V1.1 transaction confirmed" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Test Results ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Test Results" title="Recorded Local Evidence" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-primary/15 bg-primary/5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FlaskConical size={18} className="text-primary" />
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/80">Test Suite</p>
                </div>
                <div className="space-y-3">
                  <DataRow label="Framework"    value="Foundry" />
                   <DataRow label="Tests passed" value="32 targeted" />
                  <DataRow label="Tests failed" value="0" />
                   <DataRow label="Result"       value="32 passed · 0 failed · 0 skipped" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70">What the Tests Cover</p>
                <BulletList items={[
                  'Fixed supply enforcement at construction',
                  'Transfer and approval mechanics',
                  'Burn functionality',
                  'Permit (EIP-2612) signatures',
                  'Founder vesting schedule and release logic',
                  'Genesis allocation correctness',
                  'Revert conditions and edge cases',
                  'Constitutional invariants',
                ]} />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-white/8 bg-white/[0.015]">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                The recorded targeted Foundry run covers the canonical unit and invariant test contracts:
                28 tests passed, with 0 failures and 0 skipped. The canonical implementation has not been
                independently audited or deployed. Local tests are evidence of behavior, not an audit opinion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contract Verification ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Contract Verification" title="Canonical Verification Pending" />

            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The canonical implementation has not been deployed or source-verified on Base Sepolia.
                The explorer links below are provided for inspection of the historical V1.1 prototype only;
                they do not verify the canonical production design.
              </p>

              <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 mb-4">Historical Prototype Inspection</p>
                <BulletList items={[
                  'Visit Base Sepolia BaseScan or Blockscout (links above).',
                  'Search for the contract address.',
                  'Navigate to the "Contract" tab.',
                  'Treat any explorer source metadata as historical V1.1 evidence, not canonical verification.',
                  'Compare the ABI and bytecode with the V1.1 prototype if desired.',
                ]} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://sepolia.basescan.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10"
                >
                  Base Sepolia BaseScan <ExternalLink size={13} />
                </a>
                <a
                  href="https://base-sepolia.blockscout.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5"
                >
                  Blockscout (Base Sepolia) <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Deployment ── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-10"
          >
            <SectionHeader eyebrow="Historical Deployment" title="Base Sepolia V1.1 Prototype" />

            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <div className="space-y-4">
                <DataRow label="Network"              value="Base Sepolia Testnet" />
                <DataRow label="Chain ID"             value="84532" />
                <DataRow label="Protocol status"      value="Historical prototype deployed; canonical protocol not deployed" />
                <DataRow label="Mainnet / Production" value="Not launched — pending review" />
                <DataRow label="Public distribution"  value="Not active" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <p className="text-sm text-amber-200/70 leading-relaxed">
                Base Sepolia is an Ethereum Layer 2 testnet. VAELO on Base Sepolia has no monetary value.
                Mainnet deployment and any public real-money VAELO distribution require independent security review,
                legal and regulatory preparation, and further development milestones — none of which are currently complete.
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
            <Lock size={20} className="text-primary/40" />
            <p className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground max-w-2xl italic">
              "Trust through what people can verify — not merely through what we ask them to believe."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/status" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Engineering Dashboard →
              </Link>
              <Link href="/vaelo" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                VAELO Tokenomics →
              </Link>
              <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Trust &amp; Transparency →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
