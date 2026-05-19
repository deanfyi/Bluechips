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
        canvas: "#1b1c1e",
        surface: "#1e1f21",
        elevated: "#252729",
        banner: "#1b1c1e",
        border: "#262729",
        "border-strong": "#2f3033",
        primary: "#d3dae4",
        muted: "#8e949c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-season-mix-medium)",
          "Season Mix",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
