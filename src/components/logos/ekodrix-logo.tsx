"use client";

import { Cog } from "lucide-react";

interface EkodrixLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function EkodrixLogo({ className = "", size = "md", showTagline = false }: EkodrixLogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center gap-2 ${sizeClasses[size]} font-bold`}>
        <span className="text-ekodrix-charcoal">E</span>
        <span className="text-ekodrix-charcoal">k</span>
        <Cog className="text-ekodrix-green w-[1em] h-[1em] animate-spin-slow" />
        <span className="text-ekodrix-charcoal">d</span>
        <span className="text-ekodrix-charcoal">r</span>
        <span className="text-ekodrix-charcoal">i</span>
        <span className="text-ekodrix-charcoal">x</span>
      </div>
      {showTagline && (
        <p className="text-xs uppercase tracking-wider text-ekodrix-charcoal-light mt-2 font-light">
          CODE METRICS SOLUTIONS
        </p>
      )}
    </div>
  );
}
