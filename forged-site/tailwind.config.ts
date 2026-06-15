import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        dark: "#111111",
        dark2: "#1a1a1a",
        gold: "#C9A84C",
        "gold-m": "#C9941A",
        "gold-d": "#7A5C1E",
        cream: "#F5F5F0",
        muted: "#888888",
        light: "#CCCCCC",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
