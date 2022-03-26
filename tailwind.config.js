module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-background': "url('/src/assets/welcome-background.jpeg')",
      }
    },
    colors: {
      'banner': '#ff385c',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}
