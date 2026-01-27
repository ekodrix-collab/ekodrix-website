"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type RevealType = "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale-in" | "blur-in";

interface ScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    "scale-in": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    "blur-in": {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cinematic cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
