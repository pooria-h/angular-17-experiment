/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  darkMode: 'false',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

