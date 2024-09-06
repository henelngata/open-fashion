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
        back: "#E6E9EE",
        foot: "#F9F9F9",
        "off-white": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
export default config;
