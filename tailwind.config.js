/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        LightBrown: '#ddc99c',
        Brown: '#654930',
        DarkBrown: '#3f2a13',
        White: '#fff8ea'
      },
      fontFamily: {
        rowdies: ['Rowdies', 'sans-serif'],
        itim: ['Itim', 'sans-serif'],
        biryani: ['Biryani', 'sans-serif']
      }
    }
  },
  plugins: []
}
