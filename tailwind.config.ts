import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1a237e",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#39ff14",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#1a237e",
          foreground: "#ffffff",
        },
        gaming: {
          100: "#39ff14",
          200: "#32e011",
          300: "#2bc20e",
          400: "#24a30c",
          500: "#1d850a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { filter: "brightness(100%)" },
          "50%": { filter: "brightness(150%)" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;