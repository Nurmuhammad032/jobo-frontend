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
        dark: "#131215",
        blue: "#4b3bbf",
        textGray: "#53525e",
        textBlue: "#3921d7",
      },
    },
  },
  plugins: [],
};
export default config;
