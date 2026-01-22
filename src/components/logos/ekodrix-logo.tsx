"use client";

import { Cog } from "lucide-react";

interface EkodrixLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  variant?: "dark" | "light";
}

export function EkodrixLogo({ className = "", size = "md", showTagline = false, variant = "dark" }: EkodrixLogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  const textColor = variant === "light" ? "text-white" : "text-ekodrix-charcoal";
  const taglineColor = variant === "light" ? "text-white/80" : "text-ekodrix-charcoal-light";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center gap-2 ${sizeClasses[size]} font-bold`}>
        <span className={textColor}>E</span>
        <span className={textColor}>k</span>
        <Cog className="text-ekodrix-green w-[1em] h-[1em] animate-spin-slow" />
        <span className={textColor}>d</span>
        <span className={textColor}>r</span>
        <span className={textColor}>i</span>
        <span className={textColor}>x</span>
      </div>
      {showTagline && (
        <p className={`text-xs uppercase tracking-wider ${taglineColor} mt-2 font-light`}>
          CODE METRICS SOLUTIONS
        </p>
      )}
    </div>
  );
}
