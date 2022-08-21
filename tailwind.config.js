/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : 'Poppins'
      },
      colors: {
        'omo-yellow': '#FEE967',
        'omo-purple': '#9B5DE5',
        'omo-pink': '#F15BB5',
        'omo-green': '#00F5D4',
        'cool-yellow': '#FEE9674D',
        'cool-purple': '#9B5DE54D',
        'cool-pink': '#F15BB54D',
        'cool-green': '#00F5D44D',
      },
    },
  },
  plugins: [],
}