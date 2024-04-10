/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'lato' :['Lato','sans-serif'],
      'rubik':['Rubik','sans-serif'],
      'quick' :['Quicksand','sans-serif']
    },
  },
  plugins: [],
}