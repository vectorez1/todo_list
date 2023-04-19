/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        remolacha:{
          800:'#C71F3D',
          600:'#EF4977',
          300:'#F9BECE',
          200:'#F9E9F2',
        }
      }
    },
  },
  plugins: [],
}

