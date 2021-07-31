module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.html',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'className'
  theme: {
    colors:{
      'darkGreen': '#61892F',
      'brightGreen': '#86C232', 
      'black': '#222629',
      'darkGrey': '#474B4F',
      'lightGrey': '#6B6E70',
    },
    fontFamily: {
      'code': ['"Press Start 2P"', 'cursive']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
