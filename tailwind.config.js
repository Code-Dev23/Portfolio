/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgImage": "url('./images/background.jpg')"
      }
    },
    fontFamily: {
      
    }
  },
  plugins: [],
}