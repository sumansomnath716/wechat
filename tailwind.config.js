/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundColor:{
        green:{
          50: '#fdf8f6',
          100: '#ADBC9F',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#78A083',
          800: '#0D9276',
          900: '#12372A',
        }
      },
      colors:{
        green:{
          50: '#fdf8f6',
          100: '#ADBC9F',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#78A083',
          800: '#0D9276',
          900: '#12372A',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

