/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "josa-teal": {
          100: "#daf3f3",
          300: "#9bdedf",
          DEFAULT: "#14b7b8",
          700: "#099293",
        },
        "josa-black": {
          light: "#282e30",
          DEFAULT: "#2e3436",
        },
        "josa-grey": {
          100: "#f7f6f5",
          300: "#e2d7cd",
          DEFAULT: "#aea79f",
          700: "#665f56",
        },
        "josa-blue": {
          light: "#c5e1ee",
          DEFAULT: "#3897c0",
          dark: "#1a485b",
          veryDark: "#163e4e",
        },
        "josa-warm-grey": {
          light: "#f7f6f5",
          DEFAULT: "#efedec",
          dark: "#aea79f",
        },
        "josa-red": {
          veryLight: "#fee9e2",
          light: "#f8c0ac",
          DEFAULT: "#dd4814",
          dark: "#b83b10",
        },
        "josa-green": {
          veryLight: "#e9f3de",
          light: "#cde2bb",
          DEFAULT: "#8dbd63",
          dark: "#5c813d",
        },
      },
      fontFamily: {
        IBMPlexSansArabic: "IBM Plex Sans Arabic",
        IBMPlexSerif: "IBM Plex Serif",
        IBMPlexSans: "IBM Plex Sans",
        IBMPlexMono: "IBM Plex Mono",
      },
      maxWidth: {
        xxs: "12rem",
      },
      opacity: {
        90: "0.90",
      },
      minWidth: {
        xs: "20rem",
        max: "max-content",
      },
      maxWidth: {
        min: "min-content",
      },
    },
  },
  plugins: [
    require('tailwindcss-dir')(),
  ]
}