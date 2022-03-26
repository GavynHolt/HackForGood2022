const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-background': "url('/src/assets/welcome-background.jpeg')",
      },
      fontFamily: {
        'uber': ['Uber Move Text', 'sans-serif'],
      }
    },
    colors: {
      ...colors,
      'banner': '#ff385c',
      'white': '#FFFFFF',
      'navyblue': '#405fff'
    }
  },
  plugins: [],
}
