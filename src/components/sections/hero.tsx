"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const headline = {
  title: "Engineering Tomorrow's Software Today",
  subtitle: "Premium software studio crafting production-grade SaaS for ambitious founders.",
  kicker: "Premium · Reliable · Scalable",
};

const heroImages = [
  "/images/hero/developer-workspace.png",
  "/images/hero/team-collaboration.png",
  "/images/hero/female-engineer.png",
  "/images/hero/coding-closeup.png",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [particles] = useState(() =>
    Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      drift: Math.random() * 30 + 10,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.35 + 0.15,
    }))
  );

  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-12 sm:pb-20">
      {/* Particle Background Layer */}
      <ParticleBackground particleCount={60} className="opacity-40" />
      
      {/* Hero Image Background with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="EKODRIX Team"
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-ekodrix-charcoal-dark/95 via-ekodrix-charcoal-dark/85 to-ekodrix-charcoal-dark/70" />
          </div>
        ))}
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(40,179,106,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(47,128,237,0.12),transparent_45%)]" />
        {mounted && (
          <div className="absolute inset-0">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-ekodrix-green rounded-full"
                style={{ left: `${p.left}vw`, top: `${p.top}vh` }}
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, -p.drift, 0],
                  opacity: [0, p.opacity, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/30 text-sm font-medium text-ekodrix-green backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            {headline.kicker}
          </motion.div>

          <motion.h1
            className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-display font-bold leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {headline.title}
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {headline.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              href="/start-project"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ekodrix-green text-ekodrix-charcoal-dark font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:border-white/40 hover:bg-white/15 transition-all"
            >
              View Case Studies
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <ShieldCheck className="w-5 h-5 text-ekodrix-green" />
              <span>99.9% uptime standards</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <Zap className="w-5 h-5 text-resellerpro-blue-light" />
              <span>Edge-ready performance</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <Sparkles className="w-5 h-5 text-ekodrix-green" />
              <span>Launch-ready in weeks</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-ekodrix-green w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View hero image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
