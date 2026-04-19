"use client";

import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const metrics = [
  { value: 50, suffix: "+", label: "Enterprise Projects" },
  { value: 99, suffix: ".9%", label: "Uptime SLA" },
  { value: 1000, suffix: "+", label: "Clients Scaled" },
  { value: 48, suffix: "h", label: "Max MVP Delivery", prefix: "<" },
];

function KineticNumber({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.22, 1, 0.36, 1], // Smooth premium easing
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return controls.stop;
    }
  }, [value, isInView, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Metrics() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-ekodrix-green to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/5">
          {metrics.map((metric, index) => (
            <ScrollReveal
              key={metric.label}
              type="fade-up"
              delay={index * 0.15}
              threshold={0.1}
              className="text-center group px-4 first:border-l-0"
            >
               <div className="text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-display font-bold leading-none text-[#FAFAFA] tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 will-change-transform drop-shadow-[0_0_25px_rgba(255,255,255,0.05)]">
                 <span className="text-white/40 font-light">{metric.prefix}</span>
                 <KineticNumber value={metric.value} />
                 <span className="text-ekodrix-green">{metric.suffix}</span>
               </div>
               <p className="text-white/60 font-medium tracking-wide uppercase text-xs lg:text-sm">
                 {metric.label}
               </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
