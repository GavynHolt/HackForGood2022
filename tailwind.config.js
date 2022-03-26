const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-background': "url('/src/assets/welcome-background.jpeg')",
        'bg-1': "url('/src/assets/bg_1.jpg')",
      },
      fontFamily: {
        'uber': ['Uber Move Text', 'sans-serif'],
      }
    },
    // colors: {
    //   'banner': '#ff385c',
    //   'white': '#FFFFFF',
    //   'blue': '#405fff',
    // }
  },
  plugins: [],
}
