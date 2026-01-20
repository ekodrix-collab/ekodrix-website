"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "50+", label: "Products Shipped", suffix: "" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "2M+", label: "Users Served", suffix: "" },
  { value: "<48h", label: "First Response", suffix: "" },
];

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-ekodrix-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl sm:text-5xl font-bold ekodrix-gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {metric.value}
                  {metric.suffix}
                </motion.div>
                <p className="text-white/70 text-sm sm:text-base">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
