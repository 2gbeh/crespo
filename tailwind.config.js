import COLOR from "./src/constants/COLOR";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: COLOR.brand,
      },
    },
  },
  plugins: [],
};
