import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Analytics } from "@/components/analytics";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EKODRIX - Engineering Tomorrow's Software Today",
  description: "Premium software studio crafting production-grade SaaS products for ambitious startups. From MVP to IPO-ready systems.",
  keywords: ["saas development", "software studio", "web development", "custom saas solutions", "startup development"],
  authors: [{ name: "EKODRIX" }],
  creator: "EKODRIX",
  publisher: "EKODRIX",
  metadataBase: new URL("https://ekodrix.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ekodrix.com",
    title: "EKODRIX - Engineering Tomorrow's Software Today",
    description: "Premium software studio crafting production-grade SaaS products for ambitious startups.",
    siteName: "EKODRIX",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKODRIX - Engineering Tomorrow's Software Today",
    description: "Premium software studio crafting production-grade SaaS products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StructuredData />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
