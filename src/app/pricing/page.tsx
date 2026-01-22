import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - EKODRIX | Transparent Project-Based Pricing",
  description: "Transparent pricing for world-class SaaS development. Fixed-price projects from $50K. Get a custom quote in 24 hours.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20 bg-ekodrix-charcoal-dark">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(40,179,106,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(47,128,237,0.15),transparent_45%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-ekodrix-green mb-6 backdrop-blur-sm">
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              World-Class Development<br />
              <span className="gradient-text">Predictable Pricing</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              No hourly rates. No surprises. Fixed-price projects with weekly milestones.
              Invest in a product, not in hours.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">How We Price Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We believe in value-based pricing. You pay for results, not for time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MVP/Starter */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-ekodrix-green/30 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">MVP Launch</h3>
                <p className="text-white/50 text-sm mb-6">For validating your idea fast</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$50K - $75K</span>
                  <span className="text-white/50 text-sm ml-2">fixed price</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "30-day delivery guarantee",
                    "Core feature set (3-5 features)",
                    "Responsive web app",
                    "Authentication & dashboard",
                    "Database & API setup",
                    "Production deployment",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Full Product */}
            <div className="bg-[#111] rounded-2xl p-8 border-2 border-ekodrix-green/50 hover:border-ekodrix-green transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Full Product</h3>
                <p className="text-white/50 text-sm mb-6">Complete SaaS platform</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$100K - $250K</span>
                  <span className="text-white/50 text-sm ml-2">fixed price</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "8-12 week delivery",
                    "Full feature set (10-15 features)",
                    "Multi-tenant architecture",
                    "Payment & billing integration",
                    "Admin dashboard & analytics",
                    "API development",
                    "Performance optimization",
                    "Post-launch support (30 days)",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-resellerpro-blue-medium/30 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                <p className="text-white/50 text-sm mb-6">Complex platforms & scale</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$250K+</span>
                  <span className="text-white/50 text-sm ml-2">custom quote</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom timeline (12+ weeks)",
                    "Unlimited features",
                    "Microservices architecture",
                    "AI/ML integration",
                    "Mobile apps (iOS +Android)",
                    "DevOps & infrastructure",
                    "Dedicated team (4-6 engineers)",
                    "24/7 support & SLA",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-resellerpro-blue-medium flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              What's Always Included
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Every project, regardless of size, comes with these standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clean Code",
                description: "TypeScript, tested, documented. Code you can maintain.",
              },
              {
                title: "Weekly Demos",
                description: "See progress every 7 days. Give feedback instantly.",
              },
              {
                title: "Production Ready",
                description: "Deployed to cloud, monitored, secure, scalable.",
              },
              {
                title: "Knowledge Transfer",
                description: "Full documentation, video walkthroughs, codebase tour.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#111] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Why fixed price instead of hourly?",
                a: "Fixed pricing aligns our incentives. We're motivated to ship fast and efficiently, not to drag out hours. You get predictable budgets and we focus on delivering value, not logging time.",
              },
              {
                q: "Can I pay in installments?",
                a: "Yes. Typical structure: 30% to start, 40% at mid-point milestone, 30% on delivery. We're flexible and can structure payments around your cash flow.",
              },
              {
                q: "What if requirements change mid-project?",
                a: "We build flexibility into every project. Minor changes are included. Major scope changes are quoted separately and added as new milestones. You stay in control.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "All projects include 30 days post-launch support. After that, we offer monthly retainers starting at $5K/month for maintenance, updates, and new features.",
              },
              {
                q: "How do I get started?",
                a: "Book a free 30-minute consultation. We'll understand your vision, suggest an approach, and provide a detailed quote within 24 hours. No obligation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.q}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-ekodrix-green/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Build Your Product?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Get a detailed quote in 24 hours. Free consultation, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ekodrix-green text-ekodrix-charcoal-dark font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Free consultation • No obligation • Quote in 24 hours
          </p>
        </div>
      </section>
    </main>
  );
}
