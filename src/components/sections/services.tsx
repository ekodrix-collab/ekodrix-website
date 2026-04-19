"use client";

import {
  Cloud,
  Brain,
  Globe,
  Smartphone,
  Server,
  Palette,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    id: "saas-development",
    title: "SaaS Product Development",
    description: "30-day MVP delivery • Built for 10K+ users from Day 1",
    icon: Cloud,
    features: [
      "Multi-tenant Architecture",
      "Subscription & Billing",
      "Admin Dashboards",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "ai-integration",
    title: "AI-Powered Solutions",
    description: "Production-ready AI in 4 weeks • 50% cost vs hiring ML engineers",
    icon: Brain,
    features: [
      "Custom AI Models",
      "ChatGPT Integration",
      "Workflow Automation",
    ],
    tech: ["OpenAI", "Python", "LangChain"],
  },
  {
    id: "web-development",
    title: "Modern Web Applications",
    description: "Lighthouse 95+ guaranteed • Conversion rates 2x industry average",
    icon: Globe,
    features: [
      "Progressive Web Apps",
      "E-commerce Platforms",
      "Marketing Websites",
    ],
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    id: "mobile-development",
    title: "Mobile Applications",
    description: "Native experiences for iOS and Android platforms",
    icon: Smartphone,
    features: [
      "React Native Apps",
      "Flutter Development",
      "App Store Deployment",
    ],
    tech: ["React Native", "Flutter", "Firebase"],
  },
  {
    id: "backend-api",
    title: "Backend & API Systems",
    description: "Scalable infrastructure that handles massive data securely",
    icon: Server,
    features: [
      "RESTful APIs",
      "GraphQL Services",
      "Cloud Architecture",
    ],
    tech: ["Node.js", "Python", "AWS"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    description: "Designs that convert, experiences that delight your users",
    icon: Palette,
    features: [
      "Design Systems",
      "Prototyping",
      "Conversion Optimization",
    ],
    tech: ["Figma", "Framer", "React"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Texture matching Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-ekodrix-green/5 rounded-full blur-[120px] -translate-y-1/2 opacity-40" />
        <div className="absolute inset-0 bg-[url('/images/hero/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-ekodrix-green shadow-[0_0_8px_rgba(40,179,106,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase font-mono">Expertise</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
            <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6 max-w-3xl mx-auto">
              End-to-End{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
                Engineering
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.2} threshold={0.1}>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-white/60 max-w-2xl mx-auto font-light">
              We don't just write code. We build scalable digital products that drive revenue, automate workflows, and outpace your competition.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid with Premium Hover States */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.id}
                type="fade-up"
                delay={index * 0.1}
                threshold={0.1}
                className="h-full group"
              >
                <Link href={`/services#${service.id}`} className="block h-full cursor-pointer relative rounded-[2rem] bg-[#111111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-ekodrix-green/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(40,179,106,0.15)]">
                  
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 h-full flex flex-col">
                    
                    {/* Glassmorphic Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-ekodrix-green/10 group-hover:border-ekodrix-green/20 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-white/80 group-hover:text-ekodrix-green transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-display text-[#FAFAFA] mb-3 group-hover:text-ekodrix-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/60 font-light mb-6 text-[0.95rem] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-white/70 text-[0.9rem]">
                          <div className="w-1.5 h-1.5 rounded-full bg-ekodrix-green/50 group-hover:bg-ekodrix-green transition-colors duration-300" />
                          <span className="font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex gap-2">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[0.7rem] rounded-md bg-white/[0.03] border border-white/5 text-white/50 font-mono tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-ekodrix-green flex items-center justify-center group-hover:bg-ekodrix-green transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0a0a0a] transition-colors" />
                      </div>
                    </div>

                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
