/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter', 'sans-serif'],
        'oswald':['Oswald', 'sans-serif']
      },
      colors:{
        customGreen:'#27AE60'
      },
      animation: {
        'spinner-grow': 'spinner-grow 0.75s linear infinite',
      },
      keyframes: {
        'spinner-grow': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(0.5)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
