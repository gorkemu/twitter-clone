/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1d9bf0",
          dark: "#1a8cd8",
          light: "#b8e0fa",
          lighter: "#1d9bf01a",
          lightest: "#1d9bf01a",
          google: "#4285f40a",
        },
        gray: {
          dark: "#4a4e52",
          placeholder: "#6e7c87",
          light: "#e0e2e3",
          lighter: "#f5f5f5",
          lightest: "#f7f9f9",
          google: "#3c4043",
        },
        green: {
          dark: "#00ba7c",
          light: "#00ba7c1a",
        },
        pink: {
          dark: "#f91880",
          light: "#f918801a",
        },
        black: "#0f1419",
        line: "#eff3f4",
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/twitter-bg-image.png')",
      },
    },
  },
  plugins: [],
};
