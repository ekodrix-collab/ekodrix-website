"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { EkodrixLogo } from "@/components/logos/ekodrix-logo";

/* ═══════════════════════════════════════════════════════════════
   PRIMITIVES
═══════════════════════════════════════════════════════════════ */
interface LineProps {
  d: string;
  delay?: number;
  duration?: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
}
function SvgLine({ d, delay = 0, duration = 1.2, color = "#28b36b", strokeWidth = 1.2, opacity = 0.5 }: LineProps) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{ delay, duration, ease: [0.4, 0, 0.2, 1] }}
    />
  );
}

interface DotProps {
  cx: number; cy: number; r?: number;
  delay?: number; color?: string; opacity?: number; filled?: boolean;
}
function SvgDot({ cx, cy, r = 4, delay = 0, color = "#28b36b", opacity = 0.9, filled = true }: DotProps) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r}
      stroke={color} strokeWidth={1.2}
      fill={filled ? color : "none"}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ delay, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

function PulseNode({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <>
      <SvgDot cx={cx} cy={cy} r={4} delay={delay} />
      <motion.circle
        cx={cx} cy={cy} r={4}
        fill="none" stroke="#28b36b" strokeWidth={1}
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 3.5, opacity: 0 }}
        transition={{ delay: delay + 0.3, duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </>
  );
}

function BlinkDot({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={2.5}
      fill="#28b36b"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ delay, duration: 0.85, repeat: Infinity, repeatDelay: 0.3 }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   CODE TOKEN (floating text labels)
═══════════════════════════════════════════════════════════════ */
const CODE_TOKENS: Array<{ text: string; x: number; y: number; delay: number }> = [
  { text: "</>", x: 14,  y: 210, delay: 0.9 },
  { text: "{}",  x: 488, y: 52,  delay: 1.1 },
  { text: "=>",  x: 14,  y: 324, delay: 1.3 },
  { text: "01",  x: 484, y: 330, delay: 1.5 },
  { text: "//",  x: 190, y: 22,  delay: 1.7 },
  { text: "&&",  x: 312, y: 22,  delay: 1.9 },
  { text: "API", x: 14,  y: 145, delay: 2.1 },
  { text: "fn()", x: 470, y: 205, delay: 2.3 },
];

/* ═══════════════════════════════════════════════════════════════
   FULL-SCREEN TECH SVG
═══════════════════════════════════════════════════════════════ */
function TechCanvas() {
  return (
    <svg
      viewBox="0 0 520 360"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      style={{ overflow: "visible" }}
    >
      {/* ── Grid ── */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 36} x2="520" y2={i * 36}
            stroke="#28b36b" strokeWidth={0.25} opacity={0.1} />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="360"
            stroke="#28b36b" strokeWidth={0.25} opacity={0.1} />
        ))}
      </motion.g>

      {/* ── Corner brackets ── */}
      <SvgLine d="M 8 8 L 8 28 L 28 28"           delay={0.1} duration={0.5} opacity={0.35} />
      <SvgLine d="M 512 8 L 512 28 L 492 28"      delay={0.1} duration={0.5} opacity={0.35} />
      <SvgLine d="M 8 352 L 8 332 L 28 332"       delay={0.1} duration={0.5} opacity={0.35} />
      <SvgLine d="M 512 352 L 512 332 L 492 332"  delay={0.1} duration={0.5} opacity={0.35} />

      {/* ── Orbital ring 1 — dashed, slow clockwise ── */}
      <motion.circle
        cx={260} cy={180} r={105}
        stroke="#28b36b" strokeWidth={0.8} fill="none"
        strokeDasharray="5 9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18, rotate: 360 }}
        transition={{
          opacity: { delay: 0.6, duration: 1 },
          rotate: { delay: 0.6, duration: 22, repeat: Infinity, ease: "linear" },
        }}
        style={{ transformOrigin: "260px 180px" }}
      />

      {/* ── Orbital ring 2 — counter-clockwise ── */}
      <motion.circle
        cx={260} cy={180} r={140}
        stroke="#3b82f6" strokeWidth={0.5} fill="none"
        strokeDasharray="2 14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13, rotate: -360 }}
        transition={{
          opacity: { delay: 0.9, duration: 1 },
          rotate: { delay: 0.9, duration: 30, repeat: Infinity, ease: "linear" },
        }}
        style={{ transformOrigin: "260px 180px" }}
      />

      {/* ── Traveller on ring1 using animateTransform (no mpath issues) ── */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }}>
        <circle r={5} fill="#28b36b" cx={365} cy={180}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 260 180"
            to="360 260 180"
            dur="10s"
            begin="1.3s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.g>

      {/* ── Browser window LEFT ── */}
      <SvgLine d="M 25 72 L 155 72 L 155 180 L 25 180 Z" delay={0.3} duration={1.1} opacity={0.42} />
      <SvgLine d="M 25 72 L 155 72 L 155 92 L 25 92 Z"   delay={0.6} duration={0.6} opacity={0.22} />
      <SvgDot cx={42} cy={82} r={4} delay={0.95} color="#ff5f57" opacity={0.85} />
      <SvgDot cx={56} cy={82} r={4} delay={1.05} color="#febc2e" opacity={0.85} />
      <SvgDot cx={70} cy={82} r={4} delay={1.15} color="#28c840" opacity={0.85} />
      {[100, 110, 122, 134, 146, 158, 170].map((y, i) => (
        <motion.rect key={`bl${i}`} x={36} y={y} height={5} rx={2}
          fill="#28b36b" opacity={0}
          animate={{ width: [55, 90, 65, 100, 75, 50, 85][i], opacity: 0.3 }}
          transition={{ delay: 1.3 + i * 0.1, duration: 0.4, ease: "easeOut" }}
        />
      ))}

      {/* ── Mobile phone RIGHT ── */}
      <SvgLine d="M 375 60 L 440 60 L 440 190 L 375 190 Z" delay={0.4} duration={1.0} opacity={0.4} />
      <SvgLine d="M 375 60 L 440 60 L 440 78 L 375 78 Z"   delay={0.7} duration={0.5} opacity={0.2} />
      <SvgDot cx={407} cy={183} r={4} delay={1.5} opacity={0.32} filled={false} />
      {[86, 97, 108, 119, 130, 142, 154, 165].map((y, i) => (
        <motion.rect key={`ph${i}`} x={384} y={y} height={4} rx={2}
          fill="#3b82f6" opacity={0}
          animate={{ width: [38, 28, 42, 22, 35, 40, 20, 30][i], opacity: 0.28 }}
          transition={{ delay: 1.5 + i * 0.09, duration: 0.4, ease: "easeOut" }}
        />
      ))}

      {/* ── Server rack FAR RIGHT ── */}
      <SvgLine d="M 462 90 L 506 90 L 506 175 L 462 175 Z" delay={0.5} duration={0.8} opacity={0.32} />
      {[98, 111, 124, 137, 150, 163].map((y, i) => (
        <React.Fragment key={`sr${i}`}>
          <motion.rect x={466} y={y} width={36} height={9} rx={1}
            fill="none" stroke="#28b36b" strokeWidth={0.7}
            initial={{ opacity: 0 }} animate={{ opacity: 0.28 }}
            transition={{ delay: 1.7 + i * 0.07 }}
          />
          <motion.circle cx={498} cy={y + 4.5} r={2.5}
            fill={i % 2 === 0 ? "#28b36b" : "#3b82f6"}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.8 + i * 0.08, duration: 1.5, repeat: Infinity }}
          />
        </React.Fragment>
      ))}

      {/* ── Data wire: browser → centre ── */}
      <SvgLine d="M 155 126 C 195 126 205 162 238 170" delay={1.6} duration={0.9} opacity={0.28} />
      <BlinkDot cx={196} cy={144} delay={2.2} />

      {/* ── Data wire: phone → centre ── */}
      <SvgLine d="M 375 125 C 338 125 318 160 285 170" delay={1.7} duration={0.9} opacity={0.28} color="#3b82f6" />
      <BlinkDot cx={330} cy={143} delay={2.5} />

      {/* ── Server → phone ── */}
      <SvgLine d="M 462 132 L 440 132" delay={2.1} duration={0.4} opacity={0.22} color="#3b82f6" strokeWidth={1} />
      <BlinkDot cx={451} cy={132} delay={2.6} />

      {/* ── Circuit bus BOTTOM ── */}
      <SvgLine d="M 50 308 L 470 308" delay={2.3} duration={1.3} opacity={0.28} strokeWidth={1} />
      {[90, 150, 210, 260, 320, 380, 440].map((x, i) => (
        <React.Fragment key={`bus${i}`}>
          <SvgLine d={`M ${x} 308 L ${x} 288`} delay={2.6 + i * 0.09} duration={0.25} opacity={0.28} strokeWidth={1} />
          <PulseNode cx={x} cy={288} delay={2.75 + i * 0.1} />
        </React.Fragment>
      ))}
      <SvgLine d="M 90 288 C 90 262 150 262 150 288"   delay={3.0} duration={0.5} opacity={0.18} strokeWidth={0.8} />
      <SvgLine d="M 210 288 C 210 262 260 262 260 288" delay={3.1} duration={0.5} opacity={0.18} strokeWidth={0.8} />
      <SvgLine d="M 320 288 C 320 262 380 262 380 288" delay={3.2} duration={0.5} opacity={0.18} strokeWidth={0.8} />

      {/* ── WiFi arcs TOP CENTER ── */}
      <SvgLine d="M 246 22 Q 260 10 274 22" delay={1.9} duration={0.4} opacity={0.45} strokeWidth={1.5} />
      <SvgLine d="M 240 28 Q 260 7  280 28" delay={2.1} duration={0.4} opacity={0.3}  strokeWidth={1.5} />
      <SvgLine d="M 234 35 Q 260 2  286 35" delay={2.3} duration={0.4} opacity={0.18} strokeWidth={1.5} />
      <SvgDot cx={260} cy={30} r={3} delay={2.5} opacity={0.65} />

      {/* ── Floating code tokens ── */}
      {CODE_TOKENS.map(({ text, x, y, delay }) => (
        <motion.text
          key={`${text}-${x}`}
          x={x} y={y}
          fontSize={9}
          fill="#28b36b"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0.28, 0.45] }}
          transition={{ delay, duration: 2.8, repeat: Infinity }}
        >
          {text}
        </motion.text>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════════════════ */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
  dur: Math.random() * 4 + 4,
}));

const STAGES = [
  "Initializing Core Systems",
  "Allocating Resources",
  "Rendering Interface",
  "Syncing Data Layers",
  "System Ready ✓",
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export function PreloaderIntro({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading]       = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [progress, setProgress]         = useState(0);
  const [mounted, setMounted]           = useState(false);
  const [stage, setStage]               = useState(0);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("ekodrix_seen_intro") === "true") {
      setHasSeenIntro(true);
      setIsLoading(false);
      return;
    }
    const iv = setInterval(() => {
      setProgress((p) => {
        const n = Math.min(p + Math.random() * 4.5 + 1.5, 100);
        setStage(n < 20 ? 0 : n < 45 ? 1 : n < 68 ? 2 : n < 90 ? 3 : 4);
        if (n >= 100) {
          clearInterval(iv);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("ekodrix_seen_intro", "true");
          }, 700);
        }
        return n;
      });
    }, 110);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLoading(false);
        sessionStorage.setItem("ekodrix_seen_intro", "true");
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  if (hasSeenIntro && mounted) return <>{children}</>;

  const showPreloader = isLoading && mounted;
  const contentReady  = !isLoading && mounted;

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed inset-0 z-[9999] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #040c14 0%, #091520 50%, #040c14 100%)" }}
          >
            {/* Floating particles */}
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: "#28b36b" }}
                animate={{ opacity: [0, 0.7, 0], y: [0, -50, -100] }}
                transition={{ delay: p.delay, duration: p.dur, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Ambient glow */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 700, height: 700,
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(40,179,107,0.08) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.13, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Full-screen tech drawing */}
            <div className="absolute inset-0">
              <TechCanvas />
            </div>

            {/* Centre: Logo + Progress */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-7 px-6">

              {/* Logo with spinning rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center"
              >
                {/* Radial glow */}
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 180, height: 180,
                    background: "radial-gradient(circle, rgba(40,179,107,0.2) 0%, transparent 72%)",
                  }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Dashed ring — slow CW */}
                <motion.div
                  className="absolute"
                  style={{ width: 152, height: 152, borderRadius: "50%", border: "1px dashed rgba(40,179,107,0.38)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                {/* Arc ring — fast CCW */}
                <motion.div
                  className="absolute"
                  style={{
                    width: 168, height: 168, borderRadius: "50%",
                    border: "1.5px solid transparent",
                    borderTopColor: "rgba(40,179,107,0.65)",
                    borderRightColor: "rgba(40,179,107,0.18)",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <EkodrixLogo size="lg" variant="light" />
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7 }}
                className="text-[10px] tracking-[0.35em] text-white uppercase -mt-3"
              >
                Elite Engineering
              </motion.p>

              {/* Progress block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7 }}
                className="w-72 sm:w-96 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-ekodrix-green"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.65, repeat: Infinity }}
                    />
                    <span className="text-[10px] font-semibold text-ekodrix-green/70 tracking-[0.22em] uppercase">
                      {STAGES[stage]}
                    </span>
                  </motion.div>
                  <span className="text-sm font-mono font-bold text-white/40 tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #28b36b, #5eeaa0)",
                      boxShadow: "0 0 10px rgba(40,179,107,0.65)",
                      width: `${progress}%`,
                    }}
                    transition={{ duration: 0.12, ease: "linear" }}
                  />
                </div>

                <div className="flex gap-2 justify-center">
                  {STAGES.map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      animate={{
                        backgroundColor: stage > i ? "#28b36b" : stage === i ? "rgba(40,179,107,0.55)" : "rgba(255,255,255,0.08)",
                        boxShadow: stage === i ? "0 0 6px rgba(40,179,107,0.9)" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ESC hint */}
            <motion.div
              className="absolute bottom-5 right-5 text-[10px] text-white/20 flex items-center gap-1.5"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            >
              Press{" "}
              <kbd className="px-1.5 py-0.5 rounded font-mono text-white/25 bg-white/5 border border-white/10">ESC</kbd>
              {" "}to skip
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          visibility: contentReady ? "visible" : "hidden",
          opacity: contentReady ? 1 : 0,
          transition: contentReady ? "opacity 1s cubic-bezier(0.22,1,0.36,1) 0.3s, visibility 0s 0s" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}