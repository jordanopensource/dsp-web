/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'josa-black': '#2e3436',
        'josa-blue': {
          'light': '#c5e1ee',
          default: '#3897c0',
          'dark': '#1a485b',
          'veryDark': '#163e4e',
        },
        'josa-grey': {
          default: '#f9f9f9',
      },
      },
      fontFamily: {
        'aleoLight': 'aleo-light',
        'aleo': 'aleo',
        'aleoItalic': 'aleo-italic',
        'aleoLightItalic': 'aleo-light-italic',
        'lato': 'lato',
        'almarai': 'Almarai',
      },
    }
  },
  variants: {
    textAlign: ['responsive', 'direction'],
  },
  plugins: [
    require('tailwindcss-dir')(),
  ]
}
