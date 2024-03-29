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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      red: "#ed4542",
      white: "#ffffff",
      gray: {
        0: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        600: "#d1d7e0",
        700: "#495057",
        800: "#303845ff",
        900: "#212529",
      },
      orange: "#F6702D",
      pink: "#e83556",
      black: "#000000",
    },
  },

  plugins: [],
};
export default config;
