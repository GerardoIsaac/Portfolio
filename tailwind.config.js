/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '770px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontFamily: {
      signature: ['Great Vibes', 'cursive'],
    },
  },
  plugins: [],
} 