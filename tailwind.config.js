/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'zoom-blue': '#0078C2',
        'zoom-dark-blue': '#055E80',
        'zoom-green': '#2E9F58',
      }
    },
  },
  plugins: [],
}