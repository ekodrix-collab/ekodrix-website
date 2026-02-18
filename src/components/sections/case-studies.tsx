"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Zap, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";

const caseStudies = [
  {
    id: "resellerpro",
    client: "ResellerPro",
    industry: "Online Sellers CRM",
    demoUrl: "https://resellerpro.in",
    challenge: "Scaling an automated CRM for 2,000+ small resellers selling via Instagram, WhatsApp, and social channels.",
    solution: "A custom-built SaaS ecosystem with deep WhatsApp & Instagram automation and real-time profitability tracking for small online sellers.",
    results: [
      { metric: "Monthly Volume", value: "₹25L+", change: "Growing" },
      { metric: "Active Sellers", value: "150+", change: "+40%" },
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
    id: "vidya-academy",
    client: "Vidya Academy",
    industry: "EdTech",
    demoUrl: "https://vidyaacademy.ekodrix.com",
    challenge: "Building a modern platform for expert-led professional training at scale.",
    solution: "A sleek, conversion-optimized web platform with course management, batch scheduling, and enrollment tracking.",
    results: [
      { metric: "Enrollments", value: "200+", change: "Growing" },
      { metric: "Course Completion", value: "85%", change: "Strong" },
      { metric: "Avg. Rating", value: "4.7/5", change: "50+ Reviews" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Supabase"],
    testimonial: {
      text: "EKODRIX transformed our vision into a platform that truly inspires students. The design and performance exceeded all expectations.",
      author: "Vidya Academy Team",
      position: "Vidya Academy",
    },
  },
  {
    id: "habitek-interiors",
    client: "Habitek Interiors",
    industry: "Interior Design & Realty",
    demoUrl: "https://habitek.ekodrix.com",
    challenge: "Creating a premium digital presence that reflects the elegance of bespoke interior design.",
    solution: "A visually stunning portfolio website with immersive project galleries and seamless enquiry management.",
    results: [
      { metric: "Client Reach", value: "Kerala", change: "Expanding" },
      { metric: "Enquiries", value: "50+/mo", change: "+80%" },
      { metric: "Bounce Rate", value: "-35%", change: "Improved" },
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    testimonial: {
      text: "Our online presence finally matches the quality of our designs. EKODRIX captured our brand essence perfectly.",
      author: "Habitek Team",
      position: "Habitek Interiors & Realty",
    },
  },
  {
    id: "genz-store",
    client: "Gen-Z",
    industry: "E-commerce",
    demoUrl: "https://genzstore.ekodrix.com",
    challenge: "Launching a bold men's streetwear brand with a cutting-edge online storefront.",
    solution: "A high-performance e-commerce platform with dynamic product showcases, cart management, and a trend-forward UI.",
    results: [
      { metric: "Products Listed", value: "120+", change: "Curated" },
      { metric: "Monthly Visitors", value: "2,500+", change: "Organic" },
      { metric: "Conversion Rate", value: "3.2%", change: "Above Avg" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Stripe"],
    testimonial: {
      text: "Gen-Z isn't just a store — it's a statement. EKODRIX nailed the vibe and the tech behind it.",
      author: "Gen-Z Team",
      position: "Gen-Z Streetwear",
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

                      {/* Live Demo Embed */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-white/60 text-sm font-medium">Live Preview</p>
                          <a
                            href={study.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-xs font-semibold hover:bg-ekodrix-green/20 hover:border-ekodrix-green/40 transition-all"
                          >
                            Full View
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white">
                          <iframe
                            src={study.demoUrl}
                            title={`${study.client} Demo`}
                            className="w-full h-[280px] pointer-events-auto"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                          />
                        </div>
                      </div>
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
