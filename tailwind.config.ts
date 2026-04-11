import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "korra-black": "#0A0A0A",
        "korra-cream": "#F5F0E8",
        "korra-gold": "#C9A84C",
        "korra-gold-light": "#E8C97A",
        "korra-gray-light": "#BBBBBB",
        "korra-border": "#2A2A2A",
      },
      fontFamily: {
        display: "var(--font-playfair)",
        serif: "var(--font-playfair)",
      },
    },
  },
};

export default config;
