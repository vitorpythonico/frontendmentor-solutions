/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.html" ],
  theme: {
    extend: {
      colors: {
        'heading': '#1c232b',
        'body': '#6c7289',
        'emphasis': '#3c8067'
      },

      fontFamily: {
        'heading': ['Fraunces', 'serif'],
        'body': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

