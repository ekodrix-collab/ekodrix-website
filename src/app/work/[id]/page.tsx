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
    industry: "E-commerce CRM",
    tagline: "Engineering India's most efficient reseller CRM.",
    description: "Built from the ground up to solve the chaos of manual reseller operations. ResellerPro is now the go-to platform for businesses looking to scale their reseller networks with automation and data-driven insights.",
    challenge: "Resellers were struggling with manual order tracking through WhatsApp groups, opaque profit margins, and disconnected communication channels. As networks grew, businesses faced massive operational overhead and data loss. The system needed to handle thousands of concurrent sellers and automate their entire workflow from catalog sharing to final payouts.",
    solution: "We architected a robust SaaS ecosystem using Next.js and Supabase. The core innovation was a deep integration with the WhatsApp Business API, allowing for automated order confirmations, shipping updates, and catalog distribution. We implemented a real-time profitability engine that calculates margins per transaction, giving sellers instant visibility into their earnings.",
    results: [
      { label: "Monthly Volume", value: "₹5Cr+", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Active Sellers", value: "2,000+", icon: Users, color: "text-blue-400" },
      { label: "Uptime", value: "99.9%", icon: Shield, color: "text-purple-400" },
      { label: "Automation", value: "85%", icon: Zap, color: "text-orange-400" },
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
      text: "ResellerPro changed everything for our network. We went from managing 50 resellers manually to over 2,000 with the same team size. The automation is flawless.",
      author: "Rajesh Kumar",
      position: "Founder, ResellerPro User",
    },
    nextPath: "fintech-platform"
  },
  "fintech-platform": {
    title: "PayFlow Gateway",
    client: "PayFlow Inc.",
    industry: "FinTech",
    tagline: "Rebuilding the backbone of digital payments.",
    description: "A high-performance payment processing platform designed for enterprise reliability and sub-second latency. PayFlow handles mission-critical transactions for thousands of daily users.",
    challenge: "The client's legacy system was plagued by high latency and transaction failures during peak traffic, leading to significant revenue loss. They needed a payment gateway that could process thousands of transactions per minute with near-zero downtime and enterprise-grade security compliance.",
    solution: "We rebuilt the entire infrastructure using a distributed microservices architecture on Node.js and Kubernetes. By implementing advanced caching layers with Redis and optimizing PostgreSQL indexing, we achieved sub-second transaction processing times. The system was further fortified with automated fraud detection and multi-region AWS redundancy.",
    results: [
      { label: "Transactions", value: "₹15Cr+", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Latency", value: "< 1s", icon: Zap, color: "text-yellow-400" },
      { label: "Success Rate", value: "99.95%", icon: Shield, color: "text-green-400" },
      { label: "Security", value: "PCI-DSS", icon: Shield, color: "text-blue-400" },
    ],
    techStack: [
      { name: "Node.js", icon: Globe },
      { name: "Kubernetes", icon: Cpu },
      { name: "Redis", icon: Zap },
      { name: "AWS", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "Docker", icon: Layers },
    ],
    testimonial: {
      text: "EKODRIX delivered an engineering masterpiece. Since moving to the new gateway, our transaction success rate has never been higher, even during our biggest sales events.",
      author: "Amit Shah",
      position: "CEO, PayFlow",
    },
    nextPath: "healthtech-saas"
  },
  "healthtech-saas": {
    title: "CareFlow SaaS",
    client: "CareFlow Health",
    industry: "HealthTech",
    tagline: "Modernizing patient care with precision.",
    description: "A HIPAA-compliant clinical management platform that streamlines patient scheduling, records, and billing for modern healthcare providers.",
    challenge: "Clinic staff were drowning in administrative overhead, leading to scheduling errors and high patient no-show rates. The goal was to build a secure, intuitive platform that automates patient communication and provides clinicians with a clear, real-time view of their practice.",
    solution: "We developed a secure scheduling ecosystem using React and FastAPI. The platform features an automated patient notification system via SMS and Email, reducing no-shows by 40%. We ensured full HIPAA compliance with end-to-end encryption for all patient data and integrated a seamless billing module.",
    results: [
      { label: "Providers", value: "350+", icon: Users, color: "text-blue-400" },
      { label: "Appointments", value: "8,000/mo", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Efficiency", value: "+35%", icon: Zap, color: "text-orange-400" },
      { label: "Compliance", value: "HIPAA", icon: Shield, color: "text-green-400" },
    ],
    techStack: [
      { name: "React", icon: Globe },
      { name: "Python", icon: Cpu },
      { name: "AWS", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "FastAPI", icon: Zap },
      { name: "Docker", icon: Layers },
    ],
    testimonial: {
      text: "The efficiency gains were immediate. Our clinic staff is less stressed, and our patients love the automated reminders. EKODRIX truly understands modern healthcare needs.",
      author: "Priya Sharma",
      position: "CTO, CareFlow",
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
