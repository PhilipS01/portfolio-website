/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        quaternary: "#dfd9ff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#161617",
        offwhite: "#f3f3f3",
        offblack: "#1d1d1f",
        accent: "#6e1ed0",
        accent_tint: "#9961de",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
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
