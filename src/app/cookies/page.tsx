"use client";

import { Cookie, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CookiePolicy() {
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
                <Cookie className="w-6 h-6 text-ekodrix-green" />
              </div>
              <span className="text-white/60 font-medium">Legal Documentation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-white/40 font-medium">Last Updated: {lastUpdated}</p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <div className="space-y-12">
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">1. What Are Cookies?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Cookies</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-4 ml-4">
              <li>Understand how you use our website</li>
              <li>Remember your preferences and settings</li>
              <li>Improve our website's performance and user experience</li>
              <li>Secure our website and prevent fraud</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Essential Cookies</h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Analytics Cookies</h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Functional Cookies</h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies allow our website to remember choices you make (such as your user name or language) and provide enhanced features.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">4. Managing Cookies</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or alert you when cookies are being sent. However, if you disable cookies, some parts of our website may not function correctly.
            </p>
            <p className="text-white/70 leading-relaxed">
              To find out more about how to manage and delete cookies, visit <Link href="https://aboutcookies.org" className="text-ekodrix-green hover:underline">aboutcookies.org</Link>.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">5. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">6. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <p className="text-ekodrix-green font-semibold mt-2">privacy@ekodrix.com</p>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
