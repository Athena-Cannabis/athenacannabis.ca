const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        colors: {
          'brand-blue': {
            50: '#F4F9FF',
            100: '#EEF4FC',
            200: '#D9E2EF',
            300: '#C0CDDF',
            400: '#A1B2CC',
            500: '#7E94B4',
            600: '#5C7598',
            700: '#3C516F',
            800: '#273B59',
            900: '#122541',
          },
        },
        // The following colours deviate from the tailwind default
        gray: colors.gray,
        green: colors.emerald,
        blue: colors.lightBlue,
        purple: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
