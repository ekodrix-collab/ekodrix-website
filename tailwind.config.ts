import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ekodrix Brand Colors (softer, logo-like)
        ekodrix: {
          charcoal: "#333333",
          "charcoal-dark": "#1F1F1F",
          "charcoal-light": "#4A4A4A",
          // Muted logo green (not neon)
          green: "#28B36A",
          "green-dark": "#1E8450",
          "green-light": "#4CCF8B",
        },
        // ResellerPro Brand Colors (logo-style blue)
        resellerpro: {
          "blue-dark": "#1C4FA3",
          "blue-medium": "#2F80ED",
          "blue-light": "#56A2FF",
          "blue-glow": "#A4C9FF",
        },
        // Base Colors
        midnight: "#0A0E27",
        cosmic: "#0F172A",
        void: "#000514",
        accent: {
          start: "#28B36A",
          end: "#2F80ED",
          glow: "#A4C9FF",
        },
        success: "#28B36A",
        warning: "#F59E0B",
        error: "#EF4444",
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui"],
        body: ["var(--font-body)", "SF Pro Display", "system-ui"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs: "clamp(0.75rem, 0.7vw, 0.875rem)",
        sm: "clamp(0.875rem, 0.9vw, 1rem)",
        base: "clamp(1rem, 1vw, 1.125rem)",
        lg: "clamp(1.125rem, 1.2vw, 1.25rem)",
        xl: "clamp(1.25rem, 1.5vw, 1.5rem)",
        "2xl": "clamp(1.5rem, 2vw, 2rem)",
        "3xl": "clamp(2rem, 3vw, 3rem)",
        "4xl": "clamp(2.5rem, 4vw, 4rem)",
        "5xl": "clamp(3rem, 5vw, 5rem)",
        "6xl": "clamp(3.5rem, 6vw, 6rem)",
        "7xl": "clamp(4rem, 8vw, 8rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #00FF88 0%, #3B82F6 100%)",
        "ekodrix-gradient": "linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)",
        "resellerpro-gradient": "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 50%, #60A5FA 100%)",
        "resellerpro-wave": "linear-gradient(90deg, #3B82F6 0%, #1E3A8A 25%, #3B82F6 50%, #60A5FA 75%, #3B82F6 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
