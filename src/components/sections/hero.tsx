"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const headline = {
  title: "Engineering Tomorrow's Software Today",
  subtitle: "Premium software studio crafting production-grade SaaS for ambitious founders.",
  kicker: "Premium · Reliable · Scalable",
};

export function Hero() {
  const [mounted, setMounted] = useState(false);
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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 bg-gradient-to-br from-ekodrix-charcoal-dark via-ekodrix-charcoal to-[#0A0F1A]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(40,179,106,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(47,128,237,0.18),transparent_45%)]" />
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/30 text-sm font-medium text-ekodrix-green"
        >
          <Sparkles className="w-4 h-4" />
          {headline.kicker}
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {headline.title}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white font-semibold text-lg hover:border-white/35 hover:bg-white/5 transition-all"
          >
            View Case Studies
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-ekodrix-green" />
            <span>99.9% uptime standards</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-resellerpro-blue-light" />
            <span>Edge-ready performance</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-ekodrix-green" />
            <span>Launch-ready in weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
