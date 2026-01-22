"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop (not mobile/tablet)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) return;

    setMounted(true);

    let rafId: number;
    const updatePosition = (e: MouseEvent) => {
      // Use RAF for smooth, hardware-accelerated updates
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Ekodrix Gear Logo Cursor */}
      <div
        className="fixed pointer-events-none z-[99999]"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          willChange: "transform",
        }}
      >
        <div
          className="transition-all duration-100 ease-out"
          style={{
            width: isHovering ? "32px" : "24px",
            height: isHovering ? "32px" : "24px",
          }}
        >
          {/* Ekodrix Gear Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Gear outer shape */}
            <path
              d="M12 2L13.5 5L17 4.5L16.5 8L19.5 9.5L18 12L19.5 14.5L16.5 16L17 19.5L13.5 19L12 22L10.5 19L7 19.5L7.5 16L4.5 14.5L6 12L4.5 9.5L7.5 8L7 4.5L10.5 5L12 2Z"
              fill={isHovering ? "url(#gear-gradient)" : "#28B36A"}
              className="transition-colors duration-100"
            />
            {/* Center circle cutout */}
            <circle cx="12" cy="12" r="5" fill="#0A0F1A" />
            {/* Three inner blades */}
            <path
              d="M12 9L13 12L12 13L11 12Z"
              fill={isHovering ? "url(#blade-gradient)" : "#28B36A"}
              className="transition-colors duration-100"
            />
            <path
              d="M14.5 11.5L12.5 13.5L11.5 13L12.5 10.5Z"
              fill={isHovering ? "url(#blade-gradient)" : "#28B36A"}
              className="transition-colors duration-100"
            />
            <path
              d="M9.5 11.5L11.5 13.5L12.5 13L11.5 10.5Z"
              fill={isHovering ? "url(#blade-gradient)" : "#28B36A"}
              className="transition-colors duration-100"
            />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#28B36A" />
                <stop offset="100%" stopColor="#2F80ED" />
              </linearGradient>
              <linearGradient id="blade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2F80ED" />
                <stop offset="100%" stopColor="#28B36A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
