import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true, //모바일에서 호버 제한
  },
  theme: {
    extend: {
      keyframes: {
        flowText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        flowText: "flowText 5s linear infinite",
        buttonHover: "buttonHover 0.3s ease forwards",
      },
      colors: {},
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4.5rem",
        responsive: "10vw", // 반응형 폰트 크기 추가
      },
      stroke: {
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "black",
      },
    },
  },
  plugins: [],
};
export default config;
