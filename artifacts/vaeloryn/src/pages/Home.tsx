import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from 'framer-motion';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { VaelorynLogo } from '@/components/VaelorynLogo';
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
  { name: "Energy", icon: Zap, desc: "Next-generation energy generation, storage, and distribution." },
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

const pipelineSteps = [
  "Innovation & Projects",
  "Vaeloryn Ecosystem",
  "VAELO Economic Layer",
  "Onchain Participation",
  "Real-World Development",
];

type StatusKind = 'achieved' | 'inactive' | 'pending';

const builtTodayItems: { label: string; value: string; kind: StatusKind }[] = [
  { label: "Canonical Protocol",             value: "Implemented locally", kind: "achieved" },
  { label: "Canonical Test Evidence",        value: "32 targeted tests passing",         kind: "achieved" },
  { label: "Historical Prototype",           value: "V1.1 on Base Sepolia",              kind: "achieved" },
  { label: "Canonical Founder Vesting",       value: "Locally tested (3 releases + linear)", kind: "achieved"  },
];

const nextPhaseItems: { label: string; value: string; kind: StatusKind }[] = [
  { label: "Independent Security Review",    value: "Pending",                        kind: "pending"   },
  { label: "Legal / Regulatory Preparation", value: "Pending",                        kind: "pending"   },
  { label: "Canonical Deployment",           value: "Base Mainnet intended · not deployed",     kind: "inactive"  },
  { label: "Public VAELO Distribution",      value: "Not active",                     kind: "inactive"  },
  { label: "First Flagship Project",         value: "Selection pending",              kind: "pending"   },
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

interface ScrollStepProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

function PipelineStep({
  label,
  index,
  total,
  progress,
  reducedMotion,
}: ScrollStepProps & { label: string }) {
  const threshold = 0.08 + (index / Math.max(total - 1, 1)) * 0.84;
  const activation = useTransform(
    progress,
    [Math.max(0, threshold - 0.1), threshold],
    [0, 1],
  );
  const borderColor = useTransform(
    activation,
    [0, 1],
    ['rgba(255,255,255,0.1)', 'hsl(38, 92%, 50%)'],
  );
  const numberColor = useTransform(
    activation,
    [0, 1],
    ['rgba(248,250,252,0.8)', 'hsl(38, 92%, 50%)'],
  );
  const labelColor = useTransform(
    activation,
    [0, 1],
    ['hsl(215, 20%, 65%)', 'hsl(210, 40%, 98%)'],
  );
  const glowOpacity = useTransform(activation, [0, 1], [0, 0.08]);

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0.55, y: 14 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-4 group"
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-background border flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors"
        style={{ borderColor }}
      >
        <motion.div
          className="absolute inset-0 bg-primary"
          style={{ opacity: glowOpacity }}
        />
        <motion.span
          className="font-display font-medium text-sm relative z-10"
          style={{ color: numberColor }}
        >
          {index + 1}
        </motion.span>
      </motion.div>
      <motion.span
        className="font-medium text-sm tracking-wide text-center group-hover:text-foreground transition-colors"
        style={{ color: labelColor }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

function BridgeStep({
  step,
  index,
  total,
  progress,
}: ScrollStepProps & { step: (typeof bridgeSteps)[number] }) {
  const threshold = 0.06 + (index / Math.max(total - 1, 1)) * 0.88;
  const activation = useTransform(
    progress,
    [Math.max(0, threshold - 0.11), threshold],
    [0, 1],
  );
  const borderColor = useTransform(
    activation,
    [0, 1],
    ['rgba(255,255,255,0.1)', 'hsl(38, 92%, 50%)'],
  );
  const numberColor = useTransform(
    activation,
    [0, 1],
    ['hsl(215, 20%, 65%)', 'hsl(38, 92%, 50%)'],
  );
  const stepOpacity = useTransform(activation, [0, 1], [0.72, 1]);

  return (
    <motion.div variants={fadeInUp} className="relative z-10 flex gap-6 group">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-10 h-10 rounded-full border bg-background flex items-center justify-center font-display text-sm group-hover:border-primary group-hover:text-primary transition-colors shrink-0"
          style={{ borderColor, color: numberColor }}
        >
          {step.step}
        </motion.div>
      </div>
      <motion.div className="pb-8 pt-1" style={{ opacity: stepOpacity }}>
        <h4 className="font-display text-xl mb-2 text-foreground/90 group-hover:text-white transition-colors">
          {step.title}
        </h4>
        <p className="text-muted-foreground">{step.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export function Home() {
  const prefersReducedMotion = useReducedMotion();
  const pipelineRef = useRef<HTMLDivElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { scrollYProgress: pipelineScrollProgress } = useScroll({
    target: pipelineRef,
    offset: ["start 82%", "end 30%"],
  });
  const { scrollYProgress: bridgeScrollProgress } = useScroll({
    target: bridgeRef,
    offset: ["start 78%", "end 32%"],
  });
  const smoothPipelineProgress = useSpring(pipelineScrollProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.25,
  });
  const smoothBridgeProgress = useSpring(bridgeScrollProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.25,
  });
  const pipelineVisualProgress = useTransform(
    smoothPipelineProgress,
    value => prefersReducedMotion ? 1 : value,
  );
  const bridgeVisualProgress = useTransform(
    smoothBridgeProgress,
    value => prefersReducedMotion ? 1 : value,
  );
  const heroGlowY = useTransform(
    scrollY,
    [0, 760],
    prefersReducedMotion ? [0, 0] : [0, 64],
  );
  const heroLogoY = useTransform(
    scrollY,
    [0, 760],
    prefersReducedMotion ? [0, 0] : [0, 48],
  );
  const heroWordmarkY = useTransform(
    scrollY,
    [0, 760],
    prefersReducedMotion ? [0, 0] : [0, -18],
  );

  const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren:  prefersReducedMotion ? 0 : 0.09,
        delayChildren:    prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const logoVariant: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18, scale: prefersReducedMotion ? 1 : 0.88 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: prefersReducedMotion ? 0.01 : 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const heroFadeInUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.78, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      <SEO
        title="VAELO | Vaeloryn"
        description="Vaeloryn connects exceptional talent, ideas, expertise and resources to support scientific, medical and technological progress through an open ecosystem."
        canonical="https://vaeloryn.com/"
        keywords="Vaeloryn, scientific progress, medical advancement, technological innovation, talent, ideas, resources"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">

        {/* Background depth layers */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 68%)',
              y: heroGlowY,
            }}
            animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.72, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[90px]"
            style={{
              top: 'calc(50% - 210px)',
              background: 'radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="container px-6 relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainer}
            className="flex flex-col items-center gap-5 w-full"
          >

            {/* Logo mark */}
            <motion.div variants={logoVariant} style={{ y: heroLogoY }} className="mb-1">
              <VaelorynLogo className="w-14 h-14 md:w-[68px] md:h-[68px] lg:w-20 lg:h-20" />
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              variants={heroFadeInUp}
              style={{ y: heroWordmarkY }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] uppercase text-foreground"
            >
              Vaeloryn
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={heroFadeInUp}
              className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent"
            />

            {/* Tagline */}
            <motion.h2
              variants={heroFadeInUp}
              className="text-xl md:text-3xl font-display font-light text-foreground/90 tracking-wide"
            >
              Building the financial ecosystem for technologies that shape the future.
            </motion.h2>

            {/* Supporting copy - Rapid Comprehension */}
            <motion.div variants={heroFadeInUp} className="w-full max-w-3xl mt-4 flex flex-col gap-8">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/85">
                  South African-founded. Globally focused.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 text-left pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <h3 className="text-primary font-medium tracking-widest uppercase text-xs">Why Vaeloryn</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Innovative companies and projects can struggle to access capital, specialist networks and
                    globally accessible funding through traditional systems.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-primary font-medium tracking-widest uppercase text-xs">The Ecosystem</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Vaeloryn is building an onchain ecosystem connecting global capital with scientific, medical
                    and technological innovation — powered by VAELO as its intended economic layer and developed
                    with Base as its intended primary blockchain home.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={heroFadeInUp}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8 w-full sm:w-auto"
            >
              <Link
                href="/vaelo"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-14 px-8 text-base font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore Vaeloryn
              </Link>
              <Link
                href="/status"
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

            <motion.a
              variants={heroFadeInUp}
              href="https://x.com/vaelorynfuture?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Vaeloryn on X"
              title="Follow Vaeloryn on X"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-all hover:border-primary/80 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current transition-transform group-hover:scale-105"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </motion.a>

          </motion.div>
        </div>
      </section>

      {/* 2. Protocol Deployment Banner */}
      <section className="py-14 md:py-20 border-t border-white/5 border-b border-primary/10 bg-primary/[0.04]">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
          >
            {/* Left: milestone headline */}
            <div className="flex items-start gap-4 flex-1">
              <CheckCircle2 size={22} strokeWidth={1.75} className="text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80">
                  Protocol Milestone
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide text-foreground">
                  Canonical Protocol Implemented
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  The canonical Vaeloryn implementation has been built and tested locally, but has not
                  been deployed or source-verified on a network. The published Base Sepolia contracts
                  are the historical, non-canonical V1.1 prototype.
                </p>
              </div>
            </div>

            {/* Right: quick-verify links */}
            <div className="flex flex-col gap-3 md:flex-shrink-0">
              <Link
                href="/verify"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-11 px-6 text-sm font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Verify the Protocol →
              </Link>
              <Link
                href="/status"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-11 px-6 text-sm font-medium tracking-wide border border-primary/30 hover:border-primary/50 text-primary hover:bg-primary/5 transition-all"
              >
                Engineering Dashboard →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Infrastructure: Intended for Base */}
      <section id="base" className="py-24 md:py-32 border-b border-white/5 bg-black/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container px-6 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full">
                  Architecture
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-foreground">
                Built for <span className="text-primary">Base</span>
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Vaeloryn is being developed with Base as its intended primary blockchain ecosystem and
                  production home. Base offers low-cost, scalable and globally accessible EVM infrastructure
                  suited to payments and financial applications.
                </p>
                <p>
                  Its developer ecosystem and connection to Coinbase infrastructure and distribution make Base
                  strategically relevant to Vaeloryn’s long-term onchain financial use cases. This positioning
                  does not imply endorsement, investment or partnership by Base or Coinbase.
                </p>
                <div className="pt-4 border-t border-white/10 mt-6">
                  <p className="text-sm italic text-muted-foreground/70 border-l border-primary/30 pl-4">
                    The canonical Vaeloryn protocol is currently implemented and tested locally. Base Mainnet is
                    the intended production environment, pending independent security review, legal preparation
                    and deployment readiness. No canonical Mainnet deployment exists today.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-[400px] flex-shrink-0 flex justify-center">
               <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-white/[0.02]">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-6 rounded-full border border-primary/10 border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  />
                  <Cpu size={48} className="text-primary/60" strokeWidth={1} />
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Project Status */}
      <section id="progress" className="py-24 md:py-32 border-b border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5 max-w-3xl">
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
                Vaeloryn is currently in active development. We maintain a strict and transparent boundary between what has been built and tested locally today, and the critical security and regulatory milestones required before production deployment on Base Mainnet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Built Today */}
              <motion.div variants={staggerContainer} className="space-y-6">
                <h4 className="font-display text-xl tracking-wide text-foreground/90 border-b border-white/10 pb-3">Built Today</h4>
                <div className="grid grid-cols-1 gap-3">
                  {builtTodayItems.map((item, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      <Card className="bg-white/[0.025] border-white/5 hover:border-white/10 transition-colors duration-300">
                        <CardContent className="px-5 py-4 flex items-start gap-3">
                          <StatusIcon kind={item.kind} />
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-xs text-muted-foreground tracking-wide uppercase">{item.label}</span>
                            <span className="text-sm font-medium leading-snug text-foreground">
                              {item.value}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Next Phase */}
              <motion.div variants={staggerContainer} className="space-y-6">
                <h4 className="font-display text-xl tracking-wide text-foreground/90 border-b border-white/10 pb-3">Next Phase Requirements</h4>
                <div className="grid grid-cols-1 gap-3">
                  {nextPhaseItems.map((item, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      <Card className="bg-white/[0.025] border-white/5 hover:border-white/10 transition-colors duration-300">
                        <CardContent className="px-5 py-4 flex items-start gap-3">
                          <StatusIcon kind={item.kind} />
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-xs text-muted-foreground tracking-wide uppercase">{item.label}</span>
                            <span className="text-sm font-medium leading-snug text-muted-foreground">
                              {item.value}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Disclaimer note */}
            <motion.div variants={fadeInUp} className="pt-4">
              <p className="text-xs text-muted-foreground/60 leading-relaxed border-l border-white/10 pl-4 max-w-3xl italic">
                The historical V1.1 VAELO prototype is on Base Sepolia testnet only and has no monetary value.
                The canonical implementation is not deployed. Mainnet launch and any public distribution are subject to independent security review,
                legal and regulatory preparation, and further development milestones.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="mission" className="py-24 md:py-32 border-b border-white/5 bg-black/20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-6 max-w-3xl mx-auto">
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-foreground">How It Works</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vaeloryn intends to connect innovation projects with expertise, resources and onchain
                participation. VAELO is designed to serve as the native economic layer connecting the companies,
                projects, partners and communities that may participate in that wider ecosystem.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed font-medium">
                The long-term model is designed to move from promising innovation, through the Vaeloryn ecosystem
                and VAELO economic layer, toward onchain capital and participation that can support measurable
                real-world scientific, medical and technological development.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                Not every project needs to become a company. Fundamental scientific and medical research can have enormous value without immediate commercial returns.
              </p>
            </motion.div>

            {/* Pipeline Visual */}
            <motion.div ref={pipelineRef} variants={fadeInUp} className="relative py-12">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden lg:block" />
              <motion.div
                aria-hidden="true"
                className="absolute top-1/2 left-0 right-0 h-px bg-primary -translate-y-1/2 hidden lg:block origin-left shadow-[0_0_10px_rgba(245,166,11,0.35)]"
                style={{ scaleX: pipelineVisualProgress }}
              />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:justify-between gap-6 relative z-10">
                {pipelineSteps.map((step, i) => (
                  <PipelineStep
                    key={step}
                    label={step}
                    index={i}
                    total={pipelineSteps.length}
                    progress={pipelineVisualProgress}
                    reducedMotion={Boolean(prefersReducedMotion)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Areas of Progress */}
      <section id="areas" className="py-24 md:py-40">
        <div className="container px-6 max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
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

      {/* 7. The Vaeloryn Bridge */}
      <section className="py-24 md:py-40 border-y border-white/5 bg-black/20">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
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

            <motion.div
              ref={bridgeRef}
              variants={staggerContainer}
              className="relative space-y-8"
            >
              <div
                aria-hidden="true"
                className="absolute left-5 top-5 bottom-12 w-px -translate-x-1/2 bg-white/5"
              />
              <motion.div
                aria-hidden="true"
                className="absolute left-5 top-5 bottom-12 w-px -translate-x-1/2 origin-top bg-primary shadow-[0_0_10px_rgba(245,166,11,0.3)]"
                style={{ scaleY: bridgeVisualProgress }}
              />
              {bridgeSteps.map((step, i) => (
                <BridgeStep
                  key={step.step}
                  step={step}
                  index={i}
                  total={bridgeSteps.length}
                  progress={bridgeVisualProgress}
                  reducedMotion={Boolean(prefersReducedMotion)}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. Help Build Vaeloryn */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="container px-6 max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h3 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-light tracking-wider uppercase text-foreground">
              Help Build Vaeloryn
            </motion.h3>

            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-muted-foreground text-left md:text-center leading-relaxed">
              <p>
                Vaeloryn is at the beginning of an ambitious mission to help accelerate scientific, medical and technological
                progress — founded in South Africa, with ambitions that extend internationally.
              </p>
              <p>
                Building an institution capable of pursuing that mission requires knowledge and experience across many fields.
                We are seeking people who may be willing to contribute their expertise, perspective, advice or connections as Vaeloryn develops.
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

      {/* 9. Our Principles */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
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
