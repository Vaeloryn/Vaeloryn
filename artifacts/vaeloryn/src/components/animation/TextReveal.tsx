import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: Props) {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 24,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="mr-[0.25em] last:mr-0 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
