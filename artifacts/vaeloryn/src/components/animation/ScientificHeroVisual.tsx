import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useInView } from 'framer-motion';

export function ScientificHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const finePointerQuery = window.matchMedia('(pointer: fine)');
      setHasFinePointer(finePointerQuery.matches);

      const mobileQuery = window.matchMedia('(max-width: 768px)');
      setIsMobile(mobileQuery.matches);
      
      const updateMedia = () => {
        setHasFinePointer(finePointerQuery.matches);
        setIsMobile(mobileQuery.matches);
      };
      
      finePointerQuery.addEventListener('change', updateMedia);
      mobileQuery.addEventListener('change', updateMedia);
      return () => {
        finePointerQuery.removeEventListener('change', updateMedia);
        mobileQuery.removeEventListener('change', updateMedia);
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !hasFinePointer || !isInView) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 30);
      mouseY.set((e.clientY - window.innerHeight / 2) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, hasFinePointer, isInView, mouseX, mouseY]);

  const numNodes = isMobile ? 15 : 40;

  const nodes = useMemo(() => {
    return Array.from({ length: numNodes }).map((_, i) => {
      const angle = (i / numNodes) * Math.PI * 2;
      const radius = 150 + Math.random() * 350;
      return {
        id: i,
        cx: 500 + Math.cos(angle) * radius,
        cy: 500 + Math.sin(angle) * radius,
        r: 1 + Math.random() * 1.5,
        dur: 20 + Math.random() * 40,
        delay: Math.random() * -40,
      };
    });
  }, [numNodes]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2, delay: 0.2 }}
      style={{
        x: prefersReducedMotion ? 0 : smoothX,
        y: prefersReducedMotion ? 0 : smoothY,
      }}
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="w-[120%] h-[120%] min-w-[800px] min-h-[800px] max-w-[1400px] max-h-[1400px]">
        <motion.g
          animate={prefersReducedMotion || !isInView ? {} : { rotate: 360 }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
          style={{ originX: "500px", originY: "500px" }}
        >
          {/* Orbital rings */}
          <circle cx="500" cy="500" r="250" fill="none" stroke="rgba(201,162,39,0.03)" strokeWidth="1" />
          <circle cx="500" cy="500" r="350" fill="none" stroke="rgba(201,162,39,0.02)" strokeWidth="1" />
          <circle cx="500" cy="500" r="450" fill="none" stroke="rgba(201,162,39,0.015)" strokeWidth="1" />

          {/* Connections */}
          {!isMobile && (
            <motion.path
              d="M 500 250 L 650 350 L 700 500 L 650 650 L 500 750 L 350 650 L 300 500 Z"
              fill="none"
              stroke="rgba(201,162,39,0.05)"
              strokeWidth="0.5"
            />
          )}

          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#c9a227"
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={
                prefersReducedMotion || !isInView
                  ? { opacity: 0.3 }
                  : {
                      opacity: [0.1, 0.7, 0.1],
                      scale: [0.8, 1.5, 0.8],
                    }
              }
              transition={{
                duration: node.dur / 6,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.g>
      </svg>
    </motion.div>
  );
}
