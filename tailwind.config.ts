import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#EFE5D3",
        surface: "#E3D3B8",
        text: "#4A1A1E",
        "text-muted": "#8C6E5C",
        accent: "#7B2240",
        "accent-hover": "#5A1A2C",
        border: "#D9C6A6",
      },
      maxWidth: {
        content: "52rem",
      },
    },
  },
  plugins: [],
};

export default config;
