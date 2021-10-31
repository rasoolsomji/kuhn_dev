module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Roboto Condensed', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        blue: {
          light: '#84ABE4',
          DEFAULT: '#4D75AF',
          dark: '#24508F'
        },
        red: {
          light: '#EBBEB7',
          DEFAULT: '#F06057',
          dark: '#A0403A'
        },
        green: {
          light: '#97C6C0',
          DEFAULT: '#7DBFB6',
          dark: '#406F68'
        },
        grey: {
          light: '#edeae2',
          DEFAULT: '#7E8F98',
          dark: '#5A6369',
          darkest: '#3E474B'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
