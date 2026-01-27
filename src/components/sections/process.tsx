"use client";

import { ArrowRight, CheckCircle2, Rocket, Code, Zap } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const processSteps = [
  {
    phase: "Discovery",
    duration: "Week 1",
    icon: Rocket,
    title: "Discovery & Planning",
    description: "We dive deep into your vision, validate assumptions, and create a bulletproof technical roadmap.",
    deliverables: [
      "Product requirements document",
      "Technical architecture design",
      "Sprint planning & timeline",
      "Cost & resource breakdown",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    phase: "Development",
    duration: "Weeks 2-8",
    icon: Code,
    title: "Build & Iterate",
    description: "Agile sprints with weekly demos. You see progress every 7 days, make changes on the fly.",
    deliverables: [
      "Working MVP with core features",
      "Weekly progress updates",
      "Continuous deployment pipeline",
      "Code reviews & QA testing",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    phase: "Scale",
    duration: "Week 9+",
    icon: Zap,
    title: "Launch & Scale",
    description: "Production deployment, monitoring setup, and ongoing optimization for growth.",
    deliverables: [
      "Production launch support",
      "Performance monitoring",
      "User onboarding assistance",
      "Post-launch iterations",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export function Process() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-ekodrix-charcoal-dark to-ekodrix-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(40,179,106,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(47,128,237,0.08),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal type="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white">
            How We Work
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transparent, predictable process from idea to launch
          </p>
        </ScrollReveal>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.phase}
                  type="fade-up"
                  delay={index * 0.15}
                  threshold={0.1}
                  className="relative"
                >
                  <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-ekodrix-green/30 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-ekodrix-green/10">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-ekodrix-green to-resellerpro-blue-medium flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <div className={'w-16 h-16 rounded-xl bg-gradient-to-br ' + step.color + ' flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-ekodrix-green animate-pulse" />
                      {step.duration}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-ekodrix-green transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/70 mb-6 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                        Key Deliverables
                      </p>
                      {step.deliverables.map((deliverable) => (
                        <div
                          key={deliverable}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-ekodrix-green flex-shrink-0 mt-0.5" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-ekodrix-green/50" />
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
        
        <ScrollReveal type="fade-up" delay={0.4} threshold={0.1} className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Ready to turn your idea into reality?
          </p>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ekodrix-green text-ekodrix-charcoal-dark font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
