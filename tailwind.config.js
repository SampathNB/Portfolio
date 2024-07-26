const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f35128",
      },
      screens: {
        "small-2xl": "1399px",
        "3xl": "1699px",
      },
    },
  },
  plugins: [],
};
