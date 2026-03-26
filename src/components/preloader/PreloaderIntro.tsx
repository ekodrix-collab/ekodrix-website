"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { EkodrixLogo } from "@/components/logos/ekodrix-logo";

const LOADING_STAGES = [
  { id: "core", title: "Initializing Core" },
  { id: "engine", title: "Allocating Resources" },
  { id: "ui", title: "Optimizing UI/UX" },
  { id: "data", title: "Fetching Metrics" },
  { id: "finalize", title: "System Ready" },
];

export function PreloaderIntro({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    setMounted(true);
    const seenIntro = sessionStorage.getItem("ekodrix_seen_intro");

    if (seenIntro === "true") {
      setHasSeenIntro(true);
      setIsLoading(false);
      return;
    }

    // Faster progress simulation (~4s total)
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("ekodrix_seen_intro", "true");
          }, 600);
          return 100;
        }

        if (prev < 20) setLoadingStage(0);
        else if (prev < 45) setLoadingStage(1);
        else if (prev < 70) setLoadingStage(2);
        else if (prev < 90) setLoadingStage(3);
        else setLoadingStage(4);

        return Math.min(prev + Math.random() * 8 + 2, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Skip with ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLoading(false);
        sessionStorage.setItem("ekodrix_seen_intro", "true");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // If user already saw intro, render children immediately (no wrappers)
  if (hasSeenIntro && mounted) {
    return <>{children}</>;
  }

  // Determine visibility states
  const showPreloader = isLoading && mounted;
  const contentReady = !isLoading && mounted;

  return (
    <>
      {/* PRELOADER OVERLAY - z-[9999] covers everything */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #0A0F1A 0%, #1a1f2e 50%, #0d1117 100%)",
            }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ekodrix-green/10 rounded-full blur-[120px] animate-pulse" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="transform scale-[0.6] min-[360px]:scale-[0.65] min-[375px]:scale-[0.7] min-[400px]:scale-[0.75] sm:scale-[0.9] md:scale-[1.2] lg:scale-[1.4] origin-center"
                >
                  <EkodrixLogo size="lg" variant="light" />
                </motion.div>

                {/* Progress Bar & Stage Info */}
                <div className="mt-20 w-64 md:w-80 space-y-4">
                  <div className="flex justify-between items-end mb-2">
                    <motion.span
                      key={loadingStage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[10px] font-medium text-ekodrix-green/60 tracking-[0.3em] uppercase"
                    >
                      {LOADING_STAGES[loadingStage].title}
                    </motion.span>
                    <span className="text-sm font-medium text-white/40 tracking-[0.2em] tabular-nums">
                      {Math.round(loadingProgress)}%
                    </span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-ekodrix-green shadow-[0_0_15px_rgba(40,179,106,0.5)]"
                      style={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              </div>

              {/* ESC hint */}
              <motion.div
                className="absolute bottom-6 right-6 text-white/20 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Press{" "}
                <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-white/40 font-mono text-[10px]">
                  ESC
                </kbd>{" "}
                to skip
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        CHILDREN CONTAINER
        Key fix: Use visibility:hidden + opacity:0 to completely hide children 
        (including fixed-position Navbar) during preloading.
        This prevents any flash of content before the preloader mounts.
      */}
      <div
        style={{
          visibility: contentReady ? "visible" : "hidden",
          opacity: contentReady ? 1 : 0,
          transition: contentReady
            ? "opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s, visibility 0s 0s"
            : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}