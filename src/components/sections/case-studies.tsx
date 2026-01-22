"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";

const caseStudies = [
  {
    id: "fintech-platform",
    client: "PayFlow",
    industry: "Fintech",
    challenge: "Build a payment platform handling 1M+ transactions daily",
    solution: "Microservices architecture with 99.99% uptime",
    results: [
      { metric: "Transaction Volume", value: "₹500Cr+", change: "+400%" },
      { metric: "Processing Time", value: "< 2 seconds", change: "-80%" },
      { metric: "Uptime", value: "99.99%", change: "+0.9%" },
    ],
    tech: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
    testimonial: {
      text: "EKODRIX didn't just build our platform, they became our technical co-founders",
      author: "Amit Shah",
      position: "CEO, PayFlow",
    },
  },
  {
    id: "saas-platform",
    client: "CloudSync",
    industry: "SaaS",
    challenge: "Scale from 10K to 1M users in 6 months",
    solution: "Multi-tenant architecture with auto-scaling infrastructure",
    results: [
      { metric: "Users", value: "1M+", change: "+9900%" },
      { metric: "Response Time", value: "< 100ms", change: "-90%" },
      { metric: "Cost Efficiency", value: "60%", change: "-40%" },
    ],
    tech: ["Next.js", "PostgreSQL", "Redis", "AWS Lambda"],
    testimonial: {
      text: "The platform scales effortlessly. We've never had downtime.",
      author: "Priya Sharma",
      position: "CTO, CloudSync",
    },
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="work" className="py-24 bg-ekodrix-charcoal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-ekodrix-charcoal">
            Case Studies
          </h2>
          <p className="text-xl text-ekodrix-charcoal-light max-w-2xl mx-auto">
            Real results from real products we've built
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
