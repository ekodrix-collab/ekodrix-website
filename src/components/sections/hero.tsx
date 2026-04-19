"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/hero_office_team.png",
  "/images/hero/team-collaboration.png",
  "/images/hero/developer-workspace.png",
  "/images/hero/female-engineer.png",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate images every 4.5 seconds for a smooth slider feel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#111111] pt-28 lg:pt-32 pb-8 lg:pb-16">
      
      {/* Refined Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-ekodrix-green/5 rounded-full blur-[120px] -translate-y-1/2 opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 opacity-50" />
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('/images/hero/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: UI/UX Mastered Content */}
          <div className="max-w-xl xl:max-w-2xl relative z-20 pt-4 lg:pt-8">
            
            {/* Elegant Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              <span className="w-2 h-2 rounded-full bg-ekodrix-green shadow-[0_0_8px_rgba(40,179,106,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase font-mono">Premium Business Solutions</span>
            </motion.div>

            {/* Headline with Clean Typography */}
            <motion.h1
              className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              We Provide Tech Solutions to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light pb-1">
                Grow Your Business
              </span>
            </motion.h1>

            {/* Subtext: Highly readable, optimal line-length */}
            <motion.p
              className="text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-white/60 max-w-[480px] mb-10 font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              We solve complex tech challenges to accelerate your growth. From MVP to enterprise scale, our expert team builds smart, reliable, and beautiful software solutions tailored to your unique business needs.
            </motion.p>

            {/* Polished Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-14"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-ekodrix-green text-[#0B150F] font-semibold text-[0.95rem] tracking-wide hover:shadow-[0_0_20px_rgba(40,179,106,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.02] text-white/90 font-medium text-[0.95rem] hover:bg-white/5 hover:border-white/20 hover:text-white backdrop-blur-sm transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Social Proof: Clean & Trustworthy */}
            <motion.div
              className="flex items-center gap-5 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex -space-x-3">
                {[4, 12, 33, 44].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#111111] overflow-hidden relative shadow-sm z-10 transition-transform hover:z-20 hover:scale-110">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i}`} 
                      alt="Client Avatar"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5 text-[#F59E0B]">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                  <span className="text-white/40 text-xs font-mono ml-1 top-0">5.0</span>
                </div>
                <span className="text-[0.8rem] text-white/50 tracking-wide">Trusted by <strong className="text-white/80 font-medium">1000+</strong> Business Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Wavy Image Display */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full flex items-center justify-center perspective-[1000px] mt-10 lg:mt-0">
            {mounted && (
              <motion.div
                initial={{ opacity: 0, rotateY: 5, rotateX: 5, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full max-w-[550px] mx-auto transform-gpu"
              >
                {/* Background Accent Mesh Blob - Using Ekodrix Green */}
                <motion.div 
                  className="absolute inset-0 w-[92%] h-[92%] mx-auto my-auto bg-ekodrix-green opacity-90 translate-x-4 translate-y-6 shadow-2xl"
                  animate={{
                    borderRadius: [
                      "50% 50% 40% 60% / 50% 60% 40% 50%",
                      "40% 60% 50% 50% / 60% 40% 60% 40%",
                      "50% 50% 40% 60% / 50% 60% 40% 50%"
                    ]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Primary Image Container - No Background, just masked image layer */}
                <motion.div 
                  className="absolute inset-0 w-[96%] h-[96%] mx-auto my-auto overflow-hidden shadow-2xl z-10 border-[6px] border-[#111111] bg-[#1a1a1a]"
                  animate={{
                    borderRadius: [
                      "45% 55% 65% 35% / 45% 45% 55% 55%",
                      "55% 45% 45% 55% / 55% 55% 45% 45%",
                      "45% 55% 65% 35% / 45% 45% 55% 55%"
                    ]
                  }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex]}
                      alt="Professional Business Solutions Team"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      initial={{ opacity: 0, x: "30%", scale: 1.1 }}
                      animate={{ opacity: 1, x: "0%", scale: 1.03 }}
                      exit={{ opacity: 0, x: "-30%", scale: 0.9, filter: "blur(4px)" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                  
                  {/* Subtle outer dark overlay to maintain legibility */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/40 to-transparent z-10 pointer-events-none" />
                </motion.div>
                
                {/* Tiny accent dot to match layout */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-[10%] left-[-2%] w-4 h-4 rounded-full bg-ekodrix-green z-30"
                />

                {/* Navigation Dots Indicator for Slider */}
                <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                        idx === currentImageIndex 
                          ? "w-6 bg-ekodrix-green blur-[0.5px]" 
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`View hero image ${idx + 1}`}
                    />
                  ))}
                </div>

              </motion.div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
