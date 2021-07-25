module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hunterGreen: {
          light: '#71AD94',
          DEFAULT: '#386150',
          dark: '#345B4B'
        },
        almond: {
          DEFAULT: '#DCCCBB'
        },
        grey: {
          light: '#F3F5F6',
          DEFAULT: '#8D98A7'
        },
        sunray: {
          DEFAULT: '#EAB464'
        },
        cafe: {
          DEFAULT: '#A7754D'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
