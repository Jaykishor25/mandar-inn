/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
        },
        dark: {
          light: '#222222',
          DEFAULT: '#111111',
          pure: '#000000',
        }
      }
    },
  },
  plugins: [],
}

