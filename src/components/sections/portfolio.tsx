"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PortfolioItem } from "@/types/portfolio";
import { DEFAULT_PORTFOLIO_ITEMS } from "@/lib/portfolio-defaults";

// Re-export the 13 original hardcoded items for backward compatibility
export const portfolioItems: PortfolioItem[] = DEFAULT_PORTFOLIO_ITEMS;

// Reusable individual portfolio card component matching the exact browser-mockup visual design
export function PortfolioCard({
  item,
  index = 0,
}: {
  item: PortfolioItem;
  index?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const formattedUrl = item.url.startsWith("http") ? item.url : `https://${item.url}`;
  const displayDomain = item.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <a 
        href={formattedUrl}
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
              <span className="url-text">{displayDomain}</span>
            </div>
            <div className="portfolio-browser-actions">
              <span className="browser-action-dot" />
              <span className="browser-action-dot" />
              <span className="browser-action-dot" />
            </div>
          </div>

          {/* Screenshot preview window */}
          <div className="portfolio-preview-window">
            <img
              src={item.image}
              alt={item.altText || `${item.title} — Web & SaaS Development Portfolio by Ekodrix`}
              className="portfolio-preview-image group-hover:!translate-y-[calc(-100%+220px)] group-hover:!transition-transform group-hover:!duration-[6000ms] group-hover:!ease-in-out"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
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
  
  // Default fallback initialized immediately to prevent layout shift or empty states
  const [items, setItems] = useState<PortfolioItem[]>(DEFAULT_PORTFOLIO_ITEMS);

  useEffect(() => {
    let cancelled = false;
    async function loadDynamicPortfolio() {
      try {
        const res = await fetch("/api/portfolio", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && data.success && Array.isArray(data.data) && data.data.length > 0) {
          setItems(data.data);
        }
      } catch (err) {
        // Silently preserve DEFAULT_PORTFOLIO_ITEMS fallback
        console.warn("[Portfolio] Loading dynamic items failed, staying on static defaults:", err);
      }
    }
    loadDynamicPortfolio();
    return () => {
      cancelled = true;
    };
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {items.map((item, index) => (
            <PortfolioCard key={item.id || item.title} item={item} index={index} />
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
