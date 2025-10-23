/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // all files inside app folder
    './pages/**/*.{js,ts,jsx,tsx}', // if you have pages folder
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
