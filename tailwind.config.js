/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F5F7F8',
        secondary: '#45474B',
        'theme-green': '#495E57',
        'theme-yellow': '#F4CE14',
      },
    },
  },
  plugins: [],
}