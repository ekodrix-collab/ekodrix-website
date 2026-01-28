import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Analytics } from "@/components/analytics";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { PreloaderIntro } from "@/components/preloader/PreloaderIntro";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Toaster } from "sonner";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Viewport export (separated per Next.js 14 requirements)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "EKODRIX - Engineering Tomorrow's Software Today",
    template: "%s | EKODRIX",
  },
  description: "Premium software studio crafting production-grade SaaS products for ambitious startups. From MVP to IPO-ready systems. Custom web development, mobile apps, and AI solutions.",
  keywords: [
    "saas development",
    "software studio",
    "web development",
    "custom saas solutions",
    "startup development",
    "mobile app development",
    "ai solutions",
    "next.js development",
    "react development",
    "custom software",
    "tech consulting",
    "bangalore software company",
    "india software development",
  ],
  authors: [{ name: "EKODRIX", url: "https://ekodrix.com" }],
  creator: "EKODRIX",
  publisher: "EKODRIX",
  metadataBase: new URL("https://ekodrix.com"),
  alternates: {
    canonical: "https://ekodrix.com",
  },
  icons: {
    icon: [
      { url: "/logo/Ekodrix-logo.JPG", sizes: "any" },
    ],
    apple: [
      { url: "/logo/Ekodrix-logo.JPG", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ekodrix.com",
    title: "EKODRIX - Engineering Tomorrow's Software Today",
    description: "Premium software studio crafting production-grade SaaS products for ambitious startups. From MVP to IPO-ready systems.",
    siteName: "EKODRIX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EKODRIX - Premium Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EKODRIX - Engineering Tomorrow's Software Today",
    description: "Premium software studio crafting production-grade SaaS products for ambitious startups.",
    images: ["/og-image.jpg"],
    creator: "@ekodrix",
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
  verification: {
    google: "iNnJ0Dib4hiXiImL2YfYldA3qBkinI6spXV1lG4KW6Q",
  },
  category: "technology",
};

// Get GA ID with fallback
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics - Only load if GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {/* Page view tracking for client-side navigation */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <StructuredData />
        <ScrollProgress />
        <SmoothScroll />
        <PreloaderIntro>
          <Navbar />
          {children}
          <FloatingContact />
          <Footer />
          <Toaster position="top-center" theme="dark" />
        </PreloaderIntro>
        <Analytics />
      </body>
    </html>
  );
}

