/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      },
      gridAutoRows: {
        '22rem': '22rem',
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fill, minmax(16rem, 1fr))',
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
      }
    },
  },
  plugins: [],
}

