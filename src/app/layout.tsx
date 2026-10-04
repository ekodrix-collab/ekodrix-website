import type { Metadata, Viewport } from "next";
import React, { Suspense } from "react";
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ekodrix.com"),

  title: {
    default: "Ekodrix Technologies — World-Class Software, Web & Mobile App Development | UAE, GCC, USA & Global",
    template: "%s | Ekodrix Technologies",
  },

  description:
    "Ekodrix is an elite software engineering company delivering high-performance web applications, mobile apps, enterprise SaaS, and AI workflows for clients across UAE, Saudi Arabia, Qatar, USA, UK, Australia, and India.",

  keywords: [
    // Brand & Global Authority
    "ekodrix",
    "ekodrix technologies",
    "ekodrix software",
    "ekodrix solutions",
    // GCC & Middle East
    "software company uae",
    "software company dubai",
    "software company abu dhabi",
    "web development company uae",
    "mobile app development saudi arabia",
    "it company qatar",
    "software company riyadh",
    "software agency kuwait",
    "it solutions gcc",
    // Global & Western Markets
    "software development company usa",
    "custom software development new york",
    "web development company uk london",
    "software engineering australia sydney",
    "offshore software development team",
    "hire remote fullstack developers",
    "saas development company",
    "nextjs development agency",
    // Headquarters & Regional
    "software company kondotty",
    "software company malappuram",
    "web development company kerala",
    "app development company kerala",
    "best it company malappuram",
    "digital marketing company kerala",
    // Enterprise Technologies
    "nextjs enterprise agency",
    "react native app developers",
    "ai workflow automation",
    "cloud infrastructure enterprise",
    "startup tech partner",
  ],

  authors: [{ name: "Ekodrix", url: "https://www.ekodrix.com" }],
  creator: "Ekodrix Software Solutions",
  publisher: "Ekodrix",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ekodrix.com",
    siteName: "Ekodrix Technologies",
    title: "Ekodrix Technologies — World-Class Software, Web & Mobile App Development",
    description:
      "Elite software engineering company delivering high-performance web applications, mobile apps, enterprise SaaS, and AI workflows for clients across UAE, Saudi Arabia, Qatar, USA, UK, Australia, and India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekodrix Technologies — World-Class Software & Web Development Company",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ekodrix",
    creator: "@ekodrix",
    title: "Ekodrix Technologies — World-Class Software, Web & Mobile App Development",
    description:
      "Elite software engineering company delivering high-performance web applications, mobile apps, enterprise SaaS, and AI workflows for clients across UAE, Saudi Arabia, Qatar, USA, UK, Australia, and India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.ekodrix.com",
    languages: {
      "x-default": "https://www.ekodrix.com",
      "en": "https://www.ekodrix.com",
      "en-AE": "https://www.ekodrix.com",
      "en-SA": "https://www.ekodrix.com",
      "en-QA": "https://www.ekodrix.com",
      "en-KW": "https://www.ekodrix.com",
      "en-OM": "https://www.ekodrix.com",
      "en-BH": "https://www.ekodrix.com",
      "en-US": "https://www.ekodrix.com",
      "en-GB": "https://www.ekodrix.com",
      "en-AU": "https://www.ekodrix.com",
      "en-CA": "https://www.ekodrix.com",
      "en-IN": "https://www.ekodrix.com",
    },
  },

  verification: {
    google: "34pmmJuoBHFNIS5y3uoIU3A-BwT82KgNASH9211j0No",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },

  category: "technology",

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ekodrix",
    "application-name": "Ekodrix",
    "msapplication-TileColor": "#10b981",
    "theme-color": "#0a0a0a",
    "geo.region": "IN-KL",
    "geo.placename": "Kondotty, Malappuram, Kerala",
    "geo.position": "11.1444;75.9610",
    ICBM: "11.1444, 75.9610",
    "DC.title":
      "Ekodrix - Best Software Company in Kondotty, Malappuram, Kerala",
    "DC.description":
      "Leading software and IT company in Kondotty offering web development, app development, digital marketing and SEO services",
    "DC.creator": "Ekodrix",
    "DC.language": "en",
    "DC.coverage": "Kondotty, Malappuram, Kerala, India",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.jpg" />

        {/* Preconnect to speed up third-party resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased selection:bg-ekodrix-green/30 selection:text-ekodrix-green overflow-x-hidden">
        {/* Google Analytics — Load base script */}
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
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <StructuredData />
        <Navbar />
        <ScrollProgress />
        <Toaster position="top-center" theme="dark" />

        <PreloaderIntro>
          <SmoothScroll>
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingContact />
          </SmoothScroll>
        </PreloaderIntro>

        <Analytics />
      </body>
    </html>
  );
}
