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

