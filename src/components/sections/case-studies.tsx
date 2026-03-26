"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";

const caseStudies = [
  {
    id: "resellerpro",
    client: "ResellerPro",
    industry: "E-commerce CRM",
    challenge: "Scaling an automated CRM for 2,000+ high-volume resellers.",
    solution: "A custom-built SaaS ecosystem with deep WhatsApp automation and real-time profitability tracking.",
    results: [
      { metric: "Monthly Volume", value: "₹5Cr+", change: "Flagship" },
      { metric: "Active Sellers", value: "2,000+", change: "+120%" },
      { metric: "Uptime", value: "99.9%", change: "Stable" },
    ],
    tech: ["Next.js", "Supabase", "WhatsApp API", "PostgreSQL"],
    testimonial: {
      text: "The most efficient CRM we've ever used. It transformed our manual operations into a scalable business.",
      author: "Rajesh Kumar",
      position: "Founder, ResellerPro User",
    },
  },
  {
    id: "fintech-platform",
    client: "PayFlow",
    industry: "FinTech",
    challenge: "Architecture for a resilient digital payment gateway.",
    solution: "Distributed microservices with near-instant transaction processing.",
    results: [
      { metric: "Transactions", value: "₹15Cr+", change: "+450%" },
      { metric: "Latency", value: "< 1s", change: "-75%" },
      { metric: "Success Rate", value: "99.95%", change: "Enterprise" },
    ],
    tech: ["Node.js", "Kubernetes", "Redis", "AWS"],
    testimonial: {
      text: "EKODRIX built a system that handles our volume effortlessly. Their engineering is world-class.",
      author: "Amit Shah",
      position: "CEO, PayFlow",
    },
  },
  {
    id: "healthtech-saas",
    client: "CareFlow",
    industry: "HealthTech",
    challenge: "Modernizing clinical workflows and appointment management.",
    solution: "Secure, HIPAA-compliant scheduling platform with automated patient notifications.",
    results: [
      { metric: "Providers", value: "350+", change: "+200%" },
      { metric: "Appointments", value: "8,000/mo", change: "Steady" },
      { metric: "Efficiency", value: "35%", change: "+35%" },
    ],
    tech: ["React", "Python", "AWS", "PostgreSQL"],
    testimonial: {
      text: "Our providers now spend less time on paperwork and more time on patients. A game changer.",
      author: "Priya Sharma",
      position: "CTO, CareFlow",
    },
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="work" className="py-12 sm:py-16 md:py-24 bg-ekodrix-charcoal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white">
            Our Work
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Grounded solutions for ambitious founders.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-transparent border-none p-0 shadow-none hover:shadow-none"
            >
              <Card3D intensity={0.4} className="h-full">
                <div className="bg-[#111] rounded-2xl p-8 md:p-12 border border-white/10 hover:border-ekodrix-green shadow-sm hover:shadow-lg transition-all h-full">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-ekodrix-green/15 text-ekodrix-green text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="text-white/70">{study.client}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 text-white">{study.client}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-white/60 text-sm mb-1">Challenge</p>
                          <p className="text-white/85">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">Solution</p>
                          <p className="text-white/85">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work/${study.id}`}
                        className="inline-flex items-center gap-2 text-ekodrix-green font-semibold hover:gap-3 transition-all"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-6 text-white">Results</h4>
                      <div className="space-y-4 mb-8">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-white/70">{result.metric}</span>
                              <span className="text-xs px-2 py-1 rounded-full bg-ekodrix-green/20 text-ekodrix-green">
                                {result.change}
                              </span>
                            </div>
                            <p className="text-2xl font-bold ekodrix-gradient-text">{result.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="text-white italic mb-4">"{study.testimonial.text}"</p>
                        <div>
                          <p className="font-semibold text-white">{study.testimonial.author}</p>
                          <p className="text-sm text-white/70">{study.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:border-ekodrix-green hover:shadow-lg transition-all"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
