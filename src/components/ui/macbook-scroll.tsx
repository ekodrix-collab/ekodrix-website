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

  const springCfg = { stiffness: 80, damping: 25, mass: 1 };

  // --- PERFECT MOBILE TIMING ---
  
  // 1. LID OPENING: Happens in the first 40% of scroll
  const lidRotateRaw = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const lidRotate = useSpring(lidRotateRaw, springCfg);

  // 2. ZOOM: Starts as the lid is opening, continues to 90%
  const scaleRaw = useTransform(
    scrollYProgress, 
    [0.1, 0.9], 
    [isMobile ? 1.4 : 1.1, isMobile ? 5.5 : 2.5]
  );
  const scale = useSpring(scaleRaw, springCfg);

  // 3. VERTICAL POSITION: Very subtle movement to keep the screen area centered
  const yRaw = useTransform(
    scrollYProgress, 
    [0.1, 0.9], 
    [0, isMobile ? -140 : -180] // Reduced mobile Y to prevent "going to top"
  );
  const y = useSpring(yRaw, springCfg);

  // 4. BASE FADE: Hide keyboard later to avoid "empty base"
  const baseOpacityRaw = useTransform(scrollYProgress, [0.6, 0.85], [1, 0]);
  const baseOpacity = useSpring(baseOpacityRaw, springCfg);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[300vh] w-full isolate"
    >
      {/* Sticky container - Stay centered */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden">
        
        {/* Glow */}
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
          {/* === THE LID === */}
          <div
            className="relative w-[300px] sm:w-[450px] md:w-[600px]"
            style={{ 
              perspective: "1500px",
              WebkitPerspective: "1500px",
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
              {/* Lid Back */}
              <div
                className="absolute inset-0 aspect-[16/10] rounded-t-xl bg-[#151515] border border-white/10 flex items-center justify-center"
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

              {/* Screen Front */}
              <div 
                className="relative w-full aspect-[16/10] rounded-t-xl bg-[#000] border-[2px] border-white/20 border-b-0 overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                  WebkitTransform: "translateZ(1px)"
                }}
              >
                <div className="absolute inset-0 top-[10px] bg-[#000] rounded-t-sm overflow-hidden">
                  {src ? (
                    <Image
                      src={src}
                      alt="Macbook Screen"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="100vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#050505]" />
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* === THE BASE === */}
          <motion.div
            style={{ opacity: baseOpacity }}
            className="relative w-[300px] sm:w-[450px] md:w-[600px]"
          >
            <div className="w-full h-[8px] bg-[#222] rounded-t-sm border-x border-white/10" />
            <div className="w-full aspect-[16/7] bg-[#0a0a0a] rounded-b-2xl relative overflow-hidden border-x-[2px] border-b-[2px] border-white/10 shadow-2xl">
              <div className="absolute inset-x-0 top-[6%] mx-auto w-[92%] h-[50%] bg-[#000] rounded-lg p-[4px] border border-white/5 relative z-10">
                <MacKeyboard scrollYProgress={scrollYProgress} />
              </div>
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[35%] h-[30%] bg-[#111] rounded-xl border border-white/5" />
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
  const backlightOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.3, 1]);
  return (
    <div
      style={{ flex }}
      className="h-full rounded-[3px] bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-[0_1.5px_0_0_rgba(0,0,0,1)]"
    >
      <motion.span 
        style={{ opacity: backlightOpacity }}
        className="text-[5px] text-white/80 font-bold"
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
  "⇧": "shft",
  "fn": "fn",
  "⌃": "ctrl",
  "⌥": "opt",
  "⌘": "cmd",
};

const MacKeyboard = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const rows = [
    [{l:"~",w:1},{l:"1",w:1},{l:"2",w:1},{l:"3",w:1},{l:"4",w:1},{l:"5",w:1},{l:"6",w:1},{l:"7",w:1},{l:"8",w:1},{l:"9",w:1},{l:"0",w:1},{l:"-",w:1},{l:"=",w:1},{l:"⌫",w:1.8}],
    [{l:"⇥",w:1.5},{l:"Q",w:1},{l:"W",w:1},{l:"E",w:1},{l:"R",w:1},{l:"T",w:1},{l:"Y",w:1},{l:"U",w:1},{l:"I",w:1},{l:"O",w:1},{l:"P",w:1},{l:"[",w:1},{l:"]",w:1},{l:"\\",w:1.2}],
    [{l:"⇪",w:1.9},{l:"A",w:1},{l:"S",w:1},{l:"D",w:1},{l:"F",w:1},{l:"G",w:1},{l:"H",w:1},{l:"J",w:1},{l:"K",w:1},{l:"L",w:1},{l:";",w:1},{l:"'",w:1},{l:"⏎",w:1.9}],
    [{l:"⇧",w:2.4},{l:"Z",w:1},{l:"X",w:1},{l:"C",w:1},{l:"V",w:1},{l:"B",w:1},{l:"N",w:1},{l:"M",w:1},{l:",",w:1},{l:".",w:1},{l:"/",w:1},{l:"⇧",w:2.4}],
    [{l:"fn",w:1},{l:"⌃",w:1},{l:"⌥",w:1},{l:"⌘",w:1.3},{l:"",w:5},{l:"⌘",w:1.3},{l:"⌥",w:1},{l:"◀",w:0.7},{l:"▶",w:0.7}]
  ];

  return (
    <div className="h-full w-full flex flex-col gap-[1.5px]">
      <div className="flex gap-[2px] h-[12%] px-[1px] mb-[1px]">
        <div className="w-[8%] bg-[#0a0a0a] rounded-sm border border-white/5" />
        <div className="flex-1 bg-[#0a0a0a] rounded-sm border border-white/5" />
        <div className="w-[8%] bg-[#0a0a0a] rounded-sm border border-white/5" />
      </div>
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-[1.5px] flex-1 px-[1px]">
          {row.map((key, keyIdx) => (
            <Key key={keyIdx} label={key.l} flex={key.w} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      ))}
    </div>
  );
};

const AppleLogo = () => (
  <svg width="40" height="40" viewBox="0 0 814 1000" fill="white" className="opacity-10">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.6-81.4-106-207.7-106-327.2C-1.4 308.3 86.9 159.3 225.1 159.3c63.6 0 116.6 41.6 156.5 41.6 38 0 97.6-44.1 170.2-44.1 27.5 0 126.4 2.7 190.3 103.1zM554.1 0c8.1 41.6-11.2 83.9-37.4 113.8-26.3 30-71.2 53.3-114.5 53.3-4.5-2.7-7.7-33.9.5-65.8 8.2-31.8 43-70.9 73.4-93.3C505.7-14.5 545.7-4.5 554.1 0z" />
  </svg>
);
