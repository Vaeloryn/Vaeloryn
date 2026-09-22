import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Network, Server, Hexagon } from 'lucide-react';

export function BaseInfrastructureVisual() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-64 h-64 flex items-center justify-center">
      <motion.div style={{ opacity: prefersReducedMotion ? 1 : opacity }} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Base Layer Hexagon */}
          <motion.polygon 
            points="100,20 170,60 170,140 100,180 30,140 30,60" 
            fill="rgba(255,255,255,0.02)" 
            stroke="rgba(201,162,39,0.15)" 
            strokeWidth="1"
          />
          {/* Network connections growing */}
          {!prefersReducedMotion && (
            <>
              <motion.line x1="100" y1="100" x2="100" y2="20" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
              <motion.line x1="100" y1="100" x2="170" y2="60" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
              <motion.line x1="100" y1="100" x2="170" y2="140" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
              <motion.line x1="100" y1="100" x2="100" y2="180" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
              <motion.line x1="100" y1="100" x2="30" y2="140" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
              <motion.line x1="100" y1="100" x2="30" y2="60" stroke="rgba(201,162,39,0.3)" strokeWidth="1" style={{ pathLength }} />
            </>
          )}
        </svg>

        {/* Nodes */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        <div className="absolute top-[30%] right-[15%] translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        <div className="absolute bottom-[30%] right-[15%] translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        <div className="absolute bottom-[30%] left-[15%] -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        <div className="absolute top-[30%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />

        {/* Center Base Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-xl bg-background border border-primary/20 shadow-[0_0_20px_rgba(201,162,39,0.1)] flex items-center justify-center z-10 relative">
            <Server size={24} className="text-primary/80" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
