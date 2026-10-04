import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - EKODRIX | Transparent Project-Based Pricing",
  description: "Transparent pricing for world-class SaaS development. Fixed-price projects for every stage. Get a custom quote in 24 hours.",
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
              <span className="gradient-text">Startup-Friendly Pricing</span>
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
            {/* Starter / MVP */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-ekodrix-green/30 transition-all duration-300">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-ekodrix-green/10 text-ekodrix-green text-xs font-semibold uppercase tracking-wider mb-3">
                  Entry Hook • Fast Launch
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Starter Website & MVP</h3>
                <p className="text-white/50 text-sm mb-6">For small businesses, startups & fast validation</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-1">
                    $199 – $499 <span className="text-sm font-normal text-white/50">USD</span>
                  </div>
                  <div className="text-sm text-ekodrix-green font-medium">
                    AED 750 – AED 1,800 <span className="text-white/40 font-normal">| ₹15K – ₹40K</span>
                  </div>
                  <span className="text-white/40 text-xs mt-1 block">fixed transparent pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "7-14 day rapid delivery",
                    "Modern high-converting Next.js web application",
                    "Direct WhatsApp lead capture button",
                    "Mobile & tablet responsive perfection",
                    "Basic SEO & Google Search Console setup",
                    "Free SSL & production cloud deployment",
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
                <h3 className="text-2xl font-bold mb-2 text-white">Growth & Custom Web App</h3>
                <p className="text-white/50 text-sm mb-6">Complete web portal, SaaS MVP & E-Commerce</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-1">
                    $800 – $2,500 <span className="text-sm font-normal text-white/50">USD</span>
                  </div>
                  <div className="text-sm text-ekodrix-green font-medium">
                    AED 2,900 – AED 9,000 <span className="text-white/40 font-normal">| ₹65K – ₹2L</span>
                  </div>
                  <span className="text-white/40 text-xs mt-1 block">fixed milestone-based pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "4-8 week milestone delivery",
                    "Full feature set & custom PostgreSQL/MongoDB database",
                    "Admin dashboard & analytics reporting",
                    "Payment integration (Stripe, Telr, HyperPay, Razorpay)",
                    "Bilingual Arabic/English UX capability",
                    "API development & custom integrations",
                    "Performance optimization (<1s load time)",
                    "Post-launch support & warranty (30 days)",
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
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise & Mobile Apps</h3>
                <p className="text-white/50 text-sm mb-6">Complex platforms, iOS/Android & scale</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-1">
                    $3,500+ <span className="text-sm font-normal text-white/50">USD</span>
                  </div>
                  <div className="text-sm text-blue-400 font-medium">
                    AED 13,000+ <span className="text-white/40 font-normal">| ₹3L+</span>
                  </div>
                  <span className="text-white/40 text-xs mt-1 block">custom proposal & SLA</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom timeline (8-16+ weeks)",
                    "Native or cross-platform Mobile Apps (iOS + Android)",
                    "AI workflow automation & LLM integration",
                    "Microservices & high-concurrency cloud scaling",
                    "Dedicated engineering team & Project Lead",
                    "Enterprise NDA & full IP code ownership",
                    "Dedicated SLA & 24/7 technical support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
                a: "All projects include 30 days post-launch support. After that, we offer monthly retainers starting at ₹15,000/month for maintenance, updates, and new features.",
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
