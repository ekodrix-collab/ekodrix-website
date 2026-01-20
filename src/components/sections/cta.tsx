"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-ekodrix-gradient relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Something Amazing?
        </motion.h2>
        
        <motion.p
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss your project and turn your vision into a production-grade product that scales.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/start-project"
            className="group px-8 py-4 rounded-lg bg-ekodrix-green text-ekodrix-charcoal-dark font-semibold text-lg hover:scale-105 hover:shadow-2xl ekodrix-glow transition-all flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
