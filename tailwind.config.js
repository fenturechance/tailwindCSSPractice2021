module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: '#eee',
      blue: '#0af',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
