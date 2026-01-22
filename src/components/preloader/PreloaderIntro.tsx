"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { EkodrixLogo } from "@/components/logos/ekodrix-logo";

export function PreloaderIntro({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [animationStage, setAnimationStage] = useState<
    "logo-enter" | "logo-settled" | "loading-appear" | "text-appear" | "complete"
  >("logo-enter");

  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Check if user has seen intro before
    const seenIntro = sessionStorage.getItem("ekodrix_seen_intro");
    
    if (seenIntro === "true") {
      setHasSeenIntro(true);
      setIsLoading(false);
      return;
    }

    // Generate cosmic particles
    const newParticles = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // CINEMATIC TIMELINE
    const timeline = [
      // Stage 1: Logo enters from space (0-2s)
      setTimeout(() => setAnimationStage("logo-settled"), 2000),
      
      // Stage 2: Loading ring appears (2-2.5s)
      setTimeout(() => setAnimationStage("loading-appear"), 2500),
      
      // Stage 3: Text appears (3.5s)
      setTimeout(() => setAnimationStage("text-appear"), 3500),
      
      // Stage 4: Complete (8s)
      setTimeout(() => {
        setAnimationStage("complete");
        setIsLoading(false);
        sessionStorage.setItem("ekodrix_seen_intro", "true");
      }, 8000),
    ];

    // Animate loading progress - starts AFTER logo settles
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          // Slower, more realistic progress
          const increment = Math.random() > 0.8 ? Math.random() * 12 : Math.random() * 4;
          return Math.min(prev + increment, 100);
        });
      }, 150);
      
      return () => clearInterval(progressInterval);
    }, 2500); // Start loading animation after logo settles

    // Allow ESC to skip
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLoading(false);
        sessionStorage.setItem("ekodrix_seen_intro", "true");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      timeline.forEach(clearTimeout);
      clearTimeout(progressTimer);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // If seen before, just show content
  if (hasSeenIntro) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              clipPath: [
                "circle(150% at 50% 50%)",
                "circle(100% at 50% 50%)",
                "circle(50% at 50% 50%)",
                "circle(0% at 50% 50%)",
              ],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
              times: [0, 0.3, 0.6, 1],
            }}
            className="fixed inset-0 z-[9999] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0A0F1A 0%, #1a1f2e 50%, #0d1117 100%)",
            }}
          >
            {/* Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0.4, 0.8, 0],
                    scale: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Animated Gradient Orbs */}
            <motion.div
              className="absolute inset-0 opacity-40"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(40,179,106,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(47,128,237,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 30%, rgba(40,179,106,0.15) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* ========================================
                  STAGE 1: LOGO - Coming from Space
                  ======================================== */}
              <motion.div
                className="absolute"
                initial={{ 
                  scale: 15, 
                  opacity: 0,
                  rotateY: 180,
                  z: -1000,
                }}
                animate={
                  animationStage === "logo-enter" ? {
                    scale: [15, 3, 1],
                    opacity: [0, 0.5, 1],
                    rotateY: [180, 90, 0],
                    z: [-1000, -200, 0],
                  } : {
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                    z: 0,
                  }
                }
                transition={{
                  duration: 2,
                  ease: [0.25, 0.46, 0.45, 0.94], // Cinematic ease
                  times: [0, 0.6, 1],
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -m-16 rounded-full"
                  animate={{
                    boxShadow: 
                      animationStage === "logo-enter" 
                        ? [
                            "0 0 0px rgba(40,179,106,0)",
                            "0 0 100px rgba(40,179,106,0.4)",
                            "0 0 80px rgba(40,179,106,0.6)",
                          ]
                        : "0 0 60px rgba(40,179,106,0.4)",
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.6, 1],
                  }}
                />

                {/* Logo */}
                <div className="transform scale-[2.8] sm:scale-[3.5]">
                  <EkodrixLogo size="lg" variant="light" />
                </div>

                {/* Energy Rings around logo */}
                {animationStage === "logo-enter" && (
                  <>
                    <motion.div
                      className="absolute inset-0 -m-16 border-2 border-ekodrix-green/40 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.5, 1],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 -m-20 border border-resellerpro-blue-medium/40 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.8, 1.2],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.8,
                      }}
                    />
                  </>
                )}

                {/* Subtle pulse after settled */}
                {(animationStage === "logo-settled" || 
                  animationStage === "loading-appear" || 
                  animationStage === "text-appear") && (
                  <motion.div
                    className="absolute inset-0 -m-12 border border-ekodrix-green/20 rounded-full"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>

              {/* ========================================
                  STAGE 2: LOADING RING - Appears Below Logo
                  ======================================== */}
              {(animationStage === "loading-appear" || 
                animationStage === "text-appear" || 
                animationStage === "complete") && (
                <motion.div
                  className="absolute top-[60%]"
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.34, 1.56, 0.64, 1], // Bouncy entrance
                  }}
                >
                  {/* Circular Progress Ring */}
                  <div className="relative">
                    <svg className="w-40 h-40 sm:w-48 sm:h-48" viewBox="0 0 200 200">
                      {/* Background circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="2"
                      />
                      
                      {/* Outer decorative ring */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="88"
                        fill="none"
                        stroke="rgba(40,179,106,0.1)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      
                      {/* Progress circle */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="url(#progress-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 80}`}
                        strokeDashoffset={`${2 * Math.PI * 80 * (1 - loadingProgress / 100)}`}
                        transform="rotate(-90 100 100)"
                        style={{ 
                          transition: 'stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: 'drop-shadow(0 0 8px rgba(40,179,106,0.5))',
                        }}
                      />
                      
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#28B36A" />
                          <stop offset="50%" stopColor="#2F80ED" />
                          <stop offset="100%" stopColor="#9333EA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Loading Percentage - Centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          className="text-5xl sm:text-6xl font-bold font-mono tabular-nums"
                          style={{
                            background: "linear-gradient(135deg, #28B36A 0%, #2F80ED 50%, #9333EA 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          key={Math.floor(loadingProgress)}
                          initial={{ scale: 1.3, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                        >
                          {Math.floor(loadingProgress)}
                        </motion.div>
                        
                        <motion.div
                          className="mt-2 text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.3em] font-medium"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          Loading
                        </motion.div>
                      </div>
                    </div>

                    {/* Spinning outer accent */}
                    <motion.div
                      className="absolute inset-0 -m-4"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-2 h-2 bg-ekodrix-green rounded-full absolute top-0 left-1/2 -translate-x-1/2 blur-[2px]" />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* ========================================
                  STAGE 3: TAGLINE - Appears at Bottom
                  ======================================== */}
              {(animationStage === "text-appear" || animationStage === "complete") && (
                <motion.div
                  className="absolute bottom-[15%] left-0 right-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Main Tagline */}
                  <div className="text-center mb-6">
                    <motion.p
                      className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider"
                      initial={{ opacity: 0, letterSpacing: "0.5em" }}
                      animate={{ opacity: 1, letterSpacing: "0.15em" }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    >
                      Engineering Tomorrow's Software
                    </motion.p>
                  </div>

                  {/* Decorative Line with Keywords */}
                  <motion.div
                    className="flex items-center justify-center gap-3 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.div
                      className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-ekodrix-green to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm text-ekodrix-green/80 uppercase tracking-[0.2em] font-medium">
                        Premium
                      </span>
                      <span className="text-white/30">·</span>
                      <span className="text-xs sm:text-sm text-resellerpro-blue-medium/80 uppercase tracking-[0.2em] font-medium">
                        Reliable
                      </span>
                      <span className="text-white/30">·</span>
                      <span className="text-xs sm:text-sm text-purple-400/80 uppercase tracking-[0.2em] font-medium">
                        Scalable
                      </span>
                    </div>
                    
                    <motion.div
                      className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-purple-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <p className="text-xs sm:text-sm text-white/40 tracking-wide">
                      Building the future, one line at a time
                    </p>
                  </motion.div>
                </motion.div>
              )}

            </div>

            {/* Skip Hint - Appears after logo settles */}
            {(animationStage !== "logo-enter") && (
              <motion.div
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-white/30 text-xs sm:text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Press{" "}
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/50 font-mono text-xs">
                  ESC
                </kbd>{" "}
                to skip
              </motion.div>
            )}

            {/* Progress Bar at Bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationStage === "loading-appear" || animationStage === "text-appear" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-ekodrix-green via-resellerpro-blue-medium to-purple-500"
                style={{
                  width: `${loadingProgress}%`,
                  boxShadow: "0 0 10px rgba(40,179,106,0.5)",
                }}
                initial={{ width: "0%" }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Scanline Effect (Optional - adds film grain) */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Smooth Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 1.05 : 1,
          filter: isLoading ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ 
          duration: 1.5,
          ease: [0.83, 0, 0.17, 1],
          delay: isLoading ? 0 : 0.5,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}