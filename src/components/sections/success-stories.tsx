"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const successStories = [
  {
    id: "resellerpro",
    name: "ResellerPro",
    tagline: "From Idea to 2,000+ Active Sellers",
    description: "Built India's most efficient reseller CRM from scratch. Now processing ₹5Cr+ monthly transactions.",
    metrics: [
      { label: "MRR", value: "₹1.5L+", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Active Users", value: "2,000+", icon: Users, color: "text-resellerpro-blue-light" },
      { label: "Uptime", value: "99.9%", icon: Shield, color: "text-purple-400" },
      { label: "Monthly Volume", value: "₹5Cr+", icon: Zap, color: "text-orange-400" },
    ],
    tech: ["Next.js", "Supabase", "WhatsApp API", "PostgreSQL"],
    rotation: { x: -2, y: -6, hover: { x: 0, y: -3 } },
    image: "/images/hero/coding-closeup.png", // Placeholder
    gradient: "from-ekodrix-green/20 to-resellerpro-blue-medium/20",
  },
  {
    id: "fintech",
    name: "FinTech Platform",
    tagline: "Scalable Infrastructure for Digital Payments",
    description: "Enterprise-grade payment gateway handling 2,500+ daily transactions with near-perfect reliability.",
    metrics: [
      { label: "Platform Volume", value: "₹15Cr+", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Success Rate", value: "99.95%", icon: Shield, color: "text-green-400" },
      { label: "Processing", value: "<1s", icon: Zap, color: "text-yellow-400" },
      { label: "Daily Txns", value: "2,500+", icon: Users, color: "text-blue-400" },
    ],
    tech: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
    rotation: { x: 3, y: 8, hover: { x: 0, y: 5 } },
    image: "/images/hero/developer-workspace.png", // Placeholder
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "healthtech",
    name: "HealthTech SaaS",
    tagline: "Modernizing Patient Care Flow",
    description: "HIPAA-compliant scheduling ecosystem serving 350+ healthcare providers with automated workflows.",
    metrics: [
      { label: "Providers", value: "350+", icon: Users, color: "text-blue-400" },
      { label: "Appointments", value: "8,000/mo", icon: TrendingUp, color: "text-ekodrix-green" },
      { label: "Efficiency", value: "35%", icon: Zap, color: "text-orange-400" },
      { label: "Compliance", value: "HIPAA", icon: Shield, color: "text-green-400" },
    ],
    tech: ["React", "Python", "AWS", "PostgreSQL"],
    rotation: { x: -1, y: -4, hover: { x: 0, y: -2 } },
    image: "/images/hero/team-collaboration.png", // Placeholder
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

export function SuccessStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-black/40 via-ekodrix-charcoal-dark to-black/40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(40,179,106,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(47,128,237,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white italic tracking-tight">
            Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real results. Real impact. From startups to scale.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12 perspective-container">
          {successStories.map((story, index) => {
            const isCenter = index === 2;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className={`${isCenter ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto" : ""} group`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative glass-card rounded-3xl p-8 border border-white/10 hover:border-ekodrix-green/30 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `perspective(1200px) rotateX(${story.rotation.x}deg) rotateY(${story.rotation.y}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `perspective(1200px) rotateX(${story.rotation.hover.x}deg) rotateY(${story.rotation.hover.y}deg) translateZ(20px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(1200px) rotateX(${story.rotation.x}deg) rotateY(${story.rotation.y}deg)`;
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                  {/* Image Background (subtle) */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold text-white group-hover:text-ekodrix-green transition-colors">
                          {story.name}
                        </h3>
                        <ArrowRight className="w-6 h-6 text-ekodrix-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xl font-semibold text-ekodrix-green mb-2">
                        {story.tagline}
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        {story.description}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {story.metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group/metric"
                          >
                            <Icon className={`w-5 h-5 ${metric.color} mb-2 group-hover/metric:scale-110 transition-transform`} />
                            <div className="text-2xl font-bold text-white mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-white/60 uppercase tracking-wider">
                              {metric.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {story.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ekodrix-green/0 to-ekodrix-green/0 group-hover:from-ekodrix-green/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-ekodrix-green/50 transition-all group"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
}
