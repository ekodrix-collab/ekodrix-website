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
      setTimeout(() => setAnimationStage("logo-settled"), 2000),
      setTimeout(() => setAnimationStage("loading-appear"), 2500),
      setTimeout(() => setAnimationStage("text-appear"), 3500),
      setTimeout(() => {
        setAnimationStage("complete");
        setIsLoading(false);
        sessionStorage.setItem("ekodrix_seen_intro", "true");
      }, 8000),
    ];

    // Animate loading progress
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          const increment = Math.random() > 0.8 ? Math.random() * 12 : Math.random() * 4;
          return Math.min(prev + increment, 100);
        });
      }, 150);
      
      return () => clearInterval(progressInterval);
    }, 2500);

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

            {/* Main Container - Flex Centering */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 md:px-4 overflow-x-hidden">
              
              {/* ========================================
                  LOGO SECTION - Perfectly Centered
                  Mobile: mb-16
                  Desktop: mb-20 (more space)
                  ======================================== */}
              <motion.div
                className="relative flex items-center justify-center w-full max-w-[280px] min-[375px]:max-w-[320px] min-[400px]:max-w-[360px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[720px] mb-16 sm:mb-20 md:mb-24 lg:mb-28"
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
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.6, 1],
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    margin: '-10px',
                  }}
                  animate={{
                    boxShadow: 
                      animationStage === "logo-enter" 
                        ? [
                            "0 0 0px rgba(40,179,106,0)",
                            "0 0 40px rgba(40,179,106,0.3)",
                            "0 0 35px rgba(40,179,106,0.5)",
                          ]
                        : "0 0 30px rgba(40,179,106,0.3)",
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.6, 1],
                  }}
                />

                {/* Logo Container - Properly Aligned */}
                <div className="relative flex items-center justify-center w-full">
                  <div className="transform scale-[0.95] min-[360px]:scale-[1.05] min-[375px]:scale-[1.15] min-[400px]:scale-[1.3] sm:scale-[2.2] md:scale-[1.5] lg:scale-[1.6] origin-center">
                    <EkodrixLogo size="lg" variant="light" />
                  </div>
                </div>

                {/* Energy Rings - Responsive sizing */}
                {animationStage === "logo-enter" && (
                  <>
                    <motion.div
                      className="absolute inset-0 border-2 border-ekodrix-green/40 rounded-full pointer-events-none"
                      style={{ margin: '-30px' }}
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
                      className="absolute inset-0 border border-resellerpro-blue-medium/40 rounded-full pointer-events-none"
                      style={{ margin: '-45px' }}
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
                    className="absolute inset-0 border border-ekodrix-green/20 rounded-full pointer-events-none"
                    style={{ margin: '-25px' }}
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
                  LOADING RING SECTION
                  Mobile: mb-12 (unchanged)
                  Desktop: mb-32 (much more space before text)
                  ======================================== */}
              {(animationStage === "loading-appear" || 
                animationStage === "text-appear" || 
                animationStage === "complete") && (
                <motion.div
                  className="relative flex items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <div className="relative">
                    <svg 
                      className="w-16 h-16 min-[375px]:w-20 min-[375px]:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" 
                      viewBox="0 0 200 200"
                    >
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
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 80}`}
                        strokeDashoffset={`${2 * Math.PI * 80 * (1 - loadingProgress / 100)}`}
                        transform="rotate(-90 100 100)"
                        style={{ 
                          transition: 'stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: 'drop-shadow(0 0 8px rgba(40,179,106,0.5))',
                        }}
                      />
                      
                      <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#28B36A" />
                          <stop offset="50%" stopColor="#2F80ED" />
                          <stop offset="100%" stopColor="#9333EA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Loading Percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-3xl font-bold font-mono tabular-nums"
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
                          className="mt-0.5 text-[6px] min-[375px]:text-[8px] sm:text-[9px] text-white/50 uppercase tracking-[0.15em] font-medium"
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
                      className="absolute inset-0 -m-2 sm:-m-3 md:-m-4"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ekodrix-green rounded-full absolute top-0 left-1/2 -translate-x-1/2 blur-[2px]" />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* ========================================
                  TAGLINE SECTION - Bottom Position
                  Mobile: Unchanged (bottom-[8%])
                  Desktop: More space from bottom
                  ======================================== */}
              {(animationStage === "text-appear" || animationStage === "complete") && (
                <motion.div
                  className="absolute bottom-[8%] min-[375px]:bottom-[10%] sm:bottom-[12%] md:bottom-[10%] lg:bottom-[8%] left-0 right-0 px-6 sm:px-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Main Tagline */}
                  <div className="text-center mb-3 sm:mb-6">
                    <motion.p
                      className="text-sm min-[375px]:text-base min-[400px]:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide sm:tracking-wider"
                      initial={{ opacity: 0, letterSpacing: "0.3em" }}
                      animate={{ opacity: 1, letterSpacing: "0.1em" }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    >
                      Engineering Tomorrow's Software
                    </motion.p>
                  </div>

                  {/* Decorative Line with Keywords */}
                  <motion.div
                    className="flex items-center justify-center gap-1.5 min-[375px]:gap-2 sm:gap-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.div
                      className="h-[1px] w-8 min-[375px]:w-10 min-[400px]:w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-ekodrix-green to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    
                    <div className="flex items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 md:gap-3">
                      <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm text-ekodrix-green/80 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-medium">
                        Premium
                      </span>
                      <span className="text-white/30 text-[10px]">·</span>
                      <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm text-resellerpro-blue-medium/80 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-medium">
                        Reliable
                      </span>
                      <span className="text-white/30 text-[10px]">·</span>
                      <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm text-purple-400/80 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-medium">
                        Scalable
                      </span>
                    </div>
                    
                    <motion.div
                      className="h-[1px] w-8 min-[375px]:w-10 min-[400px]:w-12 sm:w-16 md:w-24 bg-gradient-to-l from-transparent via-purple-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    className="text-center mt-2 sm:mt-4 md:mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <p className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm text-white/40 tracking-wide">
                      Building the future, one line at a time
                    </p>
                  </motion.div>
                </motion.div>
              )}

            </div>

            {/* Skip Hint */}
            {(animationStage !== "logo-enter") && (
              <motion.div
                className="absolute bottom-3 right-3 min-[375px]:bottom-4 min-[375px]:right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-white/30 text-[10px] min-[375px]:text-xs sm:text-sm z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="hidden min-[375px]:inline">Press</span>{" "}
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 border border-white/10 rounded text-white/50 font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs">
                  ESC
                </kbd>{" "}
                <span className="hidden min-[375px]:inline">to skip</span>
              </motion.div>
            )}

            {/* Progress Bar at Bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] sm:h-[2px] overflow-hidden"
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

            {/* Scanline Effect */}
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

      {/* Main Content */}
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