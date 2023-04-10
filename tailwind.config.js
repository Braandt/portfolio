/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['var(--font-rubik)'],
        'alef': ['var(--font-alef)'],
        'fira': ['var(--font-fira)']
      }
    },
  },
  plugins: [],
}

