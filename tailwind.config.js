/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Light Brown': '#ddc99c',
        Brown: '#654930',
        'Drak Brown': '#3f2a13',
        Fond1: '#ddc99c',
        White: '#fff8ea'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '2rem'
      },
      fontFamily: {
        rowdies: 'Rowdies',
        itim: 'Itim',
        biryani: 'Biryani'
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.3125rem',
        'rounded-2': '0.5rem',
        'rounded-3': '0.78125rem',
        'rounded-4': '1.875rem',
        'rounded-5': '62.4375rem'
      }
    }
  },
  plugins: []
}
