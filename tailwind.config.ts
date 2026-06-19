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
        "neon-blue": "#00D4FF",
        "neon-purple": "#BF5FFF",
        "neon-blue-dim": "#0099BB",
        "neon-purple-dim": "#8B2FE0",
        "dark-bg": "#050510",
        "dark-card": "#0A0A1A",
        "dark-border": "#1A1A3A",
        "glass-bg": "rgba(10, 10, 30, 0.6)",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-neon":
          "linear-gradient(135deg, #00D4FF 0%, #BF5FFF 100%)",
        "gradient-neon-subtle":
          "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(191,95,255,0.1) 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.3)",
        "neon-purple": "0 0 20px rgba(191, 95, 255, 0.3)",
        "neon-glow": "0 0 40px rgba(0, 212, 255, 0.2), 0 0 80px rgba(191, 95, 255, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0, 212, 255, 0.5)" },
          "50%": { borderColor: "rgba(191, 95, 255, 0.5)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
