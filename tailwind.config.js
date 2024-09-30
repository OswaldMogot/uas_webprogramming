import daisyui from 'daisyui';
import tsh from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx'
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyui, tsh],
  daisyui: {
    themes : ['cupcake']
  }
}

