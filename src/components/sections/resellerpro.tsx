"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  MessageSquare,
  Globe2,
  Store,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { ResellerProLogo } from "@/components/logos/resellerpro-logo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const features = [
  {
    title: "Store Creation",
    description: "Get your own branded online store in minutes. Add and share unlimited products with one click.",
    icon: Store,
    metric: "Complete Selling Platform",
  },
  {
    title: "Order Management",
    description: "No more messy chats or lost orders. Track inventory, customers, and fulfillment in a unified dashboard.",
    icon: TrendingUp,
    metric: "Everything in one place",
  },
  {
    title: "Analytics & Reports",
    description: "Eliminate forgotten follow-ups. Get actionable sales insights and real-time data to grow your business faster.",
    icon: Globe2,
    metric: "No more blind spots",
  },
  {
    title: "WhatsApp API",
    description: "Send automated updates, invoices, and catalogs securely without managing multiple chats manually.",
    icon: MessageSquare,
    metric: "Automated Growth",
  },
];

export function ResellerPro() {
  return (
    <section id="resellerpro" className="relative py-24 lg:py-32 bg-[#111111] overflow-hidden">
      
      {/* Background Deep Glows specifically for ResellerPro (Blue/Purple aesthetic) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/3 opacity-40" />
        <div className="absolute inset-0 bg-[url('/images/hero/grid.svg')] bg-center opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Glass Container */}
        <div className="relative rounded-[2.5rem] bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-hidden">
          
          {/* Subtle inner noise texture */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('/images/noise.png')] mix-blend-overlay pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-0 relative z-10">
            
            {/* Left Column: Brand & Copy */}
            <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              
              <ScrollReveal type="fade-up" threshold={0.1}>
                {/* Brand Header */}
                <div className="flex flex-col items-start gap-2 mb-8">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                    <span className="text-[0.65rem] font-bold tracking-widest text-blue-400 uppercase">Our Product</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <ResellerProLogo size="md" className="drop-shadow-lg" />
                    <h3 className="text-3xl font-display font-bold tracking-tight text-white mt-1">ResellerPro</h3>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6">
                  Run Your Business.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Not Your Inbox.
                  </span>
                </h2>
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-white/60 font-light mb-10">
                  Stop managing orders manually through messy WhatsApp chats. ResellerPro is your complete selling platform to track inventory, follow up, and launch your own branded online store in minutes. All your business in one place.
                </p>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.2} threshold={0.1}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://resellerpro.in/signup"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-[0.95rem] tracking-wide hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://resellerpro.in"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-white/80 font-medium text-[0.95rem] hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    View Product Page
                  </Link>
                </div>
              </ScrollReveal>
              
              <ScrollReveal type="fade-up" delay={0.3} threshold={0.1}>
                <div className="mt-12 flex items-center gap-4 text-sm font-medium text-white/40">
                  <div className="flex -space-x-2">
                    {[65, 47, 33].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border border-[#0A0A0A] overflow-hidden relative">
                        <Image 
                          src={`https://i.pravatar.cc/100?img=${i}`} 
                          alt="User avatar" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p>Trusted by <strong className="text-white/80">50+ Active</strong> resellers across India</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Key Features Grid */}
            <div className="p-10 md:p-14 lg:p-16 bg-[#111111]/40 flex flex-col justify-center relative">
              {/* Internal glow specifically for right panel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <ScrollReveal key={feature.title} type="fade-up" delay={0.2 + (i * 0.1)} threshold={0.1}>
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 hover:border-blue-500/20 group h-full">
                        <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-5 group-hover:border-blue-500/40 transition-colors">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h4 className="text-[1.1rem] font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-white/50 leading-relaxed font-light mb-4 text-balance">
                          {feature.description}
                        </p>
                        <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {feature.metric}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
