import { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, getMalappuramLocations, getKeralaLocations, getGCCLocations, getGlobalLocations } from "@/lib/locations-data";
import { MapPin, ArrowRight, Globe, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Global & Regional Service Locations | UAE, GCC, USA, Australia, UK & India — Ekodrix",
  description:
    "Ekodrix delivers enterprise software, high-performance web applications, mobile apps, and digital marketing across UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), Qatar, USA, UK, Australia, and India. Get a free consultation.",
  keywords: [
    "software company uae",
    "software company dubai",
    "software company saudi arabia",
    "software company qatar",
    "software company usa",
    "software company uk",
    "software company australia",
    "software company kondotty",
    "software company malappuram",
    "software company kozhikode",
    "software company kerala",
    "it company gcc",
    "web development company near me",
    "ekodrix service locations",
  ],
  alternates: { canonical: "https://www.ekodrix.com/locations" },
  openGraph: {
    title: "Ekodrix Service Locations — Global & GCC Software Engineering",
    description: "Web development, mobile app development & custom software solutions across GCC (UAE, Saudi, Qatar), USA, UK, Australia, and India.",
    url: "https://www.ekodrix.com/locations",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LocationsPage() {
  const gccLocs = getGCCLocations();
  const globalLocs = getGlobalLocations();
  const malappuramLocs = getMalappuramLocations();
  const keralaLocs = getKeralaLocations().filter((l) => l.district !== "Malappuram");

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-charcoal-dark to-black" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ekodrix-green/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-sm mb-6">
            <Globe className="w-4 h-4" />
            <span>Global & Regional Service Coverage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Engineering Software for Businesses <span className="text-ekodrix-green">Worldwide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From our dedicated GCC desk (Dubai, Riyadh, Doha) to our worldwide clients in the USA, UK, Australia, and India — Ekodrix delivers silicon-grade web, app, and enterprise systems with full timezone overlap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold hover:scale-105 transition-all shadow-lg shadow-ekodrix-green/20"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/917736767759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
            >
              💬 WhatsApp GCC & Global Desk
            </a>
          </div>
        </div>
      </section>

      {/* GCC Hubs */}
      <section className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                🇦🇪 🇸🇦 🇶🇦 🇰🇼 🇴🇲 🇧🇭 Dedicated Gulf Coverage
              </div>
              <h2 className="text-3xl font-bold mb-2">GCC & Middle East Hubs</h2>
              <p className="text-gray-400">Tailored solutions for UAE, Saudi Arabia, Qatar, Kuwait, Oman & Bahrain businesses</p>
            </div>
            <div className="text-xs text-gray-500">Bilingual Arabic/English UX • Regional Payment Gateways</div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gccLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-5 glass-card rounded-2xl border border-white/10 hover:border-ekodrix-green/40 hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-base">{loc.name}</div>
                  <div className="text-xs text-ekodrix-green/80 font-medium mt-0.5">{loc.state}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-ekodrix-green transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Worldwide & Tech Hubs */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                🇺🇸 🇬🇧 🇦🇺 🇨🇦 🇸🇬 Worldwide Hubs
              </div>
              <h2 className="text-3xl font-bold mb-2">USA, UK, Australia & Global Tech Hubs</h2>
              <p className="text-gray-400">Serving technology innovators, high-growth startups, and established enterprises</p>
            </div>
            <div className="text-xs text-gray-500">100% IP Ownership • Flexible Timezone Overlap</div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {globalLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-5 glass-card rounded-2xl border border-white/10 hover:border-ekodrix-green/40 hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-base">{loc.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{loc.district}, {loc.state}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-ekodrix-green transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Malappuram District */}
      <section className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Malappuram District (Headquarters Region)</h2>
            <p className="text-gray-400">Our engineering center & founding headquarters — serving all towns in Malappuram</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {malappuramLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-4 glass-card rounded-xl border border-white/10 hover:border-ekodrix-green/30 hover:bg-white/[0.03] transition-all"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-sm">{loc.name}</div>
                  {loc.distanceFromKondotty && (
                    <div className="text-xs text-gray-500">{loc.distanceFromKondotty} from Kondotty</div>
                  )}
                  {loc.pincode && (
                    <div className="text-xs text-gray-500">PIN: {loc.pincode}</div>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-ekodrix-green transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of Kerala */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Kerala State Network</h2>
            <p className="text-gray-400">Serving businesses across all major cities and districts of Kerala</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keralaLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-4 glass-card rounded-xl border border-white/10 hover:border-ekodrix-green/30 hover:bg-white/[0.03] transition-all"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-sm">{loc.name}</div>
                  <div className="text-xs text-gray-500">{loc.district} District</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-ekodrix-green transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your City?</h2>
          <p className="text-gray-400 mb-8">We deliver enterprise-grade software to clients anywhere across the globe. Reach out and our engineering leadership will respond within 24 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold hover:scale-105 transition-all"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
