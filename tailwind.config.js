/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair : 'playFair Display',
        assistant : 'Assistant'
      },
      colors :{
        primer : '#094067',
        smooth : '#d8eefe',
        secondary : '#90b4ce'

      }
    },
  },
  plugins: [],
};
