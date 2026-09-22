import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, FlaskConical, CircleDollarSign, AlertCircle, ArrowRight, ShieldCheck, Zap, Rocket } from 'lucide-react';

export function FundingProblemVisual() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"]
  });

  // Stages of scroll
  // 0.0 - 0.3: Problem state
  // 0.3 - 0.6: Transition (Vaeloryn enters)
  // 0.6 - 1.0: Solution state

  const problemOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const barrierOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const solutionOpacity = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);
  
  const gapScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const solutionScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);

  return (
    <div ref={containerRef} className="w-full relative h-[180px] md:h-[220px] rounded-2xl border border-white/5 bg-white/[0.01] flex items-center justify-center overflow-hidden my-8">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Problem State */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center gap-2 md:gap-6 px-4"
        style={{ opacity: prefersReducedMotion ? 1 : problemOpacity }}
      >
        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Lightbulb size={18} className="text-white/60" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Ideas</span>
        </div>
        
        <ArrowRight size={16} className="text-white/20" />

        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <FlaskConical size={18} className="text-white/60" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Research</span>
        </div>

        <motion.div style={{ scale: gapScale }} className="flex flex-col items-center gap-2 mx-2 md:mx-6">
          <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive">
            <AlertCircle size={24} />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-destructive/80 font-medium">Funding Gap</span>
        </motion.div>

        <div className="flex flex-col items-center gap-2 opacity-30">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Rocket size={18} className="text-white/40" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Delayed Progress</span>
        </div>
      </motion.div>

      {/* Solution State */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center gap-2 md:gap-6 px-4"
        style={{ opacity: prefersReducedMotion ? 0 : solutionOpacity, scale: prefersReducedMotion ? 1 : solutionScale }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Lightbulb size={18} />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-primary/80">Innovation</span>
        </div>
        
        <motion.div 
          animate={prefersReducedMotion ? {} : { x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight size={16} className="text-primary/50" />
        </motion.div>

        <div className="flex flex-col items-center gap-2 mx-2 md:mx-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center text-primary relative z-10 shadow-[0_0_15px_rgba(201,162,39,0.2)]">
            <ShieldCheck size={28} />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-primary font-medium">Vaeloryn Infrastructure</span>
        </div>

        <motion.div 
          animate={prefersReducedMotion ? {} : { x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          <ArrowRight size={16} className="text-primary/50" />
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Zap size={20} className="text-primary" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-foreground">Scientific Progress</span>
        </div>
      </motion.div>

    </div>
  );
}
