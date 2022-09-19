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
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        'josa-teal': {
          '100': '#daf3f3',
          '300': '#9bdedf',
          DEFAULT: '#14b7b8',
          '700': '#099293'
        },
        'josa-black': {
          'light': '#282e30',
          DEFAULT: '#2e3436',
        },
        'josa-grey': {
          '100': '#f7f6f5',
          '300': '#e2d7cd',
          DEFAULT: '#aea79f',
          '700': '#665f56',
        },
      },
      fontFamily: {
        'IBMPlexSansArabic': 'IBM Plex Sans Arabic',
        'IBMPlexSerif': 'IBM Plex Serif',
        'IBMPlexSans': 'IBM Plex Sans',
        'IBMPlexMono': 'IBM Plex Mono',
      },
      maxWidth: {
        'xxs': '12rem'
      },
      opacity: {
        '90': '0.90'
      },
      minWidth: {
        'xs': '20rem',
        'max': 'max-content',
      },
      maxWidth: {
        'min': 'min-content',
      }
    }
  },
  variants: {
    textAlign: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
    fontSize: ['responsive', 'direction'],
    lineHeight: ['responsive', 'direction'],
    borderRadius: ['responsive', 'direction'],
    inset: ['responsive', 'hover', 'focus', 'direction'],
    alignItems: ['hover', 'focus', 'direction'],
  },
  plugins: [
    require('tailwindcss-dir')(),
  ]
}
