/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { 950: '#12301F', 900: '#17402B', 800: '#1F4D35', 700: '#2B6045' },
        mustard: { 400: '#F9BE45', 500: '#F6AA1C', 600: '#E39608', 700: '#8F5A00' },
        ochre: '#C28000',
        cream: { 50: '#FFFEFB', 100: '#FBF9F3', 200: '#F3EEDF' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
