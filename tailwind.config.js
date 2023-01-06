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
    extend: {
      colors: {
        color1: '#051323',
        color2: '#22445F',
        color3: '#CAE3E3',
        color4: '#A20234',
        color5: '#eb125d',
        color6: '#008F6B',
        colordark: '#030A12',
      },
    },
    fontFamily: {
      signature: ['Great Vibes', 'cursive'],
    },
  },
  plugins: [],
} 