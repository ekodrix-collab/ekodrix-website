"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PrivacyPolicy() {
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
                <Shield className="w-6 h-6 text-ekodrix-green" />
              </div>
              <span className="text-white/60 font-medium">Legal Documentation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-white/40 font-medium">Last Updated: {lastUpdated}</p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <div className="space-y-12">
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              At EKODRIX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-white/70 leading-relaxed">
              By using our website, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring that your privacy is protected and that we comply with relevant data protection laws.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-4 ml-4">
              <li>Inquire about our services via the contact form</li>
              <li>Sign up for our products (like ResellerPro)</li>
              <li>Subscribe to our newsletter or blog updates</li>
              <li>Communicate with us via email or social media</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              This information may include your name, email address, phone number, and business details. We also collect non-personal data such as browser type, IP address, and pages visited to improve our website experience.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-4 ml-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
            <p className="text-white/70 leading-relaxed">
              The security of your data is important to us. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please remember that no method of transmission over the Internet is 100% secure.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">5. Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed">
              We may employ third-party companies and individuals to facilitate our service, provide service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">6. Your Rights</h2>
            <p className="text-white/70 leading-relaxed">
              You have the right to access, update, or delete the personal information we have on you. If you would like to exercise these rights, please contact us at the email provided below.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">7. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-ekodrix-green font-semibold mt-2">hello@ekodrix.com</p>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
