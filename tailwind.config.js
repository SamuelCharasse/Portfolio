/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        LightBrown: '#ddc99c',
        Brown: '#654930',
        DarkBrown: '#3f2a13',
        Fond1: '#ddc99c',
        White: '#fff8ea'
      },
      fontFamily: {
        rowdies: ['Rowdies', 'sans-serif'],
        itim: ['Itim', 'sans-serif'],
        biryani: ['Biryani', 'sans-serif']
      },
      fontWeight: {
        biryaniBold: '700'
      }
    }
  },
  plugins: []
}