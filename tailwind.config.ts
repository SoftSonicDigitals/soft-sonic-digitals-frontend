import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "min-[955]": "955px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1836px",
      // => @media (min-width: 1836px) { ... }
    },
    extend: {
      boxShadow: {
        custom: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      red: "#ed4542",
      white: { DEFAULT: "#ffffff", 100: "#fafafa", 200: "#ededed" },
      gray: {
        0: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        300: "#f5f5f5",
        400: "#686f7a",
        500: "#abadb0",
        600: "#d1d7e0",
        700: "#495057",
        800: "#303845ff",
        900: "#212529",
        950: "#212121",
      },
      orange: { DEFAULT: "#F6702D", 100: "#fff8f2", 600: "#ed4c37" },
      pink: "#e83556",
      black: { DEFAULT: "#000000", 200: "#1d2938", 500: "#12131c" },

      rose_white: "#fff7f7",
      purple: {
        DEFAULT: "#4263eb",
        300: "#91a7ff",
        700: "#4263eb",
      },
    },
  },

  plugins: [],
};
export default config;
