"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-ekodrix-green origin-left z-[10000]"
      style={{ 
        scaleX,
        boxShadow: "0 0 10px rgba(16, 185, 129, 0.5), 0 0 5px rgba(16, 185, 129, 0.3)",
        transformStyle: "preserve-3d",
        WebkitTransformStyle: "preserve-3d",
        transform: "translateZ(10001px)",
        WebkitTransform: "translateZ(10001px)"
      }}
    />
  );
}
