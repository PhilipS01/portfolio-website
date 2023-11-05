/** @type {import('tailwindcss').Config} */
const antiDrag = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        retro_primary: "#e9dab1",
        retro_secondary: "#181818",
        retro_accent_green: "#689d69",
        retro_accent_blue: "#458587",
        retro_accent_yellow: "#d79922",
        retro_accent_red: "#cc231c",
        retro_text_dark: "#232B23",
        retro_text_inactive: "#c1ae8a",
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
  plugins: [
    require("@codaworks/react-glow/tailwind"),
    antiDrag(function ({ addUtilities }) {
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),
  ],
};
