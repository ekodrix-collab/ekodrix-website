"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function ResellerProScroll() {
  return (
    <section className="w-full bg-[#0B0B0F] relative isolate z-0">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/[0.06] rounded-full blur-[200px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />
      </div>

      <MacbookScroll
        src="/images/resellerpro-dashboard.png"
        showGradient={false}
      />
    </section>
  );
}
