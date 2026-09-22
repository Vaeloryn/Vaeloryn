import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function AnimatedTimelineLine() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"]
  });

  return (
    <div ref={ref} className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
      <motion.div 
        className="absolute top-0 left-0 w-full bg-primary origin-top shadow-[0_0_10px_rgba(201,162,39,0.5)]"
        style={{ height: "100%", scaleY: prefersReducedMotion ? 1 : scrollYProgress }}
      />
    </div>
  );
}
