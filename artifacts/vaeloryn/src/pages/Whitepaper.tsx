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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const TOC = [
  { num: '01', title: 'Executive Summary' },
  { num: '02', title: 'The Vaeloryn Vision' },
  { num: '03', title: 'Core Development Philosophy' },
  { num: '04', title: 'What Is VAELO?' },
  { num: '05', title: 'Current Testnet Development' },
  { num: '06', title: 'Canonical Tokenomics' },
  { num: '07', title: 'Stage A Funding Direction' },
  { num: '08', title: 'Trust, Transparency & Supply Protection' },
  { num: '09', title: 'Contribution & Community' },
  { num: '10', title: 'Roadmap' },
  { num: '11', title: 'Legal & Regulatory Approach' },
  { num: '12', title: 'Risk' },
  { num: '13', title: 'Current Project Status' },
  { num: '14', title: 'Closing' },
];

function WpSection({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      className="flex flex-col gap-6 py-14 border-b border-white/5 scroll-mt-24"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-display text-xs font-light tracking-[0.3em] text-primary/45 flex-shrink-0">{num}</span>
        <h2 className="font-display text-2xl md:text-3xl font-light tracking-[0.1em] uppercase text-foreground/90">{title}</h2>
      </div>
      <div className="pl-0 md:pl-10 flex flex-col gap-5">{children}</div>
    </motion.section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
          <span className="text-primary/40 mt-0.5 flex-shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <p className="font-display text-base md:text-lg font-light tracking-wide text-primary/90 italic border-l-2 border-primary/30 pl-4">
      {text}
    </p>
  );
}

function NavButton({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <Link
      href={href}
      className={primary
        ? 'text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit'
        : 'text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit'}
    >
      {label} →
    </Link>
  );
}

export function Whitepaper() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn & VAELO Whitepaper | Public Project Draft"
        description="Read the public Vaeloryn and VAELO whitepaper covering the ecosystem vision, scientific innovation model, protocol architecture, roadmap and risks."
        canonical="https://vaeloryn.com/whitepaper"
        keywords="Vaeloryn whitepaper, VAELO, scientific innovation, protocol architecture, ecosystem roadmap"
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
              Public Draft · Working Document
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              White Paper
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Read the current public draft of the Vaeloryn &amp; VAELO White Paper. This document describes our developing vision, architecture and working economic model.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full">
                Draft V1.0
              </span>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                Early-Stage · Pre-Professional Review
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Draft Notice ── */}
      <section className="py-10 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start p-5 rounded-lg border border-primary/20 bg-primary/5"
          >
            <div className="mt-0.5 w-4 h-4 rounded-full border border-primary/60 flex-shrink-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
            </div>
            <div className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                This White Paper is a <span className="text-foreground/80">working public draft</span> describing Vaeloryn's current vision, proposed architecture and working economic model.
              </p>
              <p>It is not a guarantee of future implementation or outcomes.</p>
              <p>The project remains subject to technical development and appropriate professional legal, regulatory, tax, economic and security review.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Table of Contents ── */}
      <section className="py-14 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary/60">Contents</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {TOC.map(({ num, title }) => (
                <a
                  key={num}
                  href={`#section-${num}`}
                  className="flex items-baseline gap-3 py-2 px-3 rounded-md hover:bg-white/[0.04] transition-colors group"
                >
                  <span className="font-display text-xs text-primary/40 tracking-widest flex-shrink-0 group-hover:text-primary/60 transition-colors">{num}</span>
                  <span className="text-sm text-muted-foreground/70 group-hover:text-foreground/80 transition-colors">{title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── White Paper Body ── */}
      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >

          {/* 01 */}
          <WpSection id="section-01" num="01" title="Executive Summary">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn is an early-stage, South African-founded technology and innovation project with global ambitions.
              Its long-term vision is to build, support and collaborate around meaningful real-world projects in science and technology.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VAELO is being developed as a potential native digital asset within the evolving Vaeloryn ecosystem.
            </p>
            <div className="p-5 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/60">Current Phase</p>
              <p className="font-display text-lg font-light tracking-wide text-foreground">Stage A — Foundation</p>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <p>VAELO currently exists as a Base Sepolia testnet prototype.</p>
                <p>Production/mainnet VAELO has not been launched.</p>
                <p>No active public real-money VAELO distribution currently exists.</p>
              </div>
            </div>
          </WpSection>

          {/* 02 */}
          <WpSection id="section-02" num="02" title="The Vaeloryn Vision">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn aims to develop an ecosystem capable of:
            </p>
            <BulletList items={[
              'Building internal technology and science projects.',
              'Supporting promising ideas and contributors.',
              'Developing strategic partnerships.',
              'Potentially making selective strategic investments in the future.',
              'Building sustainable products and organisations around real-world value.',
            ]} />
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/60">Long-Term Fields of Interest</p>
              <div className="flex flex-wrap gap-2">
                {['Energy', 'Artificial Intelligence', 'Medical Science', 'Biotechnology', 'Aerospace', 'Robotics', 'Advanced Engineering'].map((f) => (
                  <span key={f} className="text-xs text-muted-foreground/60 border border-white/8 bg-white/[0.02] px-3 py-1.5 rounded-full tracking-wide">{f}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/45 italic">
                These are long-term areas of interest and not commitments to launch specific businesses.
              </p>
            </div>
            <Quote text='"Born in South Africa. Built for a global future."' />
          </WpSection>

          {/* 03 */}
          <WpSection id="section-03" num="03" title="Core Development Philosophy">
            <Quote text='"Utility follows products."' />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn does not intend to force VAELO into products merely to manufacture token demand.
              The priority is to build useful products, services and ecosystem activity first.
              VAELO utility should develop where the digital asset provides genuine functional value.
            </p>
          </WpSection>

          {/* 04 */}
          <WpSection id="section-04" num="04" title="What Is VAELO?">
            <p className="text-sm text-muted-foreground leading-relaxed">
              VAELO is the developing digital asset of the Vaeloryn ecosystem.
              Its potential long-term roles may evolve alongside actual Vaeloryn products and ecosystem activity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { k: 'Network',               v: 'Base Sepolia Testnet', hi: true },
                { k: 'Chain ID',              v: '84532' },
                { k: 'Prototype',             v: 'V1.1' },
                { k: 'Production / Mainnet',  v: 'Not launched' },
                { k: 'Public Distribution',   v: 'Not active' },
              ].map(({ k, v, hi }) => (
                <div key={k} className="flex justify-between items-center gap-4 text-sm p-3 rounded-md border border-white/8 bg-white/[0.02]">
                  <span className="text-muted-foreground/60">{k}</span>
                  <span className={hi ? 'text-primary/90 font-medium' : 'text-muted-foreground/80'}>{v}</span>
                </div>
              ))}
            </div>
            <NavButton href="/vaelo" label="Explore VAELO & Tokenomics" primary />
          </WpSection>

          {/* 05 */}
          <WpSection id="section-05" num="05" title="Current Testnet Development">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Three historical V1.1 prototype contracts are currently deployed and source-verified on Base Sepolia.
              Explorer source verification is not an independent security audit and does not establish the canonical
              production deployment.
              A controlled 100 VAELO wallet-to-wallet test transfer has been completed successfully.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { name: 'VaelorynToken',            addr: '0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c' },
                { name: 'VaelorynFounderVesting',   addr: '0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2' },
                { name: 'VaelorynGenesisAllocator (historical V1.1)', addr: '0xa3eF040471497538a617061FdDEea0CD4C03beBa' },
              ].map(({ name, addr }) => (
                <div key={name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-md border border-white/8 bg-white/[0.02]">
                  <span className="text-sm font-medium text-foreground/85 tracking-wide">{name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground/55 break-all">{addr}</span>
                    <span className="text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full flex-shrink-0">Source verified · testnet</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-md border border-white/8 bg-white/[0.02] space-y-1.5 text-xs text-muted-foreground/60 italic">
              <p>These are prototype contracts — not final production contracts.</p>
              <p>Source verification does not constitute an independent security audit.</p>
              <p>The V1.1 prototype is not the final production/mainnet architecture.</p>
            </div>
          </WpSection>

          {/* 06 */}
          <WpSection id="section-06" num="06" title="Canonical Tokenomics">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary/70 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full">Finalized Canonical Allocation</span>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">Pre-Deployment · Pre-Professional Review</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-1">Initial Minted Supply</p>
              <p className="font-display text-2xl font-light tracking-wider text-primary">1,000,000,000 <span className="text-base text-primary/60">VAELO</span></p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { pct: '30%', label: 'Ecosystem & Community' },
                { pct: '20%', label: 'Public Distribution' },
                { pct: '20%', label: 'Vaeloryn Treasury' },
                { pct: '15%', label: 'Team & Contributors' },
                { pct: '10%', label: 'Founder' },
                { pct:  '5%', label: 'Strategic Partnerships' },
              ].map(({ pct, label }) => (
                <div key={label} className="flex items-center gap-4 text-sm">
                  <span className="w-10 text-right font-medium text-primary/80 flex-shrink-0">{pct}</span>
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
            <Quote text='"Allocation does not equal circulation."' />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Allocated VAELO may remain locked, reserved, vested or otherwise non-circulating.
              The canonical design mints 1,000,000,000 VAELO once and exposes no additional mint path.
              Voluntary burns may reduce totalSupply() after deployment.
            </p>
            <NavButton href="/vaelo" label="View Full Tokenomics" primary />
          </WpSection>

          {/* 07 */}
          <WpSection id="section-07" num="07" title="Stage A Funding Direction">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn is exploring whether a limited future Stage A VAELO distribution could serve as one possible
              funding mechanism for early professional, technical and organisational development.
              The current working tokenomics designate <span className="text-foreground/80">up to 10,000,000 VAELO</span> as potentially eligible
              for Stage A / early community distribution.
            </p>
            <div className="p-5 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2 text-sm text-amber-200/65 leading-relaxed">
              <p>This does not represent a commitment to distribute or sell the full amount.</p>
              <p>No token price has been finalised or published.</p>
              <p>No active public real-money VAELO distribution currently exists.</p>
              <p>Any future distribution remains subject to appropriate legal, regulatory, technical and security preparation.</p>
            </div>
          </WpSection>

          {/* 08 */}
          <WpSection id="section-08" num="08" title="Trust, Transparency & Supply Protection">
            <Quote text='"Trust through verifiable architecture, not promises."' />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The intended production direction includes:
            </p>
            <BulletList items={[
              'On-chain vesting.',
              'Appropriate multisignature custody for major reserves.',
              'Separation of powers.',
              'Timelocks for sensitive actions where appropriate.',
              'Public supply verification.',
              'Transparency around material token movements.',
              'Operational redundancy.',
              'Appropriate independent security review.',
            ]} />
            <div className="p-5 rounded-lg border border-primary/20 bg-primary/5">
              <p className="text-sm text-foreground/85 leading-relaxed font-display font-light italic">
                "No single founder, developer, employee or private key should have unilateral technical authority
                to move or release a systemically significant proportion of VAELO's reserved supply."
              </p>
            </div>
            <p className="text-sm text-muted-foreground/60 italic leading-relaxed">
              These are intended production safeguards and are not all implemented in the current testnet prototype.
            </p>
            <NavButton href="/transparency" label="Read Trust & Transparency Framework" primary />
          </WpSection>

          {/* 09 */}
          <WpSection id="section-09" num="09" title="Contribution & Community">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn intends to invite participation from people with relevant expertise, potentially including:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Developers', 'Engineers', 'Scientists', 'Researchers', 'Lawyers', 'Security Professionals', 'Entrepreneurs', 'Designers', 'Other Specialists'].map((r) => (
                <span key={r} className="text-xs text-muted-foreground/60 border border-white/8 bg-white/[0.02] px-3 py-1.5 rounded-full tracking-wide">{r}</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Future Contribution Rewards, if implemented, should distribute VAELO from an existing allocated pool
              rather than create new supply. Any reward system remains subject to appropriate governance and legal review.
            </p>
            <NavButton href="/help-build" label="Help Build Vaeloryn" primary />
          </WpSection>

          {/* 10 */}
          <WpSection id="section-10" num="10" title="Roadmap">
            <div className="flex flex-col gap-3">
              {[
                { stage: 'Stage A', label: 'Foundation',       desc: 'Current phase.',                                                                             active: true },
                { stage: 'Stage B', label: 'Execution',        desc: 'Potential future focus on launching and demonstrating the first real Vaeloryn project.',      active: false },
                { stage: 'Stage C', label: 'Expansion',        desc: 'Potential future expansion of successful projects, partnerships and ecosystem activity.',      active: false },
                { stage: 'Stage D', label: 'Global Ecosystem', desc: 'Long-term vision of a globally connected innovation ecosystem.',                              active: false },
              ].map(({ stage, label, desc, active }) => (
                <div key={stage} className={`flex gap-4 p-4 rounded-md border ${active ? 'border-primary/25 bg-primary/5' : 'border-white/8 bg-white/[0.02]'}`}>
                  <div className="flex flex-col gap-0.5 min-w-[90px]">
                    <span className={`text-xs font-medium tracking-widest uppercase ${active ? 'text-primary/80' : 'text-muted-foreground/40'}`}>{stage}</span>
                    <span className={`text-sm font-light ${active ? 'text-foreground/90' : 'text-muted-foreground/50'}`}>{label}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${active ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
              Progression is milestone-gated, not simply calendar-gated. Future stages and outcomes are not guaranteed.
            </p>
            <NavButton href="/roadmap" label="View Full Roadmap" primary />
          </WpSection>

          {/* 11 */}
          <WpSection id="section-11" num="11" title="Legal & Regulatory Approach">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn intends to progress cautiously through relevant legal and regulatory gates.
              Before activating any real-money public VAELO distribution, the project intends to obtain appropriate professional guidance regarding matters such as:
            </p>
            <BulletList items={[
              'Entity and issuer structure.',
              'Applicable regulatory requirements.',
              'Licensing or registration requirements.',
              'KYC/AML and sanctions obligations.',
              'Participant and jurisdiction restrictions.',
              'Marketing and disclosure requirements.',
              'Tax, accounting, banking and custody considerations.',
            ]} />
            <Quote text='"If a required legal or regulatory gate cannot yet be cleared, the regulated activity should not proceed."' />
            <p className="text-sm text-muted-foreground/60 italic leading-relaxed">
              Professional legal and regulatory review remains pending.
            </p>
          </WpSection>

          {/* 12 */}
          <WpSection id="section-12" num="12" title="Risk">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn and VAELO involve significant early-stage risks including:
            </p>
            <BulletList items={[
              'Execution risk.',
              'Digital-asset and market risk.',
              'Regulatory risk.',
              'Smart-contract and cybersecurity risk.',
              'Custody risk.',
              'Liquidity risk.',
              'Tokenomics risk.',
              'Governance risk.',
              'Third-party infrastructure risk.',
            ]} />
            <Quote text='"Transparency about risk does not eliminate risk."' />
            <NavButton href="/risks" label="Read Full Risk Disclosure" primary />
          </WpSection>

          {/* 13 */}
          <WpSection id="section-13" num="13" title="Current Project Status">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn intends to maintain a clear public distinction between what is completed, in progress, pending and proposed — so visitors always have an accurate view of the project's actual development state.
            </p>
            <NavButton href="/status" label="View Current Project Status" primary />
          </WpSection>

          {/* 14 */}
          <WpSection id="section-14" num="14" title="Closing">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn is at the beginning of its development.
              The objective of Stage A is not to pretend that the final ecosystem already exists.
              It is to build the foundations openly, demonstrate progress, invite scrutiny and earn trust through execution.
            </p>
            <Quote text='"Show the work before asking for trust."' />
            <p className="font-display text-lg font-light tracking-[0.1em] uppercase text-foreground mt-2">
              Born in South Africa. Built for a global future.
            </p>
          </WpSection>

        </motion.div>
      </div>

      {/* ── Footer Navigation ── */}
      <section className="py-20 border-t border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary/60">Explore Further</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <NavButton href="/vaelo"        label="VAELO"               primary />
              <NavButton href="/status"       label="Project Status"      />
              <NavButton href="/transparency" label="Trust & Transparency" />
              <NavButton href="/roadmap"      label="Roadmap"             />
              <NavButton href="/risks"        label="Risk Disclosure"     />
              <NavButton href="/help-build"   label="Help Build Vaeloryn" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
