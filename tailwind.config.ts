import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020605",
        graphite: "#071412",
        teal: { deep: "#073b35", DEFAULT: "#0c5a50", light: "#78cdbb" },
        mint: { DEFAULT: "#9ff3d1", pale: "#d8ffe8" },
      },
      boxShadow: { glow: "0 0 60px rgba(159, 243, 209, 0.14)" },
      backgroundImage: {
        grid: "linear-gradient(rgba(159,243,209,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(159,243,209,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
