"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
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
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const springCfg = { stiffness: 100, damping: 30, mass: 0.5 };

  // --- FASTER OPENING & VISIBILITY ---
  // Lid starts opening immediately at 0% scroll
  const lidRotateRaw = useTransform(scrollYProgress, [0, 0.3], [-85, 0]);
  const lidRotate = useSpring(lidRotateRaw, springCfg);

  // Initial Visibility: Start with a larger scale on mobile so it's not "missing"
  const scaleRaw = useTransform(
    scrollYProgress, 
    [0, 0.7], 
    [isMobile ? 1.5 : 1, isMobile ? 5 : 2.5]
  );
  const scale = useSpring(scaleRaw, springCfg);

  // Locked Position: Ensure it's in the top half of the screen on mobile
  const translateYRaw = useTransform(
    scrollYProgress, 
    [0, 0.7], 
    [isMobile ? -50 : 0, isMobile ? -500 : -200]
  );
  const translateY = useSpring(translateYRaw, springCfg);

  // Opacities & Blends
  const baseOpacityRaw = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const baseOpacity = useSpring(baseOpacityRaw, springCfg);
  
  // Aura intensity starts stronger on mobile
  const auraOpacity = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 0.6 : 0.4, 0.9]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[350vh] sm:min-h-[300vh] isolate"
    >
      <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden pointer-events-none">
        
        {/* Dynamic Aura */}
        <motion.div 
          style={{ opacity: auraOpacity }}
          className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] mix-blend-screen"
        />

        <motion.div
          style={{ 
            scale, 
            translateY,
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d"
          }}
          className="relative flex flex-col items-center pointer-events-auto"
        >
          {/* === THE LID (SCREEN) === */}
          <div
            className="relative w-[300px] sm:w-[400px] md:w-[680px]"
            style={{ 
              perspective: "1800px",
              WebkitPerspective: "1800px",
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d"
            }}
          >
            <motion.div
              style={{ 
                rotateX: lidRotate, 
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d"
              }}
              className="relative w-full"
            >
              {/* Back of lid */}
              <div
                className="absolute inset-0 aspect-[16/10] rounded-t-2xl bg-[#111] border-[2px] border-white/10 border-b-0 flex items-center justify-center shadow-inner overflow-hidden"
                style={{
                  backfaceVisibility: "visible",
                  WebkitBackfaceVisibility: "visible",
                  transform: "rotateX(180deg)",
                  WebkitTransform: "rotateX(180deg)",
                  transformOrigin: "bottom center",
                }}
              >
                <AppleLogo />
              </div>

              {/* Front of lid (screen) */}
              <div 
                className="relative w-full aspect-[16/10] rounded-t-2xl bg-[#010101] border-[3px] border-white/20 border-b-0 overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,1)]"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                  WebkitTransform: "translateZ(1px)"
                }}
              >
                <div className="absolute inset-0 top-[12px] bg-[#000] rounded-t-sm overflow-hidden">
                  {src ? (
                    <Image
                      src={src}
                      alt="Macbook Screen"
                      fill
                      className="object-cover object-left-top"
                      priority
                      sizes="100vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0a0a2e] to-[#000]" />
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* === THE BASE === */}
          <motion.div
            style={{ opacity: baseOpacity }}
            className="relative w-[300px] sm:w-[400px] md:w-[680px]"
          >
            <div className="w-full h-[12px] bg-[#222] rounded-t-sm border-x border-white/10" />
            <div className="w-full aspect-[16/7] bg-[#0a0a0a] rounded-b-3xl relative overflow-hidden border-x-[3px] border-b-[3px] border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,1)]">
              <div className="absolute inset-x-0 top-[6%] mx-auto w-[92%] h-[50%] bg-[#000] rounded-lg p-[5px] border border-white/5 relative z-10">
                <MacKeyboard scrollYProgress={scrollYProgress} />
              </div>
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[38%] h-[32%] bg-[#111] rounded-2xl border border-white/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Key = ({
  label,
  flex = 1,
  scrollYProgress,
}: {
  label: string;
  flex?: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const backlightOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.4, 1]);
  return (
    <div
      style={{ flex }}
      className="h-full rounded-[4px] bg-[#151515] border border-white/10 flex items-center justify-center shadow-[0_2.5px_0_0_rgba(0,0,0,1)]"
    >
      <motion.span 
        style={{ opacity: backlightOpacity }}
        className="text-[6px] text-white font-black"
      >
        {keyLabels[label as keyof typeof keyLabels] || label}
      </motion.span>
    </div>
  );
};

const keyLabels = {
  "⌫": "del",
  "⇥": "tab",
  "⇪": "caps",
  "⏎": "ret",
  "⇧": "shift",
  "fn": "fn",
  "⌃": "ctrl",
  "⌥": "opt",
  "⌘": "cmd",
};

const MacKeyboard = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const rows = [
    [
      { l: "~", w: 1 }, { l: "1", w: 1 }, { l: "2", w: 1 }, { l: "3", w: 1 },
      { l: "4", w: 1 }, { l: "5", w: 1 }, { l: "6", w: 1 }, { l: "7", w: 1 },
      { l: "8", w: 1 }, { l: "9", w: 1 }, { l: "0", w: 1 }, { l: "-", w: 1 },
      { l: "=", w: 1 }, { l: "⌫", w: 1.8 },
    ],
    [
      { l: "⇥", w: 1.5 }, { l: "Q", w: 1 }, { l: "W", w: 1 }, { l: "E", w: 1 },
      { l: "R", w: 1 }, { l: "T", w: 1 }, { l: "Y", w: 1 }, { l: "U", w: 1 },
      { l: "I", w: 1 }, { l: "O", w: 1 }, { l: "P", w: 1 }, { l: "[", w: 1 },
      { l: "]", w: 1 }, { l: "\\", w: 1.2 },
    ],
    [
      { l: "⇪", w: 1.9 }, { l: "A", w: 1 }, { l: "S", w: 1 }, { l: "D", w: 1 },
      { l: "F", w: 1 }, { l: "G", w: 1 }, { l: "H", w: 1 }, { l: "J", w: 1 },
      { l: "K", w: 1 }, { l: "L", w: 1 }, { l: ";", w: 1 }, { l: "'", w: 1 },
      { l: "⏎", w: 1.9 },
    ],
    [
      { l: "⇧", w: 2.4 }, { l: "Z", w: 1 }, { l: "X", w: 1 }, { l: "C", w: 1 },
      { l: "V", w: 1 }, { l: "B", w: 1 }, { l: "N", w: 1 }, { l: "M", w: 1 },
      { l: ",", w: 1 }, { l: ".", w: 1 }, { l: "/", w: 1 }, { l: "⇧", w: 2.4 },
    ],
    [
      { l: "fn", w: 1 }, { l: "⌃", w: 1 }, { l: "⌥", w: 1 }, { l: "⌘", w: 1.3 },
      { l: "", w: 5 }, { l: "⌘", w: 1.3 }, { l: "⌥", w: 1 },
      { l: "◀", w: 0.7 }, { l: "▶", w: 0.7 },
    ],
  ];

  return (
    <div className="h-full w-full flex flex-col gap-[2px]">
      <div className="flex gap-[3px] h-[12%] px-[2px] mb-[1px]">
        <div className="w-[8%] bg-[#0a0a0a] rounded-sm flex items-center justify-center border border-white/5">
          <span className="text-[3px] text-white/30 font-medium">esc</span>
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded-sm relative overflow-hidden border border-white/5">
          <motion.div 
            style={{ x: useTransform(scrollYProgress, [0.3, 0.6], ["-100%", "100%"]) }}
            className="absolute inset-y-0 left-0 w-1/4 bg-blue-500/50" 
          />
        </div>
        <div className="w-[8%] bg-[#0a0a0a] rounded-sm flex items-center justify-center border border-white/5">
          <div className="w-[7px] h-[7px] rounded-full bg-black border border-white/10" />
        </div>
      </div>
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-[2px] flex-1 px-[1px]">
          {row.map((key, keyIdx) => (
            <Key key={keyIdx} label={key.l} flex={key.w} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      ))}
    </div>
  );
};

const AppleLogo = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 814 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-20"
  >
    <path
      d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.6-81.4-106-207.7-106-327.2C-1.4 308.3 86.9 159.3 225.1 159.3c63.6 0 116.6 41.6 156.5 41.6 38 0 97.6-44.1 170.2-44.1 27.5 0 126.4 2.7 190.3 103.1zM554.1 0c8.1 41.6-11.2 83.9-37.4 113.8-26.3 30-71.2 53.3-114.5 53.3-4.5-2.7-7.7-33.9.5-65.8 8.2-31.8 43-70.9 73.4-93.3C505.7-14.5 545.7-4.5 554.1 0z"
      fill="white"
    />
  </svg>
);
