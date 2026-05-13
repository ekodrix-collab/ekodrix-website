"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient = true,
}: {
  src?: string;
  showGradient?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const springCfg = { stiffness: 80, damping: 25, mass: 1 };
  const lidRotateRaw = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const lidRotate = useSpring(lidRotateRaw, springCfg);
  const scaleRaw = useTransform(scrollYProgress, [0.1, 0.9], [1.1, 2.5]);
  const scale = useSpring(scaleRaw, springCfg);
  const yRaw = useTransform(scrollYProgress, [0.1, 0.9], [0, -180]);
  const y = useSpring(yRaw, springCfg);
  const baseOpacityRaw = useTransform(scrollYProgress, [0.6, 0.85], [1, 0]);
  const baseOpacity = useSpring(baseOpacityRaw, springCfg);

  if (!mounted) return null;

  // --- MOBILE FALLBACK: NO 3D, NO SCROLL ANIMATION ---
  if (isMobile) {
    return (
      <div className="w-full bg-[#0B0B0F] py-20 px-4 flex flex-col items-center gap-10">
        {/* Simple, premium static dashboard view for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[500px] aspect-[16/10] rounded-2xl bg-[#010101] border-[4px] border-white/10 overflow-hidden shadow-2xl"
        >
          {src && (
            <Image
              src={src}
              alt="ResellerPro Dashboard"
              fill
              className="object-cover object-top"
              priority
            />
          )}
          {/* Subtle glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Experience ResellerPro</h2>
          <p className="text-white/50 text-sm max-w-[280px] mx-auto">
            The CRM that Indian resellers swear by. High-performance dashboard on every device.
          </p>
        </div>
      </div>
    );
  }

  // --- DESKTOP: FULL 3D EXPERIENCE ---
  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[300vh] w-full isolate"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px]" />
        </div>

        <motion.div
          style={{ 
            scale, 
            y,
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d"
          }}
          className="relative flex flex-col items-center pointer-events-auto"
        >
          {/* LID */}
          <div className="relative w-[600px]" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
            <motion.div
              style={{ rotateX: lidRotate, transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
              className="relative w-full"
            >
              <div className="absolute inset-0 aspect-[16/10] rounded-t-xl bg-[#151515] border border-white/10 flex items-center justify-center" style={{ transform: "rotateX(180deg)" }}>
                <AppleLogo />
              </div>
              <div className="relative w-full aspect-[16/10] rounded-t-xl bg-[#000] border-[2px] border-white/20 border-b-0 overflow-hidden">
                <div className="absolute inset-0 top-[10px] bg-[#000] rounded-t-sm overflow-hidden">
                  {src && <Image src={src} alt="Screen" fill className="object-cover object-top" priority />}
                </div>
              </div>
            </motion.div>
          </div>

          {/* BASE */}
          <motion.div style={{ opacity: baseOpacity }} className="relative w-[600px]">
            <div className="w-full h-[8px] bg-[#222] rounded-t-sm border-x border-white/10" />
            <div className="w-full aspect-[16/7] bg-[#0a0a0a] rounded-b-2xl relative overflow-hidden border-x-[2px] border-b-[2px] border-white/10 shadow-2xl">
              <div className="absolute inset-x-0 top-[6%] mx-auto w-[92%] h-[50%] bg-[#000] rounded-lg p-[4px] border border-white/5 relative z-10" />
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[35%] h-[30%] bg-[#111] rounded-xl border border-white/5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const AppleLogo = () => (
  <svg width="40" height="40" viewBox="0 0 814 1000" fill="white" className="opacity-10">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.6-81.4-106-207.7-106-327.2C-1.4 308.3 86.9 159.3 225.1 159.3c63.6 0 116.6 41.6 156.5 41.6 38 0 97.6-44.1 170.2-44.1 27.5 0 126.4 2.7 190.3 103.1zM554.1 0c8.1 41.6-11.2 83.9-37.4 113.8-26.3 30-71.2 53.3-114.5 53.3-4.5-2.7-7.7-33.9.5-65.8 8.2-31.8 43-70.9 73.4-93.3C505.7-14.5 545.7-4.5 554.1 0z" />
  </svg>
);
