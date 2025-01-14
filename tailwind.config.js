/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "collor-b-yellow": "#F8B304", // Adiciona a cor personalizada
      },
    },
  },
  plugins: [],
}