import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Network, Database, Globe, Cpu, Link as LinkIcon } from 'lucide-react';

export function VaeloEcosystemVisual() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]);
  const counterRotation = useTransform(orbitRotation, v => -v);

  const nodes = [
    { icon: Globe, label: "Global Capital", delay: 0 },
    { icon: Database, label: "Innovation Projects", delay: 0.2 },
    { icon: Cpu, label: "Specialist Networks", delay: 0.4 },
    { icon: Network, label: "Ecosystem Partners", delay: 0.6 },
  ];

  return (
    <div ref={containerRef} className="w-full relative h-[300px] md:h-[400px] rounded-2xl flex items-center justify-center overflow-visible my-8">
      <motion.div 
        className="relative flex items-center justify-center w-full h-full"
        style={{ scale: prefersReducedMotion ? 1 : scale, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        {/* Central VAELO Node */}
        <div className="absolute z-20 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full" />
          <motion.div 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-primary/50 bg-background flex items-center justify-center shadow-[0_0_30px_rgba(201,162,39,0.15)] relative"
            animate={prefersReducedMotion ? {} : { boxShadow: ["0 0 20px rgba(201,162,39,0.1)", "0 0 40px rgba(201,162,39,0.3)", "0 0 20px rgba(201,162,39,0.1)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-display font-medium text-lg md:text-xl tracking-widest text-primary">VAELO</span>
          </motion.div>
        </div>

        {/* Orbiting Connections */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ rotate: orbitRotation }}
        >
          {nodes.map((node, i) => {
            const angle = (i / nodes.length) * Math.PI * 2;
            const orbitRadius = 28;
            const x = `${50 + Math.cos(angle) * orbitRadius}%`;
            const y = `${50 + Math.sin(angle) * orbitRadius}%`;
            const Icon = node.icon;

            return (
              <div
                key={node.label}
                className="absolute w-12 h-12 -ml-6 -mt-6 z-30"
                style={{ left: x, top: y }}
              >
                {/* Counter-rotate to keep upright */}
                <motion.div 
                  style={{ rotate: counterRotation }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm shadow-sm">
                    <Icon size={18} className="text-muted-foreground" />
                  </div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground/80 font-medium text-center bg-background/90 px-2 py-0.5 rounded shadow-sm max-w-[80px] md:max-w-none leading-tight">
                    {node.label}
                  </span>
                </motion.div>
              </div>
            );
          })}

          {/* Connection Lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
          >
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" className="text-primary/50" />
            {nodes.map((_, i) => {
              const angle = (i / nodes.length) * Math.PI * 2;
              const x2 = 50 + Math.cos(angle) * 28;
              const y2 = 50 + Math.sin(angle) * 28;
              return (
                <line key={i} x1="50" y1="50" x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.25" className="text-primary/30" />
              );
            })}
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
