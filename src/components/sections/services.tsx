"use client";

import {
  Cloud,
  Brain,
  Globe,
  Smartphone,
  Server,
  Palette,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    id: "saas-development",
    title: "SaaS Product Development",
    description: "30-day MVP delivery • Built for 10K+ users from Day 1",
    icon: Cloud,
    features: [
      "Multi-tenant Architecture",
      "Subscription & Billing",
      "Admin Dashboards",
      "API Development",
      "Real-time Features",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ai-integration",
    title: "AI-Powered Solutions",
    description: "Production-ready AI in 4 weeks • 50% cost vs hiring ML engineers",
    icon: Brain,
    features: [
      "Custom AI Models",
      "ChatGPT Integration",
      "Computer Vision",
      "Predictive Analytics",
      "Workflow Automation",
    ],
    tech: ["OpenAI", "LangChain", "Python", "TensorFlow"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "web-development",
    title: "Modern Web Applications",
    description: "Lighthouse 95+ guaranteed • Conversion rates 2x industry average",
    icon: Globe,
    features: [
      "Progressive Web Apps",
      "E-commerce Platforms",
      "Marketing Websites",
      "Web3 dApps",
      "CMS Integration",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "mobile-development",
    title: "Mobile Applications",
    description: "Native experiences for iOS and Android",
    icon: Smartphone,
    features: [
      "React Native Apps",
      "Flutter Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline Sync",
    ],
    tech: ["React Native", "Flutter", "Firebase", "Expo"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "backend-api",
    title: "Backend & API Systems",
    description: "Scalable infrastructure that never fails",
    icon: Server,
    features: [
      "RESTful APIs",
      "GraphQL Services",
      "Microservices",
      "Database Design",
      "Cloud Architecture",
    ],
    tech: ["Node.js", "Python", "PostgreSQL", "Docker"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    description: "Designs that convert, experiences that delight",
    icon: Palette,
    features: [
      "Design Systems",
      "Prototyping",
      "User Research",
      "A/B Testing",
      "Conversion Optimization",
    ],
    tech: ["Figma", "Framer", "Principle", "Hotjar"],
    color: "from-pink-500 to-rose-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-ekodrix-charcoal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal type="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white">
            What We Build
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end software solutions that scale from Day 1
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.id}
                type="blur-in"
                delay={index * 0.1}
                threshold={0.1}
                className="h-full"
              >
                <Card3D intensity={0.5} enableScale={false} className="h-full">
                  <div className="h-full bg-[#111] rounded-2xl p-6 border border-white/10 hover:border-ekodrix-green shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ekodrix-green transition-all">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 text-sm">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ekodrix-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {service.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ekodrix-green group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
