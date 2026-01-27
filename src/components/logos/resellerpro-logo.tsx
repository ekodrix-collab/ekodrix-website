"use client";

import { motion } from "framer-motion";

interface ResellerProLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ResellerProLogo({ className = "", size = "md" }: ResellerProLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-auto",
    md: "w-24 h-auto",
    lg: "w-32 h-auto",
  };

  return (
    <div className={`${className} ${sizeClasses[size]} relative flex items-center`}>
      <img 
        src="/resellerpro-logo-removebg-preview.png" 
        alt="ResellerPro Logo"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
