/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        teal: '#3fb1a8',
        charcoal: '#36454F',
        offwhite: '#f4f4f0',
      },
    },
  },
  plugins: [],
}