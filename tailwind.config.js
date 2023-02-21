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
        },
        gray: {
          dark: "#4a4e52",
          placeholder: "#6e7c87",
          light: "#e0e2e3",
          lighter: "#f5f5f5",
          lightest: "#f7f9f9",
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
      },
    },
  },
  plugins: [],
};
