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
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/99f57edbc53ee44bdb74546de7cfe9fe8c09ec70-1900x10691.webp?auto=format&w=650&q=80",
    url: "resellerpro.in",
  },
  {
    id: "axion-technology-co",
    title: "Axion Technology Company - Business Website",
    category: "Web Design & Development",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/12bb67f765fb97394a54dc196139859562301768-2992x8610.webp?auto=format&w=650&q=80",
    url: "axiontechgroup.com",
  },
  {
    id: "wcc-fashions",
    title: "WCC Fashions - Western Clothing Co",
    category: "B2B-Website",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/4a2ffe09759ccc32b04b1643031e9851cdf1aca9-2922x16000.webp?auto=format&w=650&q=80",
    url: "wccfashions.com",
  },
  {
    id: "nexa-network",
    title: "Nexa Network Solutions",
    category: "Web Design & Development",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/370ebe099acd526622cafa3f9a3a98e649f32416-2992x11954.webp?auto=format&w=650&q=80",
    url: "nexa.com.qa",
  },
  {
    id: "griva",
    title: "The Griva - Electronics",
    category: "Web Design & E-Commerce", 
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/a1c3da816ca814687977ae9a53ff5fad539f71e5-2992x13136.webp?auto=format&w=650&q=80",
    url: "thegriva.com",
  },
  {
    id: "ambiayu-natureproducts",
    title: "Ambiayu - Ayurvedic products",
    category: "Web Design & Shopify", 
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/72e8a4acd89f34792d4d9633b20792bdfe8b21f7-2992x6332.webp?auto=format&w=650&q=80",
    url: "ambiayu.com",
  },
  {
    id: "editron-studio",
    title: "Editron Studio - Creative Agency",
    category: "Web Design & Development · UAE",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/1fb11c446cc887c8826b6140e1f157033b3eb276-1900x8571.webp?auto=format&w=650&q=80",
    url: "editronstudio.com",
  },
  {
    id: "kl59-fashion",
    title: "KL-59 Men's Fashion",
    category: "E-Commerce · WhatsApp Integration",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/3516e2b5434e415cace2680cb86b75cf007d72d2-1906x12584.webp?auto=format&w=650&q=80",
    url: "kl-59mensfashion.in",
  },
  {
    id: "magnat",
    title: "Magnat - Luxury Furniture",
    category: "Web Design & Development · Kondotty",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/11f8602db75da50605ecd203ea9ee05f5076a8cf-1915x7499.webp?auto=format&w=650&q=80",
    url: "magnat.in",
  },
  {
    id: "vidya-academy",
    title: "Vidya Academy - EdTech Platform",
    category: "Education · Full-Stack Development",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/acbef0625319bbc029a9afc21d7be1fef0013d6f-1900x7549.webp?auto=format&w=650&q=80",
    url: "vidyaacademy.ekodrix.com",
  },
  {
    id: "er-groups",
    title: "ER Groups - Construction Company",
    category: "Web Design & Development · UAE",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/c6e4ca911b1ded7d311d8afd83923488cc3f5291-1920x14053.webp?auto=format&w=650&q=80",
    url: "er-groups.vercel.app",
  },
  {
    id: "care-pro-health",
    title: "CarePro Health - Healthcare Platform",
    category: "Web Design & Development",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/64bf260a6b20c0f9145f86b2d241dbc3f8130a62-1908x5745.webp?auto=format&w=650&q=80",
    url: "care-pro-health.vercel.app",
  },
  {
    id: "ekodrix-events",
    title: "Al Wafa - Event Management",
    category: "Web Design & Development",
    image: "https://cdn.sanity.io/images/3sq1n5yp/production/2ec647d0ed5bb9a94b86883439790a2325ded3d6-1910x10678.webp?auto=format&w=650&q=80",
    url: "ekodrix-event-management-demo.vercel.app",
  },
];

// Individual portfolio card component
function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

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
            <img
              src={item.image}
              alt={`${item.title} — Web & SaaS Development Portfolio by Ekodrix`}
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
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
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
