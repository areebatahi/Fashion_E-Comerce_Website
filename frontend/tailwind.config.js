/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffaf0',
          100: '#fff3db',
          300: '#ffd98a',
          500: '#f6c23e',
          600: '#d9a81f'
        }
      }
    }
  },
  plugins: []
}
