"use client";

import Image from "next/image";

interface EkodrixLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  variant?: "dark" | "light";
}

export function EkodrixLogo({ className = "", size = "md", showTagline = false }: EkodrixLogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  const textColor = "text-white";
  const taglineColor = "text-white/80";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center gap-2 ${sizeClasses[size]} font-bold`}>
        <span className={textColor}>E</span>
        <span className={textColor}>k</span>
        <Image
          src="/images/ekodrix-gear.png"
          alt=""
          aria-hidden="true"
          priority
          width={128}
          height={128}
          className="w-[1em] h-[1em] shrink-0 animate-spin-slow origin-center will-change-transform object-contain"
          style={{ transformOrigin: "center" }}
        />
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