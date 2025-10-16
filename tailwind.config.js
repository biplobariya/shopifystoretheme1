/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
    "./config/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0049B7',
        secondary: '#7D76FF',
      },
    },
  },
  plugins: [],
}
