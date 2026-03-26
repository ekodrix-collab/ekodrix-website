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
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "EKODRIX - Engineering Tomorrow's Software Today",
  description:
    "Premium software studio crafting production-grade SaaS products for ambitious startups.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased selection:bg-ekodrix-green/30 selection:text-ekodrix-green overflow-x-hidden">
        {/* Google Analytics - Load base script */}
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
        <ScrollProgress />

        <PreloaderIntro>
          <SmoothScroll>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingContact />
            <Toaster position="top-center" theme="dark" />
          </SmoothScroll>
        </PreloaderIntro>

        <Analytics />
      </body>
    </html>
  );
}
