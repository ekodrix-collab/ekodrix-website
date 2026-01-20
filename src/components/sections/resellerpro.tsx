"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  TrendingUp,
  MessageSquare,
  Shield,
  ArrowRight,
  Play,
} from "lucide-react";
import Link from "next/link";
import { ResellerProLogo } from "@/components/logos/resellerpro-logo";

const features = [
  {
    title: "Smart Order Management",
    description: "Track orders, inventory, and customers in one place",
    icon: TrendingUp,
    metric: "3x faster order processing",
  },
  {
    title: "Real-time Profit Tracking",
    description: "Know your margins on every single transaction",
    icon: TrendingUp,
    metric: "₹2.5L average monthly profit increase",
  },
  {
    title: "WhatsApp Automation",
    description: "Send catalogs, invoices, and updates instantly",
    icon: MessageSquare,
    metric: "80% reduction in manual messaging",
  },
  {
    title: "GST & Compliance Ready",
    description: "Generate GST invoices and reports automatically",
    icon: Shield,
    metric: "100% GST compliant",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    features: ["1000 orders", "Basic reports", "WhatsApp"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹2999",
    period: "/month",
    features: ["Unlimited orders", "Advanced analytics", "API access"],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["White label", "Dedicated support", "Custom features"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function ResellerPro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="resellerpro"
      className="py-16 bg-ekodrix-charcoal relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(47,128,237,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(40,179,106,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0f1724] rounded-2xl border border-white/10 p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col gap-6">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-3">
                <ResellerProLogo size="md" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Product</p>
                  <h2 className="text-2xl font-display font-semibold text-white">ResellerPro</h2>
                  <p className="text-sm text-white/70">Reseller CRM trusted by 10,000+ sellers</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://resellerpro.in/signup"
                  className="px-4 py-2 rounded-lg bg-white text-resellerpro-blue-dark font-semibold text-sm hover:scale-105 hover:shadow-lg transition-all"
                >
                  Start Trial
                </Link>
                <Link
                  href="/resellerpro"
                  className="px-4 py-2 rounded-lg border border-white/15 text-white font-semibold text-sm hover:border-white/35 hover:bg-white/5 transition-all"
                >
                  View Product Page
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <p className="text-lg font-semibold text-white">Why it matters</p>
                <p className="text-sm text-white/75">
                  Automate reseller workflows, track profitability, and keep customers engaged—
                  without heavy ops overhead.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-ekodrix-green" />
                    10,000+ resellers, ₹100Cr+ monthly volume
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-ekodrix-green" />
                    GST-ready invoicing & profitability in real time
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-ekodrix-green" />
                    WhatsApp automation baked in
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-lg font-semibold text-white">Feature highlights</p>
                <div className="grid grid-cols-1 gap-3 text-sm text-white/80">
                  {features.slice(0, 3).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <div className="w-8 h-8 rounded-md bg-resellerpro-gradient flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{feature.title}</p>
                          <p className="text-white/70 text-xs">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-lg font-semibold text-white">Plans</p>
                <div className="space-y-3">
                  {pricingPlans.slice(0, 2).map((plan) => (
                    <div
                      key={plan.name}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-white font-semibold">{plan.name}</p>
                        <p className="text-white/70 text-xs">{plan.features[0]}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{plan.price}</p>
                        <p className="text-white/60 text-xs">{plan.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2 rounded-lg border border-white/15 text-white font-semibold text-sm hover:border-white/35 hover:bg-white/5 transition-all"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
