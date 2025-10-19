/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        secondary: "#F7931E",
        grass: "#4CAF50",
        fire: "#FF5722",
        water: "#2196F3",
        electric: "#FFC107",
        psychic: "#9C27B0",
        ice: "#87CEEB",
        dragon: "#673AB7",
        dark: "#607D8B",
        fairy: "#E91E63",
      },
      fontFamily: {
        pokemon: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
