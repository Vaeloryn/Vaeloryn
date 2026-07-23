import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Clock, Minus } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

type StatusKind = 'achieved' | 'inactive' | 'pending';

const statusItems: { label: string; value: string; kind: StatusKind; note?: string }[] = [
  { label: "Current Phase",                  value: "Stage A — Foundation",        kind: "achieved"  },
  { label: "Testnet Contracts",              value: "Deployed & source-verified",   kind: "achieved",  note: "Base Sepolia · Three contracts · Source-verified on BaseScan" },
  { label: "VAELO Network",                  value: "Base Sepolia Testnet",         kind: "achieved"  },
  { label: "Production / Mainnet",           value: "Not launched",                 kind: "inactive"  },
  { label: "Public VAELO Distribution",      value: "Not active",                   kind: "inactive",  note: "No public sale, no token distribution is currently active" },
  { label: "Independent Security Review",    value: "Pending",                      kind: "pending"   },
  { label: "Legal / Regulatory Review",      value: "Pending",                      kind: "pending"   },
  { label: "First Flagship Project",         value: "Selection pending",            kind: "pending"   },
];

function StatusIcon({ kind }: { kind: StatusKind }) {
  if (kind === 'achieved') return <CheckCircle2 size={16} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />;
  if (kind === 'inactive') return <Minus size={16} strokeWidth={2} className="text-muted-foreground/50 shrink-0 mt-0.5" />;
  return <Clock size={16} strokeWidth={1.75} className="text-muted-foreground/60 shrink-0 mt-0.5" />;
}

export function Status() {
  return (
    <div className="w-full">
      <SEO
        title="Project Status — Vaeloryn | Stage A Foundation"
        description="See what Vaeloryn has completed, what is currently being developed and what remains proposed or pending."
      />

      {/* Page Header */}
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

      {/* Status Grid */}
      <section className="py-24 md:py-32">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {statusItems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="bg-white/[0.025] border-white/5 hover:border-white/10 transition-colors duration-300">
                    <CardContent className="px-5 py-4 flex items-start gap-3">
                      <StatusIcon kind={item.kind} />
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-xs text-muted-foreground tracking-wide uppercase">{item.label}</span>
                        <span className={`text-sm font-medium leading-snug ${item.kind === 'achieved' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.value}
                        </span>
                        {item.note && (
                          <span className="text-xs text-muted-foreground/60 leading-relaxed">{item.note}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xs text-muted-foreground/60 leading-relaxed border-l border-white/10 pl-4 max-w-2xl italic">
                The VAELO testnet prototype exists solely for development and testing purposes. It does not represent a launched product, a public offering, or financial advice. Mainnet launch and any public distribution are subject to independent security review, legal and regulatory analysis, and further development milestones.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/roadmap" className="text-sm text-primary/80 hover:text-primary transition-colors tracking-wide border border-primary/20 hover:border-primary/40 px-5 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 w-fit">
                View Roadmap →
              </Link>
              <Link href="/transparency" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/5 w-fit">
                Trust &amp; Transparency →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
