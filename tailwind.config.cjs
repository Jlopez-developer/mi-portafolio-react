/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050d1f99",
        secondary: "#e8f0fe",
        tertiary: "#0a1628cc",
        "black-100": "#0a1628",
        "black-200": "#060e1e",
        "white-100": "#f0f4ff",
        "axion-blue": "#0057FF",
        "axion-navy": "#0D1B3E",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0057ff44",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
