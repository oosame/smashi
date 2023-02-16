/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Almarai", ...defaultTheme.fontFamily.sans],
      },
      colors : {
        black: "#050505",
        white: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
