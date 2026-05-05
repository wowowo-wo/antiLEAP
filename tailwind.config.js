/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#F2F2F2',
        accent: '#FF0000',
      },
      fontFamily: {
        protest: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}