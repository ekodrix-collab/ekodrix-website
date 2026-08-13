"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Skip Lenis on admin panel route — it has its own scroll context
    if (pathname?.startsWith("/ekodrix-panel")) return;

    // Disable smooth scroll on mobile/touch devices to prevent scroll issues
    const isMobile =
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isMobile) {
      return; // Don't initialize Lenis on mobile
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
