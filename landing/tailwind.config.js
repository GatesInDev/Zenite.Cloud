/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  corePlugins: {
    preflight: false, // keeps existing landing-page styles intact
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
