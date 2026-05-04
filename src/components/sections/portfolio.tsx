"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const portfolioItems = [
  {
    id: "resellerpro",
    title: "ResellerPro - SaaS CRM Platform",
    category: "SaaS Product · Full-Stack Development",
    image: "/images/portfolio/www.resellerpro.in_.png",
    url: "resellerpro.in",
  },
  {
    id: "editron-studio",
    title: "Editron Studio - Creative Agency",
    category: "Web Design & Development · UAE",
    image: "/images/portfolio/www.editronstudio.com_.png",
    url: "editronstudio.com",
  },
  {
    id: "kl59-fashion",
    title: "KL-59 Men's Fashion",
    category: "E-Commerce · WhatsApp Integration",
    image: "/images/portfolio/www.kl-59mensfashion.in_ (4).png",
    url: "kl-59mensfashion.in",
  },
  {
    id: "magnat",
    title: "Magnat - Luxury Furniture",
    category: "Web Design & Development · Kondotty",
    image: "/images/portfolio/www.magnat.in_.png",
    url: "magnat.in",
  },
  {
    id: "vidya-academy",
    title: "Vidya Academy - EdTech Platform",
    category: "Education · Full-Stack Development",
    image: "/images/portfolio/vidyaacademy.ekodrix.com_.png",
    url: "vidyaacademy.ekodrix.com",
  },
  {
    id: "er-groups",
    title: "ER Groups - Construction Company",
    category: "Web Design & Development · UAE",
    image: "/images/portfolio/er-groups.vercel.app_ (2).png",
    url: "er-groups.vercel.app",
  },
  {
    id: "care-pro-health",
    title: "CarePro Health - Healthcare Platform",
    category: "Web Design & Development",
    image: "/images/portfolio/care-pro-health.vercel.app_.png",
    url: "careprohealth.com",
  },
  {
    id: "ekodrix-events",
    title: "Al Wafa - Event Management",
    category: "Web Design & Development",
    image: "/images/portfolio/ekodrix-event-management-demo.vercel.app_.png",
    url: "alwafaevents.com",
  },
];

// Individual portfolio card component
function PortfolioCard({
  item,
  index,
  className = "",
}: {
  item: (typeof portfolioItems)[0];
  index: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <a 
        href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-card-wrapper group"
      >
        {/* Browser mockup card */}
        <div className="portfolio-browser-card">
          {/* Browser top bar */}
          <div className="portfolio-browser-bar">
            <div className="portfolio-browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="portfolio-url-bar">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="url-lock-icon"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="url-text">{item.url}</span>
            </div>
            <div className="portfolio-browser-actions">
              <span className="browser-action-dot" />
              <span className="browser-action-dot" />
              <span className="browser-action-dot" />
            </div>
          </div>

          {/* Screenshot preview window */}
          <div className="portfolio-preview-window">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={5000}
              className="portfolio-preview-image group-hover:!translate-y-[calc(-100%+220px)] group-hover:!transition-transform group-hover:!duration-[6000ms] group-hover:!ease-in-out"
              loading="lazy"
              quality={85}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="portfolio-preview-fade" />
          </div>
        </div>

        {/* Project info below card */}
        <div className="portfolio-info">
          <h3 className="portfolio-title group-hover:text-ekodrix-green transition-colors">{item.title}</h3>
          <p className="portfolio-category">{item.category}</p>
        </div>
      </a>
    </motion.div>
  );
}

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="portfolio-section"
    >
      {/* Ambient background effects */}
      <div className="portfolio-bg-effects">
        <div className="portfolio-glow portfolio-glow-1" />
        <div className="portfolio-glow portfolio-glow-2" />
      </div>

      <div className="portfolio-container">
        {/* Section header */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portfolio-badge">
            <span className="portfolio-badge-dot" />
            <span className="portfolio-badge-text">Portfolio</span>
          </div>

          <h2 className="portfolio-heading">
            Our{" "}
            <span className="portfolio-heading-accent">Portfolio</span>
          </h2>
          <p className="portfolio-subheading">
            Handcrafted digital experiences that drive results. Each project is
            a testament to our commitment to excellence.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard 
              key={item.title} 
              item={item} 
              index={index} 
              className={index % 2 !== 0 ? "md:mt-24" : ""}
            />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/work" className="portfolio-cta-button group">
            View Entire Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
