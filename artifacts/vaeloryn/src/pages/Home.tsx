import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import {
  Dna, Zap, Atom, Cpu, Bot, Rocket,
  Layers, Droplet, Globe, Sparkles,
  CheckCircle2, Clock, Minus,
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const areas = [
  { name: "Medical Science & Biotechnology", icon: Dna, desc: "Advancing human health and expanding the limits of biology." },
  { name: "Energy", icon: Zap, desc: "Next-generation generation, storage, and distribution." },
  { name: "Fundamental Science", icon: Atom, desc: "Expanding the boundaries of human knowledge." },
  { name: "AI & Computing", icon: Cpu, desc: "Pushing the frontiers of intelligence and processing." },
  { name: "Engineering & Robotics", icon: Bot, desc: "Building the physical infrastructure of the future." },
  { name: "Aerospace & Space", icon: Rocket, desc: "Exploring the cosmos and redefining atmospheric flight." },
  { name: "Advanced Materials", icon: Layers, desc: "Engineering the building blocks of tomorrow's technology." },
  { name: "Water & Agriculture", icon: Droplet, desc: "Ensuring abundance and sustainability of resources." },
  { name: "Climate & Environment", icon: Globe, desc: "Protecting and restoring planetary ecosystems." },
  { name: "Frontier Technologies", icon: Sparkles, desc: "Emerging fields with transformative potential." },
];

const principles = [
  "Scientific integrity",
  "Expert-led decision-making",
  "Responsible risk-taking",
  "Transparency and accountability",
  "Independence",
  "Long-term thinking",
  "Capital serving its intended purpose",
  "Success creating future opportunity",
  "South African-founded, globally focused"
];

const bridgeSteps = [
  { step: 1, title: "Discover", desc: "Find exceptional people and ideas." },
  { step: 2, title: "Understand", desc: "Identify what is preventing progress." },
  { step: 3, title: "Evaluate", desc: "Bring in appropriate expertise." },
  { step: 4, title: "Connect", desc: "Find the right people, institutions, expertise or capital." },
  { step: 5, title: "Support", desc: "Help promising ideas reach their next meaningful milestone." },
  { step: 6, title: "Track", desc: "Stay connected to progress." },
  { step: 7, title: "Scale", desc: "Help successful ideas reach greater impact." },
];

type StatusKind = 'achieved' | 'inactive' | 'pending';

const statusItems: { label: string; value: string; kind: StatusKind }[] = [
  { label: "Testnet Contracts",              value: "Deployed & source-verified",  kind: "achieved"  },
  { label: "VAELO Network",                  value: "Base Sepolia Testnet",         kind: "achieved"  },
  { label: "Production / Mainnet",           value: "Not launched",                 kind: "inactive"  },
  { label: "Public VAELO Distribution",      value: "Not active",                   kind: "inactive"  },
  { label: "Independent Security Review",    value: "Pending",                      kind: "pending"   },
  { label: "Legal / Regulatory Review",      value: "Pending",                      kind: "pending"   },
  { label: "First Flagship Project",         value: "Selection pending",            kind: "pending"   },
];

function StatusIcon({ kind }: { kind: StatusKind }) {
  if (kind === 'achieved') {
    return <CheckCircle2 size={16} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />;
  }
  if (kind === 'inactive') {
    return <Minus size={16} strokeWidth={2} className="text-muted-foreground/50 shrink-0 mt-0.5" />;
  }
  return <Clock size={16} strokeWidth={1.75} className="text-muted-foreground/60 shrink-0 mt-0.5" />;
}

export function Home() {
  return (
    <div className="w-full">
      <SEO
        title="VAELORYN — Born in South Africa. Built for a global future. | Scientific and technological progress"
        description="Vaeloryn is a South African-founded ecosystem exploring how technology, innovation and long-term thinking can support real-world scientific, medical and technological progress — starting in South Africa, with ambitions that extend beyond borders."
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract glowing orb in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="container px-6 relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center gap-8">
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] uppercase text-foreground">
              Vaeloryn
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />

            <motion.h2 variants={fadeInUp} className="text-xl md:text-3xl font-display font-light text-foreground/90 tracking-wide">
              Born in South Africa. Built for a global future.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 max-w-2xl mt-4">
              <p className="text-lg md:text-xl font-medium text-primary tracking-wide">
                South African-founded. Globally focused.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Vaeloryn is an early-stage project being developed to help accelerate scientific, medical and technological progress by connecting exceptional people and ideas with the expertise, resources and opportunities required to move forward.
              </p>
            </motion.div>

            {/* Three primary CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12 w-full sm:w-auto">
              <Link
                href="/#mission"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-14 px-8 text-base font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore Vaeloryn
              </Link>
              <Link
                href="/#progress"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-14 px-8 text-base font-medium tracking-wide border border-primary/40 hover:border-primary/70 bg-primary/10 hover:bg-primary/15 text-primary transition-all backdrop-blur-sm"
              >
                View Our Progress
              </Link>
              <Link
                href="/help-build"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-14 px-8 text-base font-medium tracking-wide border border-white/10 hover:border-white/20 hover:bg-white/5 text-foreground transition-all"
              >
                Help Build Vaeloryn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Project Status */}
      <section id="progress" className="py-24 md:py-32 border-t border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full">
                  Stage A — Foundation
                </span>
                <span className="text-xs text-muted-foreground tracking-wide">Current Phase</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-foreground">
                Project Status
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Vaeloryn is in active early-stage development. The VAELO token prototype is live on the Base Sepolia testnet. No public token sale, mainnet launch, or flagship project has occurred. The items below reflect what has been achieved and what remains ahead.
              </p>
            </motion.div>

            {/* Status grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {statusItems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="bg-white/[0.025] border-white/5 hover:border-white/10 transition-colors duration-300">
                    <CardContent className="px-5 py-4 flex items-start gap-3">
                      <StatusIcon kind={item.kind} />
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-xs text-muted-foreground tracking-wide uppercase">{item.label}</span>
                        <span className={`text-sm font-medium leading-snug ${
                          item.kind === 'achieved'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}>
                          {item.value}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer note */}
            <motion.div variants={fadeInUp}>
              <p className="text-xs text-muted-foreground/60 leading-relaxed border-l border-white/10 pl-4 max-w-2xl italic">
                The VAELO testnet prototype exists solely for development and testing purposes. It does not represent a launched product, a public offering, or financial advice. Mainnet launch and any public distribution are subject to independent security review, legal and regulatory analysis, and further development milestones.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Mission */}
      <section id="mission" className="py-24 md:py-32 border-t border-white/5 bg-black/20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-6 max-w-3xl mx-auto">
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vaeloryn is a South African-founded ecosystem exploring how technology, innovation and long-term thinking can support real-world progress. South Africa is our home and foundation — and our ambition extends beyond borders, building, supporting and collaborating with projects, technologies and people that can help shape the future.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                Not every project needs to become a company. Fundamental scientific and medical research can have enormous value without immediate commercial returns.
              </p>
            </motion.div>

            {/* Pipeline Visual */}
            <motion.div variants={fadeInUp} className="relative py-12">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden lg:block" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:justify-between gap-6 relative z-10">
                {["Idea", "Research", "Validation", "Prototype", "Commercialisation", "Scale", "Reinvestment"].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 group">
                    <div className="w-16 h-16 rounded-full bg-background border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="font-display font-medium text-sm text-foreground/80 group-hover:text-primary transition-colors">{i + 1}</span>
                    </div>
                    <span className="font-medium text-sm tracking-wide text-muted-foreground text-center group-hover:text-foreground transition-colors">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Areas of Progress */}
      <section id="areas" className="py-24 md:py-40">
        <div className="container px-6 max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-foreground mb-6">Areas of Progress</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vaeloryn seeks to accelerate development across disciplines that define the future.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {areas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="bg-white/[0.02] border-white/5 hover:border-primary/30 transition-all duration-300 h-full group hover:bg-white/[0.04]">
                      <CardContent className="p-6 flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-primary/20 transition-colors text-primary">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-display font-medium text-lg leading-tight group-hover:text-primary transition-colors">{area.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Vaeloryn Bridge */}
      <section className="py-24 md:py-40 border-y border-white/5 bg-black/20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="space-y-8 sticky top-32">
              <h3 className="font-display text-3xl md:text-5xl font-light tracking-wider uppercase text-foreground">
                The Vaeloryn<br/><span className="text-primary">Bridge</span>
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  This framework is still being built. It represents the long-term model of how Vaeloryn intends to operate.
                </p>
                <div className="w-12 h-px bg-primary" />
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-8">
              {bridgeSteps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-display text-sm text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors shrink-0">
                      {step.step}
                    </div>
                    {i !== bridgeSteps.length - 1 && (
                      <div className="w-px h-full bg-white/5 group-hover:bg-primary/20 transition-colors my-2" />
                    )}
                  </div>
                  <div className="pb-8 pt-1">
                    <h4 className="font-display text-xl mb-2 text-foreground/90 group-hover:text-white transition-colors">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Help Build Vaeloryn */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="container px-6 max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h3 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-light tracking-wider uppercase text-foreground">
              Help Build Vaeloryn
            </motion.h3>

            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-muted-foreground text-left md:text-center leading-relaxed">
              <p>
                Vaeloryn is at the beginning of an ambitious mission to help accelerate scientific, medical and technological progress — founded in South Africa, with ambitions that extend internationally.
              </p>
              <p>
                Building an institution capable of pursuing that mission requires knowledge and experience across many fields. We are seeking people who may be willing to contribute their expertise, perspective, advice or connections as Vaeloryn develops.
              </p>
              <p className="text-base italic">
                People do not need to be looking for employment. They may simply want to have a conversation, offer advice, challenge our thinking or make an introduction.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 pt-4">
              {["Scientists", "Doctors & Researchers", "Engineers", "Academics", "Tech Entrepreneurs", "Investors & VC", "Legal & Regulatory", "Governance", "University Pros", "Philanthropists", "Anyone with conviction"].map((role, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-foreground/80">
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8">
              <Link href="/help-build" className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-14 px-10 text-base font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Contribute Expertise
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Our Principles */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-16"
          >
            <motion.h3 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-center text-foreground">
              Our Principles
            </motion.h3>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {principles.map((principle, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-lg font-medium text-muted-foreground leading-relaxed">{principle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
