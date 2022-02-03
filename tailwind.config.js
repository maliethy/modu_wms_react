const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx,css}',
    './interfaces/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './apis/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      //Responsive Design
      xs: '475px',
      tb: '600px', //tablet
      ...defaultTheme.screens,
    },
    extend: {},
  },
};
