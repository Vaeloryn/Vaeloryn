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

export function Risks() {
  return (
    <div className="w-full">
      <SEO
        title="Risks — Vaeloryn & VAELO | Important Disclosures"
        description="Understand the technical, regulatory, economic, market and execution risks associated with an early-stage project such as Vaeloryn and VAELO."
      />

      {/* Page Header */}
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

      {/* Content Placeholder */}
      <section className="py-24 md:py-40">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="space-y-3 max-w-xl">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A comprehensive risk disclosure document — covering technical, regulatory, economic, market and execution risks — is being prepared and will be published here.
              </p>
              <p className="text-sm text-muted-foreground/60 italic">
                Vaeloryn and VAELO are early-stage. No independent security, legal or regulatory review has been completed. Do not make financial decisions based on this project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/transparency" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10">
                Trust &amp; Transparency →
              </Link>
              <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5">
                Project Status →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
