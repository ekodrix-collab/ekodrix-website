"use client";

import { motion } from "framer-motion";

interface ResellerProLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ResellerProLogo({ className = "", size = "md" }: ResellerProLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-12",
    md: "w-24 h-16",
    lg: "w-32 h-20",
  };

  return (
    <div className={`${className} ${sizeClasses[size]} relative`}>
      <svg
        viewBox="0 0 200 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave-like connecting lines */}
        <motion.path
          d="M 20 40 Q 50 80, 80 40 T 140 40"
          stroke="url(#resellerpro-gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Nodes */}
        {[
          { cx: 20, cy: 40, color: "#3B82F6" },
          { cx: 80, cy: 80, color: "#1E3A8A" },
          { cx: 140, cy: 40, color: "#3B82F6" },
          { cx: 180, cy: 40, color: "#60A5FA" },
        ].map((node, i) => (
          <g key={i}>
            {/* Glow effect */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="18"
              fill={node.color}
              opacity="0.3"
            />
            {/* Main node */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            />
            {/* Highlight */}
            <circle
              cx={node.cx - 3}
              cy={node.cy - 3}
              r="4"
              fill="white"
              opacity="0.6"
            />
          </g>
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="resellerpro-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
