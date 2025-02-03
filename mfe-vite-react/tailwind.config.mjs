/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#F4F9FD',
          light: '#CEE8F8',
          main: '#5DBFED',
          dark: '#53ABD4',
          darker: '#3B7996'
        },
        secondary: {
          lighter: '#F4F9F8',
          light: '#D2E8E2',
          main: '#70BFAF',
          dark: '#64AB9D',
          darker: '#47796F'
        },
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          main: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768'
        },
        success: {
          lighter: '#D3FCD2',
          light: '#77ED8B',
          main: '#22C55E',
          dark: '#118D57',
          darker: '#065E49'
        },
        warning: {
          lighter: '#FFF5CC',
          light: '#FFD666',
          main: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100'
        },
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          main: '#FF5630',
          dark: '#B71D18',
          darker: '#7A0916'
        },
        gray: {
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24'
        },
        white: {
          DEFAULT: '#FFF',
          50: '#FAFAFA',
          100: '#FCFCFC',
          200: '#F0F0F0',
          300: '#E5E5E5',
          400: '#D9D9D9',
          500: '#CCCCCC',
          600: '#B3B3B3'
        }
      }
    }
  },
  plugins: []
}
