"use client";

import { CheckCircle2, Rocket, Code, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const processSteps = [
  {
    phase: "Discovery",
    duration: "Week 1",
    icon: Rocket,
    title: "Discovery & Architecture",
    description: "We don't just ask what you want. We map out the exact database schema, API logic, and user flow required to build it correctly the first time.",
    deliverables: [
      "Technical architecture design",
      "Database schema & API contract",
      "Cost & velocity roadmap",
    ],
  },
  {
    phase: "Development",
    duration: "Weeks 2-8",
    icon: Code,
    title: "Agile Engineering",
    description: "No black boxes. You get live staging links every Friday. We build in modular sprints so the product is always functional and testable.",
    deliverables: [
      "Weekly staging deployments",
      "Continuous CI/CD pipeline",
      "Automated QA testing",
    ],
  },
  {
    phase: "Scale",
    duration: "Week 9+",
    icon: Zap,
    title: "Deployment & Scale",
    description: "We switch the DNS, scale the database clusters, and monitor the launch. Then we stick around to analyze user data and iterate.",
    deliverables: [
      "Zero-downtime production launch",
      "Cloud performance monitoring",
      "Post-launch growth iteration",
    ],
  },
];

export function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#111111] overflow-hidden">
      
      {/* Circuit board ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-ekodrix-green/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/images/hero/grid.svg')] bg-center opacity-[0.02] mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-ekodrix-green shadow-[0_0_8px_rgba(40,179,106,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase font-mono">Methodology</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6 max-w-3xl mx-auto">
              How we construct{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
                digital empires
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.2} threshold={0.1}>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-white/60 max-w-2xl mx-auto font-light">
              We eliminated the traditional agency bloat. Our process is engineered for pure velocity, transparency, and production-grade code.
            </p>
          </ScrollReveal>
        </div>
        
        {/* SVG Connection Path for large screens ONLY */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-white/5 via-ekodrix-green/30 to-white/5 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.phase}
                  type="fade-up"
                  delay={index * 0.15}
                  threshold={0.1}
                  className="relative group"
                >
                  <div className="bg-[#0A0A0A]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-ekodrix-green/30 transition-all duration-500 h-full hover:bg-white/[0.02] hover:shadow-[0_0_30px_rgba(40,179,106,0.05)]">
                    
                    {/* Node / Number circle bridging the SVG line */}
                    <div className="absolute top-0 right-8 lg:left-1/2 lg:-translate-x-1/2 lg:-top-6 w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white/50 font-mono text-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-ekodrix-green/50 group-hover:text-ekodrix-green transition-all duration-300">
                      0{index + 1}
                    </div>

                    <div className="flex flex-col h-full pt-4">
                      {/* Flex Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-ekodrix-green/10 group-hover:border-ekodrix-green/20 transition-all duration-500 shadow-inner">
                          <Icon className="w-6 h-6 text-white/80 group-hover:text-ekodrix-green transition-colors" />
                        </div>
                        <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-[0.7rem] font-mono text-white/60 tracking-wider">
                          {step.duration}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-display font-bold mb-3 text-[#FAFAFA] group-hover:text-ekodrix-green transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-[0.95rem] font-light mb-8">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                        <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">
                          Key Deliverables
                        </p>
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-start gap-3 text-[0.9rem] text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-ekodrix-green/50 flex-shrink-0 group-hover:text-ekodrix-green transition-colors mt-0.5" />
                            <span className="font-light">{deliverable}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
        
        {/* Tail End CTA */}
        <ScrollReveal type="fade-up" delay={0.4} threshold={0.1} className="mt-20 flex justify-center">
          <Link
            href="/start-project"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-ekodrix-green text-[#0B150F] font-semibold text-[0.95rem] tracking-wide hover:shadow-[0_0_20px_rgba(40,179,106,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
