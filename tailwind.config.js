/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1890px',
      },
      animation: {
        fadeInWheel: 'fadeInWheel 2s ease-in-out 1',
        fadeOutWheel: 'fadeOutWheel 2s ease-in-out 1',
      },
      keyframes: {
        fadeInWheel: {
          '100%': {
            transform: 'rotate(-3deg)',
            transform: 'translate(120px, 50%)',
            opacity: 0
          },
        },
        fadeOutWheel: {
          '0%': {
            transform: 'rotate(-3deg)',
            transform: 'translate(120px, 50%)',
            opacity: 0
          },
        }
      }
    },
  },
  plugins: [],
}