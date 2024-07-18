/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F4A261',
        'type-color': '#FFD18E',
        'black':"#000000",
        'green':"#1A5319",
        'blue':"#36C2CE",

      },
    },
  },
  plugins: [],
}