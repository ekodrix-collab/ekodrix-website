import { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Software Projects — Ekodrix, Kondotty",
  description:
    "Explore Ekodrix's portfolio of successful web development, app development, and digital marketing projects. 100+ clients served across Kerala and India. See our work.",
  keywords: [
    "ekodrix portfolio",
    "ekodrix case studies",
    "ekodrix projects",
    "software company portfolio kondotty",
    "web development portfolio kerala",
    "app development portfolio kondotty",
    "software company work samples",
    "it company portfolio malappuram",
    "web design examples kondotty",
    "ekodrix work",
    "software development case studies kerala",
  ],
  alternates: { canonical: "https://ekodrix.com/work" },
  openGraph: {
    title: "Portfolio — Ekodrix Software Company Kondotty",
    description: "100+ projects delivered. See our web development, app development and digital marketing portfolio.",
    url: "https://ekodrix.com/work",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-20">
      <Portfolio />
    </main>
  );
}
