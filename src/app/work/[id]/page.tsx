"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Database,
  Layers,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const caseStudiesContent = {
  resellerpro: {
    title: "ResellerPro",
    client: "EKODRIX Own Product",
    industry: "Online Sellers CRM",
    tagline: "Engineering India's most efficient reseller CRM.",
    description: "Built from the ground up to solve the chaos of managing online sellers across Instagram, WhatsApp, and social channels. ResellerPro is now the go-to CRM for small resellers looking to scale their operations with automation and data-driven insights.",
    challenge: "Small online resellers were struggling with manual order tracking through WhatsApp groups and Instagram DMs, opaque profit margins, and disconnected communication channels. As seller networks grew, businesses faced massive operational overhead and data loss. The system needed to handle thousands of concurrent small sellers and automate their entire workflow from catalog sharing to final payouts.",
    solution: "We architected a robust SaaS ecosystem using Next.js and Supabase. The core innovation was a deep integration with the WhatsApp Business API, allowing for automated order confirmations, shipping updates, and catalog distribution. We implemented a real-time profitability engine that calculates margins per transaction, giving sellers instant visibility into their earnings.",
    results: [
      { label: "Monthly Volume", value: "₹25L+", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Active Sellers", value: "150+", icon: Users, color: "text-blue-400" },
      { label: "Uptime", value: "99.9%", icon: Shield, color: "text-purple-400" },
      { label: "Automation", value: "70%", icon: Zap, color: "text-orange-400" },
    ],
    techStack: [
      { name: "Next.js", icon: Globe },
      { name: "Supabase", icon: Database },
      { name: "WhatsApp API", icon: Zap },
      { name: "PostgreSQL", icon: Database },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Framer Motion", icon: Cpu },
    ],
    testimonial: {
      text: "ResellerPro changed everything for our network. We went from managing orders manually to handling 150+ sellers with the same team size. The automation is a game changer.",
      author: "Rajesh Kumar",
      position: "Founder, ResellerPro User",
    },
    nextPath: "vidya-academy"
  },
  "vidya-academy": {
    title: "Vidya Academy",
    client: "Vidya Academy",
    industry: "EdTech",
    tagline: "Transform your future with expert-led professional training.",
    description: "A modern, high-converting web platform designed to attract students and showcase expert-led courses. Vidya Academy connects aspiring professionals with industry-recognized training programs and a clear pathway to career growth.",
    challenge: "The institute needed a digital platform that could effectively communicate its training quality, manage course batches, and convert visitors into enrolled students. The existing online presence was outdated and failed to capture the institute's credibility, with no streamlined way for students to explore courses or initiate enrollment.",
    solution: "We built a sleek, performance-first website using Next.js and Tailwind CSS, deployed on Vercel for blazing-fast load times. The platform features a dynamic course catalog, batch scheduling views, student testimonial showcases, and clear call-to-actions for enrollment. The design was crafted to reflect a modern, job-ready training brand with 95% placement credibility.",
    results: [
      { label: "Enrollments", value: "200+", icon: Users, color: "text-ekodrix-green" },
      { label: "Course Completion", value: "85%", icon: TrendingUp, color: "text-blue-400" },
      { label: "Avg. Rating", value: "4.7/5", icon: Shield, color: "text-yellow-400" },
      { label: "Reviews", value: "50+", icon: Zap, color: "text-orange-400" },
    ],
    techStack: [
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Vercel", icon: Zap },
      { name: "Supabase", icon: Database },
      { name: "Framer Motion", icon: Cpu },
      { name: "TypeScript", icon: Globe },
    ],
    testimonial: {
      text: "EKODRIX transformed our vision into a clean, modern platform. The design and performance exceeded our expectations and inquiries grew steadily from day one.",
      author: "Vidya Academy Team",
      position: "Vidya Academy",
    },
    nextPath: "habitek-interiors"
  },
  "habitek-interiors": {
    title: "Habitek Interiors",
    client: "Habitek Interiors & Realty",
    industry: "Interior Design & Realty",
    tagline: "Where design meets elegance.",
    description: "A visually rich, premium portfolio website for one of Kerala's leading interior design and realty firms. Habitek's online presence now reflects the sophistication and craftsmanship of their work.",
    challenge: "Habitek needed a website that could match the elegance of their interior projects. Their previous site lacked visual impact, had no proper project gallery, and didn't generate meaningful client enquiries. They were serving across Kerala but their online brand didn't communicate the premium, pan-Kerala positioning they deserved.",
    solution: "We designed and developed a visually stunning portfolio-driven website using Next.js and Framer Motion. The site features immersive full-screen project galleries, smooth scroll-based animations, and a seamless enquiry form integrated with their CRM. Every design element was tailored to evoke the sophistication of luxury interiors — from the color palette to the typography.",
    results: [
      { label: "Client Reach", value: "Kerala", icon: Globe, color: "text-ekodrix-green" },
      { label: "Enquiries", value: "50+/mo", icon: TrendingUp, color: "text-blue-400" },
      { label: "Bounce Rate", value: "-35%", icon: Shield, color: "text-purple-400" },
      { label: "Load Time", value: "<2s", icon: Zap, color: "text-orange-400" },
    ],
    techStack: [
      { name: "Next.js", icon: Globe },
      { name: "Framer Motion", icon: Cpu },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Vercel", icon: Zap },
      { name: "TypeScript", icon: Globe },
      { name: "Supabase", icon: Database },
    ],
    testimonial: {
      text: "Our online presence finally matches the quality of our designs. EKODRIX captured our brand essence perfectly.",
      author: "Habitek Team",
      position: "Habitek Interiors & Realty",
    },
    nextPath: "genz-store"
  },
  "genz-store": {
    title: "Gen-Z",
    client: "Gen-Z Streetwear",
    industry: "E-commerce",
    tagline: "The new standard of style.",
    description: "A bold, trend-forward men's e-commerce store built for the generation that refuses to settle. Gen-Z combines premium streetwear curation with a cutting-edge shopping experience.",
    challenge: "The brand needed an online store that didn't just list products — it needed to make a statement. Competing in the crowded men's fashion space required a unique visual identity, lightning-fast browsing, and a seamless checkout experience. The store had to feel as premium as the clothing it sold, with dynamic product showcases that drive engagement.",
    solution: "We built a high-performance e-commerce platform using Next.js with a custom design system inspired by luxury streetwear aesthetics. The storefront features dynamic hero sections with seasonal drops, an intelligent product filtering system, smooth cart management, and integrated payment processing via Stripe. The UI was designed with bold typography, aggressive silhouettes, and editorial-style product photography layouts.",
    results: [
      { label: "Products Listed", value: "120+", icon: Layers, color: "text-ekodrix-green" },
      { label: "Monthly Visitors", value: "2,500+", icon: Shield, color: "text-blue-400" },
      { label: "Conversion Rate", value: "3.2%", icon: TrendingUp, color: "text-purple-400" },
      { label: "Performance", value: "95/100", icon: Zap, color: "text-orange-400" },
    ],
    techStack: [
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Stripe", icon: Zap },
      { name: "Vercel", icon: Cpu },
      { name: "TypeScript", icon: Globe },
      { name: "Framer Motion", icon: Cpu },
    ],
    testimonial: {
      text: "Gen-Z isn't just a store — it's a statement. EKODRIX nailed the vibe and the tech behind it.",
      author: "Gen-Z Team",
      position: "Gen-Z Streetwear",
    },
    nextPath: "resellerpro"
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  const content = caseStudiesContent[id as keyof typeof caseStudiesContent];

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ekodrix-charcoal-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link href="/work" className="text-ekodrix-green hover:underline">Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ekodrix-charcoal-dark overflow-hidden pt-28 pb-20">
      <ParticleBackground particleCount={40} className="fixed inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal type="fade-up" duration={0.4}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-ekodrix-green transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <section className="mb-20">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-ekodrix-green/15 text-ekodrix-green text-sm font-semibold border border-ekodrix-green/20">
                {content.industry}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 font-medium">{content.client}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              {content.title}
            </h1>
            <p className="text-2xl sm:text-3xl text-ekodrix-green font-medium mb-12 max-w-4xl tracking-tight leading-tight">
              {content.tagline}
            </p>

            <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
          </ScrollReveal>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-16">
            <ScrollReveal type="fade-up" delay={0.2} threshold={0.1}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-ekodrix-green/10 flex items-center justify-center">
                  <span className="text-ekodrix-green text-lg font-bold">1</span>
                </div>
                The Challenge
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {content.challenge}
              </p>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.3} threshold={0.1}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-ekodrix-green/10 flex items-center justify-center">
                  <span className="text-ekodrix-green text-lg font-bold">2</span>
                </div>
                Our Solution
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {content.solution}
              </p>
            </ScrollReveal>

            <ScrollReveal type="blur-in" delay={0.4} threshold={0.1} className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <p className="text-2xl text-white italic font-medium leading-relaxed mb-8">
                "{content.testimonial.text}"
              </p>
              <div>
                <p className="text-xl font-bold text-white">{content.testimonial.author}</p>
                <p className="text-white/60">{content.testimonial.position}</p>
              </div>
            </ScrollReveal>
          </div>

          <aside className="space-y-12 lg:sticky lg:top-32 h-fit">
            <ScrollReveal type="slide-left" delay={0.5} threshold={0.1} className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-8">Results Delivered</h3>
              <div className="space-y-6">
                {content.results.map((result, i) => {
                  const Icon = result.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${result.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{result.value}</p>
                        <p className="text-sm text-white/50 uppercase tracking-widest">{result.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide-left" delay={0.6} threshold={0.1} className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-8">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {content.techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 text-white/70">
                      <Icon className="w-4 h-4 text-ekodrix-green" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </aside>
        </div>

        {/* Footer Navigation */}
        <section className="mt-40 border-t border-white/10 pt-20">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <Link
              href={`/work/${content.nextPath}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div>
                <p className="text-white/40 mb-2 uppercase tracking-widest font-bold">Next Project</p>
                <h4 className="text-4xl sm:text-6xl font-display font-bold text-white group-hover:text-ekodrix-green transition-colors">
                  {caseStudiesContent[content.nextPath as keyof typeof caseStudiesContent].title}
                </h4>
              </div>
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-ekodrix-green group-hover:bg-ekodrix-green transition-all">
                <ArrowRight className="w-8 h-8 text-white group-hover:text-ekodrix-charcoal-dark transition-colors" />
              </div>
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
