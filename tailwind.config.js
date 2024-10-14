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
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        xxl: '2rem'
      },
      fontFamily: {
        rowdies: 'Rowdies',
        itim: 'Itim',
        biryani: 'Biryani'
      }
    }
  },
  plugins: []
}
