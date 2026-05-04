"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive End-to-End Container */}
        <div className="relative rounded-[3rem] bg-[#111111] border border-white/5 shadow-2xl overflow-hidden p-10 sm:p-16 lg:p-24 text-center">
          
          {/* Ambient inner glow */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30">
            <div className="w-[800px] h-[500px] bg-ekodrix-green/10 rounded-full blur-[150px] mix-blend-screen" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            
            <ScrollReveal type="fade-up" threshold={0.1}>
              {/* Overlapping Avatar Cluster */}
              <div className="flex -space-x-4 mb-8 justify-center">
                {[4, 12, 33, 44].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-[#111111] overflow-hidden relative shadow-lg z-10">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i}`} 
                      alt="Team Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-display font-bold leading-[1.1] tracking-tight text-[#FAFAFA] mb-6 max-w-3xl mx-auto">
                Ready to build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-emerald-400">
                  amazing?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.2} threshold={0.1}>
              <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-white/50 font-light max-w-2xl mx-auto mb-12">
                Let's discuss your project and turn your vision into a production-grade software product that scales globally.
              </p>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.3} threshold={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Link
                  href="/start-project"
                  className="group relative flex items-center justify-center gap-2.5 px-8 md:px-12 py-4 md:py-5 rounded-full bg-ekodrix-green text-[#0B150F] font-bold text-[1rem] tracking-wide hover:shadow-[0_0_30px_rgba(40,179,106,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2.5 px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/10 bg-white/[0.02] text-white/90 font-medium text-[1rem] hover:bg-white/5 hover:border-white/20 hover:text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  Talk to Sales
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.4} threshold={0.1}>
               <p className="text-xs font-mono text-white/30 tracking-widest mt-12 uppercase">
                 No commitment. Free tech strategy session.
               </p>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
