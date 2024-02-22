import COLOR from "./src/constants/COLOR";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: COLOR.brand,
        brand_gold: COLOR.brand_gold,
        brand_blue: COLOR.brand_blue,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
