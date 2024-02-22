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
        primary: "#111",
        secondary: "#0aff9d",
        tertiary: "#ebecf3",
      },
      textColor: {
        "t-primary": "#ebecf3",
        "t-secondary": "rgb(235, 236, 243)",
      },
    },
  },
  plugins: [],
};
export default config;
