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
          fruit:'#C71F3D',
          iceCream:'#EF4977',
          soft:'#F9BECE',
          softer:'#F9E9F2',
          salmon:'#F9C5D9',
        }
      }
    },
  },
  plugins: [],
}

