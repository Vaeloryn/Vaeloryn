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

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col gap-3">
      <span className="font-display text-xs font-light tracking-[0.25em] text-primary/50">{num}</span>
      <h2 className="font-display text-2xl md:text-3xl font-light tracking-[0.1em] uppercase text-foreground/90">{title}</h2>
      <div className="w-8 h-px bg-primary/40" />
    </motion.div>
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

function RiskBlock({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col gap-5 p-6 rounded-lg border border-white/8 bg-white/[0.02]"
    >
      <SectionHeader num={num} title={title} />
      <div className="flex flex-col gap-4">{children}</div>
    </motion.div>
  );
}

export function Risks() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn & VAELO Risks | Technical and Project Disclosure"
        description="Understand the technical, regulatory, economic and execution risks of Vaeloryn and VAELO before evaluating this early-stage innovation ecosystem."
        canonical="https://vaeloryn.com/risks"
        keywords="Vaeloryn risks, VAELO risks, technical disclosure, regulatory risk, project transparency"
      />

      {/* ── Page Header ── */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground border border-white/15 bg-white/5 px-3 py-1.5 rounded-full w-fit">
              Important Disclosures · Early-Stage Project
            </motion.span>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-foreground">
              Risks
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-px bg-primary/60" />

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Understand the technical, regulatory, economic, market and execution risks associated with an early-stage project such as Vaeloryn and VAELO.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/70 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                No part of this site constitutes financial or legal advice
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Early-Stage Notice ── */}
      <section className="py-12 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start p-6 rounded-lg border border-amber-500/20 bg-amber-500/5"
          >
            <div className="mt-1 w-4 h-4 rounded-full border border-amber-400/50 flex-shrink-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium tracking-wide text-amber-300/90">
                Vaeloryn and VAELO are early-stage and experimental.
              </p>
              <div className="space-y-1.5 text-sm text-amber-200/65 leading-relaxed">
                <p>VAELO currently exists as a Base Sepolia testnet prototype only. Production/mainnet VAELO has not been launched.</p>
                <p>No active public real-money VAELO distribution currently exists.</p>
                <p>The project's architecture, tokenomics, roadmap and organisational structure may change as development progresses and professional guidance is obtained.</p>
              </div>
              <p className="text-xs text-amber-200/45 italic pt-1 border-t border-amber-500/10">
                This is a general public risk disclosure for an early-stage project. It is not a substitute for any disclosures, documentation or warnings that may later be required following professional legal or regulatory review.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Risk Categories ── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-2 mb-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/70">Risk Disclosure</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-foreground">Risk Categories</h2>
              <div className="w-10 h-px bg-primary/60" />
            </motion.div>

            {/* 01 */}
            <RiskBlock num="01" title="Early-Stage & Execution Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vaeloryn is at an early stage of development. There is no guarantee that:
              </p>
              <BulletList items={[
                'Planned milestones will be achieved.',
                'The first flagship project will succeed.',
                'Future products will generate revenue.',
                'The roadmap will proceed as currently proposed.',
                'Vaeloryn will obtain sufficient funding or resources.',
                'The project will achieve widespread adoption.',
              ]} />
            </RiskBlock>

            {/* 02 */}
            <RiskBlock num="02" title="VAELO & Digital-Asset Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Digital assets can be highly volatile and uncertain. There is no guarantee that VAELO will:
              </p>
              <BulletList items={[
                'Have monetary value.',
                'Increase in value.',
                'Maintain any particular value.',
                'Have sufficient liquidity.',
                'Be listed on any exchange.',
                'Be accepted by third parties.',
                'Develop the utility currently envisioned.',
              ]} />
              <div className="p-4 rounded-md border border-white/8 bg-white/[0.02]">
                <p className="text-sm text-muted-foreground/80 italic leading-relaxed">
                  No person should interpret Vaeloryn's roadmap, tokenomics or public communications as a guarantee of financial return.
                </p>
              </div>
            </RiskBlock>

            {/* 03 */}
            <RiskBlock num="03" title="Regulatory & Legal Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Laws and regulations relating to crypto assets, digital assets, fundraising and financial services continue to evolve across jurisdictions.
                Future regulatory requirements could:
              </p>
              <BulletList items={[
                'Restrict certain activities.',
                'Require licensing or registration.',
                'Require KYC/AML or other compliance systems.',
                'Restrict participation from certain jurisdictions.',
                'Change how VAELO may be distributed, marketed or used.',
                'Require changes to the project\'s structure.',
              ]} />
              <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                Appropriate professional legal and regulatory review remains pending.
              </p>
            </RiskBlock>

            {/* 04 */}
            <RiskBlock num="04" title="Smart-Contract & Cybersecurity Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Blockchain systems and smart contracts may contain risks including:
              </p>
              <BulletList items={[
                'Software vulnerabilities.',
                'Coding errors.',
                'Exploitable logic.',
                'Infrastructure failures.',
                'Wallet or private-key compromise.',
                'Third-party dependency failures.',
                'Network-level risks.',
              ]} />
              <div className="p-4 rounded-md border border-white/8 bg-white/[0.02] space-y-1.5">
                <p className="text-sm text-muted-foreground/80 leading-relaxed">The current V1.1 contracts are testnet prototypes.</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Source verification does not constitute a security audit.</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Independent production security review has not yet been completed.</p>
              </div>
            </RiskBlock>

            {/* 05 */}
            <RiskBlock num="05" title="Custody & Key-Management Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Loss, theft or compromise of private keys can result in irreversible loss of digital assets.
                Vaeloryn intends to develop appropriate production safeguards such as multisignature custody, separation of powers and operational redundancy.
              </p>
              <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                These are proposed production safeguards and are not guarantees against all loss or compromise.
              </p>
            </RiskBlock>

            {/* 06 */}
            <RiskBlock num="06" title="Token Supply & Holder Behaviour Risk">
              <BulletList items={[
                'Even with vesting, treasury controls and supply safeguards, Vaeloryn cannot prevent independent holders from selling VAELO they lawfully control.',
                'Large market participants may affect price and liquidity.',
                'Anti-concentration measures may have practical and technical limitations.',
                'No system can guarantee that VAELO\'s market price will remain stable.',
              ]} />
            </RiskBlock>

            {/* 07 */}
            <RiskBlock num="07" title="Liquidity Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                There is no guarantee that a liquid market for VAELO will exist. A holder may be unable to sell VAELO at a desired time or price.
                No exchange listing is planned or guaranteed.
              </p>
            </RiskBlock>

            {/* 08 */}
            <RiskBlock num="08" title="Tokenomics & Economic-Design Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The current tokenomics are working proposals. Economic assumptions may prove incorrect.
                Allocation, vesting, distribution and utility mechanisms may require changes following:
              </p>
              <BulletList items={[
                'Economic analysis.',
                'Technical development.',
                'Legal or regulatory review.',
                'Security review.',
                'Real-world market conditions.',
              ]} />
            </RiskBlock>

            {/* 09 */}
            <RiskBlock num="09" title="Treasury & Governance Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Treasury and governance systems may face:
              </p>
              <BulletList items={[
                'Human error.',
                'Signer compromise.',
                'Governance disputes.',
                'Operational failures.',
                'Conflicts of interest.',
              ]} />
              <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                Proposed safeguards aim to reduce these risks but cannot eliminate them.
              </p>
            </RiskBlock>

            {/* 10 */}
            <RiskBlock num="10" title="Third-Party & Blockchain Infrastructure Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vaeloryn may depend on third-party technologies and blockchain infrastructure.
                Failures, outages, protocol changes or security incidents affecting external systems may affect Vaeloryn or VAELO.
              </p>
            </RiskBlock>

            {/* 11 */}
            <RiskBlock num="11" title="Tax Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Holding, receiving, transferring or disposing of digital assets may have tax consequences depending on the participant's jurisdiction and circumstances.
                Vaeloryn does not provide personal tax advice. Participants should obtain appropriate professional advice where necessary.
              </p>
            </RiskBlock>

            {/* 12 */}
            <RiskBlock num="12" title="Future Project & Investment Risk">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vaeloryn's long-term vision may include building, supporting or selectively investing in projects.
                Any future project or investment may fail, lose money, take longer than expected or not produce anticipated results.
              </p>
              <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                Ownership of VAELO does not automatically provide ownership, equity, profit rights or claims over Vaeloryn or any projects supported by Vaeloryn.
              </p>
            </RiskBlock>
          </motion.div>
        </div>
      </section>

      {/* ── Important Distinction ── */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-white/[0.015]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <p className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground italic">
              "Transparency about risk does not eliminate risk."
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vaeloryn's approach to transparency, vesting, supply protection and governance is intended to reduce avoidable risks where possible.
              It cannot guarantee:
            </p>
            <BulletList items={[
              'Project success.',
              'Token value.',
              'Liquidity.',
              'Regulatory approval.',
              'Security.',
              'Financial returns.',
            ]} />
          </motion.div>
        </div>
      </section>

      {/* ── Professional Review Notice ── */}
      <section className="py-16 md:py-20 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg border border-white/8 bg-white/[0.02] flex flex-col gap-3 max-w-3xl"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary/60 mb-1">Professional Review Notice</p>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>This public risk disclosure is an early-stage project document. It has not been represented as a professionally approved legal offering document.</p>
              <p>It may be updated as Vaeloryn receives appropriate legal, regulatory, tax, economic and security guidance.</p>
              <p>Any future regulated activity or real-money public distribution must be subject to the appropriate requirements identified through professional review.</p>
            </div>
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
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            <p className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
              Understand the risks. Verify the progress. Make independent decisions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-2">
              <Link href="/status" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Project Status →
              </Link>
              <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Trust &amp; Transparency →
              </Link>
              <Link href="/vaelo" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                VAELO →
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
