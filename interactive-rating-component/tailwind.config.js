/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '15px',
      },
      colors: {
        'background': '#121417',
        'card': '#252d37',
        'rating': '#7c8798',
        'content': '#959eac',
        'button': '#fb7413',
      },
      fontFamily: {
        content: ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}

