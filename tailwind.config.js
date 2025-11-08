/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        secondary: "#F7931E",
        link: "#007FFF",
        "link-light": "#339CFF",
      },
      fontFamily: {
        pokemon: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
