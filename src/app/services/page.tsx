import { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Software Development Services in Kondotty | Web, App, Marketing & SEO — Ekodrix",
  description:
    "Complete software and IT services in Kondotty, Malappuram: web development, mobile app development, digital marketing, SEO, custom software, graphic design & IT consulting. Free consultation!",
  keywords: [
    "software services kondotty",
    "web development services kondotty",
    "app development services kondotty",
    "digital marketing services kondotty",
    "seo services kondotty",
    "it services malappuram",
    "software solutions kondotty",
    "custom software development kondotty",
    "mobile app development malappuram",
    "ecommerce development kondotty",
    "graphic design kondotty",
    "ui ux design kondotty",
    "logo design kondotty",
    "it consulting kondotty",
    "cloud solutions kondotty",
    "flutter app development kondotty",
    "react native development kondotty",
    "wordpress development kondotty",
    "seo company malappuram",
    "digital marketing agency kondotty",
    "all software services kerala",
    "complete it solutions kondotty",
  ],
  alternates: { canonical: "https://ekodrix.com/services" },
  openGraph: {
    title: "Software Development Services in Kondotty — Ekodrix",
    description: "Complete IT services in Kondotty: Web Dev, Apps, Marketing, SEO, Software. Free consultation!",
    url: "https://ekodrix.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end software solutions that scale from Day 1
            </p>
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}
