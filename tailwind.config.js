const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      //Responsive Design
      xs: '475px',
      tb: '600px', //tablet
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
