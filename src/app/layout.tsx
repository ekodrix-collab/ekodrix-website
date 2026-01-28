import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "EKODRIX - Engineering Tomorrow's Software Today",
  description: "Premium software studio crafting production-grade SaaS products for ambitious startups. From MVP to IPO-ready systems.",
  keywords: ["saas development", "software studio", "web development", "custom saas solutions", "startup development"],
  authors: [{ name: "EKODRIX" }],
  creator: "EKODRIX",
  publisher: "EKODRIX",
  metadataBase: new URL("https://ekodrix.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
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

<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <body>
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
