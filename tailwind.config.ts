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
        bg: "#FAF7F2",
        surface: "#F2EDE6",
        text: "#2C2825",
        "text-muted": "#6B6560",
        accent: "#A65D4A",
        "accent-hover": "#8E4E3D",
        border: "#E2DCD5",
      },
      maxWidth: {
        content: "52rem",
      },
    },
  },
  plugins: [],
};

export default config;
