"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const caseStudies = [
  {
    id: "resellerpro",
    client: "ResellerPro",
    industry: "SaaS CRM",
    demoUrl: "https://resellerpro.in",
    challenge: "Providing an automated online selling platform for growing retail businesses drowning in manual WhatsApp messages and lost orders.",
    solution: "A high-velocity Next.js architecture with deeply integrated WhatsApp business APIs for zero-latency messaging and store creation.",
    results: [
      { metric: "Active Users", value: "50+", change: "Growing" },
      { metric: "Order Mgt.", value: "Automated", change: "Tested" },
      { metric: "Server Uptime", value: "99.9%", change: "Stable" },
    ],
    tech: ["Next.js", "Supabase", "WhatsApp API"],
    testimonial: {
      text: "The infrastructure Ekodrix built completely removed our operational bottleneck.",
      author: "Rajesh Kumar",
      position: "Founder, ResellerPro User",
    },
  },
  {
    id: "vidya-academy",
    client: "Vidya Academy",
    industry: "EdTech Platform",
    demoUrl: "https://vidyaacademy.ekodrix.com",
    challenge: "Traditional learning management systems were too clunky and slow for their modern student base.",
    solution: "A bespoke NEXT.js web application built for instant load speeds, seamless video streaming, and mobile-first UX.",
    results: [
      { metric: "Page Spd Score", value: "99/100", change: "Blazing" },
      { metric: "Course Starts", value: "500+", change: "+120%" },
      { metric: "Completion", value: "85%", change: "Industry Avg" },
    ],
    tech: ["React", "Tailwind", "Vercel"],
    testimonial: {
      text: "Our student engagement skyrocketed purely because the new system is so beautiful to use.",
      author: "Vidya Academy Team",
      position: "Administration",
    },
  },
  {
    id: "kl59-mens-fashion",
    client: "KL-59 Men's Fashion",
    industry: "E-Commerce Retail",
    demoUrl: "https://www.kl-59mensfashion.in/",
    imageUrl: "/images/case-studies/kl59_mockup.png",
    challenge: "Streamlining direct-to-customer fashion sales across WhatsApp without losing the premium storefront experience.",
    solution: "A high-conversion digital catalog integrated directly with WhatsApp order triggers, allowing seamless browsing and instant purchasing.",
    results: [
      { metric: "Order Flow", value: "WhatsApp", change: "Direct" },
      { metric: "Store Speed", value: "Sub-Second", change: "Blazing" },
      { metric: "UI/UX", value: "Mobile-First", change: "Optimized" },
    ],
    tech: ["Next.js", "WhatsApp API", "Tailwind"],
    testimonial: {
      text: "Having a premium digital catalog completely changed how we handle customer orders. It's fast, elegant, and directly tied to our WhatsApp.",
      author: "KL-59 Team",
      position: "Management",
    },
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-ekodrix-green/5 rounded-full blur-[150px] -translate-y-1/2 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-ekodrix-green shadow-[0_0_8px_rgba(40,179,106,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase font-mono">Portfolio</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
            <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6 max-w-3xl mx-auto">
              Our proven engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
                track record
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <ScrollReveal
              key={study.id}
              type="fade-up"
              delay={index * 0.15}
              threshold={0.1}
            >
              <div className="bg-[#111111]/80 backdrop-blur-sm rounded-[2.5rem] p-8 lg:p-12 border border-white/5 hover:border-ekodrix-green/30 shadow-2xl transition-all duration-500 overflow-hidden relative group">
                
                {/* Subtle card glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
                  
                  {/* Left content block */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[0.65rem] font-bold tracking-widest text-ekodrix-green uppercase">
                        {study.industry}
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-[2.5rem] leading-[1.1] font-display font-bold mb-6 text-[#FAFAFA] tracking-tight">
                      {study.client}
                    </h3>

                    <div className="space-y-5 mb-8">
                      <div>
                        <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Challenge</p>
                        <p className="text-white/70 font-light leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Engineering Solution</p>
                        <p className="text-white/80 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/5">
                      {study.results.map((result, i) => (
                        <div key={i}>
                          <p className="text-[0.65rem] text-white/40 uppercase tracking-widest mb-1">{result.metric}</p>
                          <p className="text-2xl font-display font-bold text-white mb-1">{result.value}</p>
                          <span className="text-[0.65rem] font-mono text-ekodrix-green bg-ekodrix-green/10 px-1.5 py-0.5 rounded">
                            {result.change}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                      <div className="flex gap-2">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[0.7rem] rounded-md bg-white/[0.03] border border-white/5 text-white/50 font-mono tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side Iframe block */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4 px-2">
                       <p className="text-white/50 text-xs font-mono tracking-wide">Live Preview</p>
                       <a
                         href={study.demoUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-ekodrix-green hover:text-[#111] hover:border-ekodrix-green transition-all"
                       >
                         Open Application
                         <ExternalLink className="w-3 h-3" />
                       </a>
                    </div>
                    {study.imageUrl ? (
                      <div className="relative w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-2xl overflow-hidden border-[4px] border-[#1a1a1a] bg-[#0A0A0A] shadow-[0_0_40px_rgba(0,0,0,0.5)] transform-gpu group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer">
                        <img 
                          src={study.imageUrl} 
                          alt={`${study.client} Preview`} 
                          className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    ) : (
                      <div className="relative w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-2xl overflow-hidden border-[4px] border-[#1a1a1a] bg-[#0A0A0A] shadow-[0_0_40px_rgba(0,0,0,0.5)] transform-gpu group-hover:scale-[1.01] transition-transform duration-500">
                        <iframe
                          src={study.demoUrl}
                          title={`${study.client} Demo`}
                          className="absolute inset-0 w-full h-full pointer-events-auto"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-popups"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal type="fade-up" delay={0.4} threshold={0.1} className="mt-16 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white/90 font-medium text-[0.95rem] hover:bg-white/5 hover:border-white/20 hover:text-white backdrop-blur-sm transition-all duration-300"
          >
            View Entire Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
