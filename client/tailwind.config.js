/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'acc-1': '#b70007',
      },
      fontFamily: {
        robot: ['MR ROBOT', 'monospace'],
        albertSans: ['Albert Sans', 'serif'],
      },
    },
  },
  plugins: [],
};