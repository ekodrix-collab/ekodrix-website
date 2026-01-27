"use client";

import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function TermsOfService() {
  const lastUpdated = "January 27, 2026";

  return (
    <main className="min-h-screen bg-ekodrix-charcoal-dark overflow-hidden pt-28 pb-20">
      <ParticleBackground particleCount={30} className="fixed inset-0 opacity-20" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal type="fade-up" duration={0.4}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-ekodrix-green transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <section className="mb-16">
          <ScrollReveal type="fade-up" threshold={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-ekodrix-green/10 flex items-center justify-center border border-ekodrix-green/20">
                <FileText className="w-6 h-6 text-ekodrix-green" />
              </div>
              <span className="text-white/60 font-medium">Legal Documentation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-white/40 font-medium">Last Updated: {lastUpdated}</p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <div className="space-y-12">
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">1. Agreement to Terms</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              By accessing or using the EKODRIX website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">2. Services</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              EKODRIX provides software development, AI integration, and digital product consulting services. We reserve the right to withdraw or amend our services without notice. We will not be liable if for any reason all or any part of the website is unavailable at any time or for any period.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">3. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by EKODRIX and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">4. Product Use (ResellerPro)</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Users of ResellerPro must adhere to our fair use policy and WhatsApp's official Terms of Service. Any misuse of automation for spamming or prohibited activities will result in immediate account termination without refund.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">5. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              In no event will EKODRIX, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website or services.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">6. Governing Law</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">7. Changes to Terms</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-ekodrix-green font-semibold mt-2">legal@ekodrix.com</p>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
