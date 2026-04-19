import { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, getMalappuramLocations, getKeralaLocations } from "@/lib/locations-data";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Locations | Software Company Kondotty, Malappuram, Kerala — Ekodrix",
  description:
    "Ekodrix provides web development, app development, digital marketing and IT services across Kondotty, Malappuram, Kozhikode, Kerala, and Gulf. Find your location and get a free quote today.",
  keywords: [
    "software company kondotty",
    "software company malappuram",
    "software company kozhikode",
    "software company kerala",
    "it company kondotty",
    "it company malappuram",
    "web development company near me",
    "ekodrix service locations",
    "software company near kondotty",
    "it company near malappuram",
    "digital marketing company kerala",
    "app development company kerala",
  ],
  alternates: { canonical: "https://ekodrix.com/locations" },
  openGraph: {
    title: "Ekodrix Service Locations — Software Company Across Kerala & Gulf",
    description: "Web development, app development & digital marketing services across Kondotty, Malappuram, Kozhikode, Kerala and the Gulf region.",
    url: "https://ekodrix.com/locations",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LocationsPage() {
  const malappuramLocs = getMalappuramLocations();
  const keralaLocs = getKeralaLocations().filter((l) => l.district !== "Malappuram");
  const gulfLocs = LOCATIONS.filter((l) => l.state !== "Kerala");

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-charcoal-dark to-black" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ekodrix-green/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Service Coverage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            We Serve Businesses <span className="text-ekodrix-green">Everywhere</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Based in Kondotty, Malappuram — Ekodrix delivers world-class IT services to businesses across Kerala, India, and the Gulf region. Find your city below and see how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold hover:scale-105 transition-all"
          >
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Malappuram District */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Malappuram District</h2>
            <p className="text-gray-400">Our home district — serving all towns and villages in Malappuram</p>
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
      <section className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Kerala State</h2>
            <p className="text-gray-400">Serving businesses across all districts of Kerala</p>
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

      {/* Gulf Region */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Gulf Region & International</h2>
            <p className="text-gray-400">Serving Malayali entrepreneurs and businesses across the Gulf</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gulfLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-4 glass-card rounded-xl border border-white/10 hover:border-ekodrix-green/30 hover:bg-white/[0.03] transition-all"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-sm">{loc.name}</div>
                  <div className="text-xs text-gray-500">{loc.state}</div>
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
          <p className="text-gray-400 mb-8">We serve clients anywhere in the world. Contact us and we&apos;ll get back to you within 24 hours.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold hover:scale-105 transition-all"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
