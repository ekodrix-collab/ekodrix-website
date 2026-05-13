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

  // Lid rotation: starts angled (closed), opens flat
  const lidRotateRaw = useTransform(scrollYProgress, [0, 0.3], [-80, 0]);
  const lidRotate = useSpring(lidRotateRaw, springCfg);

  // Aggressive Scale for Mobile (Fill the screen)
  const scaleRaw = useTransform(
    scrollYProgress, 
    [0.2, 0.7], 
    [1, isMobile ? 3.8 : 2.2]
  );
  const scale = useSpring(scaleRaw, springCfg);

  // Translation to center the screen area perfectly
  const translateYRaw = useTransform(
    scrollYProgress, 
    [0.3, 0.7], 
    [0, isMobile ? -380 : -180]
  );
  const translateY = useSpring(translateYRaw, springCfg);

  // Side Tilt on scroll for "Uneeq" feel
  const tiltRaw = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -5 : 0]);
  const tilt = useSpring(tiltRaw, springCfg);

  // Opacities
  const baseOpacityRaw = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
  const baseOpacity = useSpring(baseOpacityRaw, springCfg);
  
  // 3D Perspective Shift
  const perspectiveOriginRaw = useTransform(scrollYProgress, [0.3, 0.7], ["50% 50%", "50% 20%"]);
  const perspectiveOrigin = useSpring(perspectiveOriginRaw as any, springCfg);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[400vh] sm:min-h-[300vh] isolate"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pointer-events-none">
        
        {/* Ambient Aura - More intense on mobile */}
        <motion.div 
          style={{ 
            scale: useTransform(scrollYProgress, [0, 0.5], [1, 2]),
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8])
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
        />

        <motion.div
          style={{ 
            scale, 
            translateY,
            perspectiveOrigin,
            rotateZ: tilt,
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d"
          }}
          className="relative flex flex-col items-center pointer-events-auto"
        >
          {/* === THE LID (SCREEN) === */}
          <div
            className="relative w-[280px] sm:w-[400px] md:w-[520px] lg:w-[680px]"
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
              {/* Back of lid */}
              <div
                className="absolute inset-0 aspect-[16/10] rounded-t-xl bg-[#151515] border-[2px] border-white/5 border-b-0 flex items-center justify-center shadow-inner overflow-hidden"
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
                className="relative w-full aspect-[16/10] rounded-t-xl bg-[#030303] border-[3px] border-white/10 border-b-0 overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,1)]"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                  WebkitTransform: "translateZ(1px)"
                }}
              >
                {/* Screen content area */}
                <div className="absolute inset-[2px] top-[10px] bg-[#000] rounded-sm overflow-hidden border border-white/5">
                  {src ? (
                    <Image
                      src={src}
                      alt="Macbook Screen"
                      fill
                      className="object-cover object-left-top opacity-100"
                      priority
                      sizes="(max-width: 768px) 800px, 1200px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0a0a2e] to-[#000]" />
                  )}

                  {/* Dynamic Reflection */}
                  <motion.div 
                    style={{ 
                      y: useTransform(scrollYProgress, [0.3, 0.8], ["-30%", "30%"]),
                      opacity: useTransform(scrollYProgress, [0.3, 0.6], [0.4, 0.1])
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-10 mix-blend-overlay" 
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* === THE BASE === */}
          <motion.div
            style={{ 
              opacity: baseOpacity,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d"
            }}
            className="relative w-[280px] sm:w-[400px] md:w-[520px] lg:w-[680px]"
          >
            {/* Hinge */}
            <div className="w-full h-[10px] bg-gradient-to-b from-[#222] to-[#111] rounded-t-sm border-x border-white/5 relative z-10" />

            {/* Base body */}
            <div className="w-full aspect-[16/7] bg-[#111] rounded-b-2xl relative overflow-hidden border-x-[3px] border-b-[3px] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
              {/* Screen Light Cast */}
              <motion.div 
                style={{ 
                  opacity: useTransform(scrollYProgress, [0.2, 0.6], [0, 0.8]),
                }}
                className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-500/30 via-blue-500/5 to-transparent z-0 pointer-events-none mix-blend-screen" 
              />

              {/* Keyboard area */}
              <div className="absolute inset-x-0 top-[6%] mx-auto w-[92%] h-[50%] bg-[#030303] rounded-lg p-[5px] shadow-[inset_0_2px_15px_rgba(0,0,0,0.9)] border border-white/[0.05] relative z-10">
                <MacKeyboard scrollYProgress={scrollYProgress} />
              </div>

              {/* Trackpad */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[38%] h-[32%] bg-gradient-to-b from-[#151515] to-[#080808] rounded-xl border border-white/5 shadow-inner" />
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
  const backlightOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1]);
  
  return (
    <div
      style={{ flex }}
      className="h-full rounded-[4px] bg-gradient-to-b from-[#1a1a1a] to-[#080808] border border-white/10 flex items-center justify-center shadow-[0_2px_0_0_rgba(0,0,0,1)] relative overflow-hidden"
    >
      <motion.span 
        style={{ opacity: backlightOpacity }}
        className="text-[5px] text-white font-bold select-none leading-none tracking-tighter"
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
      {/* Touch Bar area */}
      <div className="flex gap-[3px] h-[12%] px-[2px] mb-[1px]">
        <div className="w-[8%] bg-[#0a0a0a] rounded-sm flex items-center justify-center border border-white/5">
          <span className="text-[3px] text-white/30 font-medium">esc</span>
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded-sm relative overflow-hidden border border-white/5">
          <motion.div 
            style={{ x: useTransform(scrollYProgress, [0.3, 0.6], ["-100%", "100%"]) }}
            className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-blue-500/50 to-transparent" 
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
    className="opacity-10"
  >
    <path
      d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.6-81.4-106-207.7-106-327.2C-1.4 308.3 86.9 159.3 225.1 159.3c63.6 0 116.6 41.6 156.5 41.6 38 0 97.6-44.1 170.2-44.1 27.5 0 126.4 2.7 190.3 103.1zM554.1 0c8.1 41.6-11.2 83.9-37.4 113.8-26.3 30-71.2 53.3-114.5 53.3-4.5-2.7-7.7-33.9.5-65.8 8.2-31.8 43-70.9 73.4-93.3C505.7-14.5 545.7-4.5 554.1 0z"
      fill="white"
    />
  </svg>
);
