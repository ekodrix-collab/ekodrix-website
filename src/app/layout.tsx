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
  metadataBase: new URL("https://ekodrix.com"),

  title: {
    default:
      "Ekodrix — Best Software Company in Kondotty | Web Development, App Development & Digital Marketing Kerala",
    template: "%s | Ekodrix — Top IT Company Kondotty, Kerala",
  },

  description:
    "Ekodrix is the #1 software company in Kondotty, Malappuram, Kerala. Expert web development, mobile app development, digital marketing, SEO, custom software & IT solutions. 100+ happy clients. Free consultation. Call +91-77367-67759.",

  keywords: [
    // Brand
    "ekodrix",
    "ekodrix kondotty",
    "ekodrix software",
    "ekodrix malappuram",
    // Primary Local
    "best software company kondotty",
    "top it company malappuram",
    "web development company kerala",
    "app development company kondotty",
    "digital marketing agency kondotty",
    "seo services malappuram",
    // Services
    "saas development india",
    "custom software development kerala",
    "nextjs development company",
    "react native developers kondotty",
    "ai integration services",
    "ecommerce development kondotty",
    "ui ux design kerala",
    "it consulting malappuram",
    // Intent
    "hire software developers kerala",
    "build saas product india",
    "startup tech partner",
  ],

  authors: [{ name: "Ekodrix", url: "https://ekodrix.com" }],
  creator: "Ekodrix Software Solutions",
  publisher: "Ekodrix",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ekodrix.com",
    siteName: "Ekodrix",
    title:
      "Ekodrix — Best Software Company in Kondotty, Kerala | Web Development, App Development",
    description:
      "Ekodrix is the #1 IT company in Kondotty, Kerala. Expert web development, app development, digital marketing & SEO. 100+ happy clients. Free consultation!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekodrix — Software Company Kondotty, Kerala",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ekodrix",
    creator: "@ekodrix",
    title: "Ekodrix — Best Software Company in Kondotty, Kerala",
    description:
      "Top IT company in Kondotty, Kerala. Web Development | App Development | Digital Marketing | SEO Services. Free Consultation!",
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
    canonical: "https://ekodrix.com",
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
