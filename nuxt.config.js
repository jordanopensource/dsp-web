export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aman Raqami',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-2.1.4.min.js",
        body: true,
        type: "text/javascript"
      },
      {
        src: 'https://ots.jordanopensource.org/assets/form/form.js',
        id: 'zammad_form_script',
        body: true,
        type: "text/javascript"
      },
      { src: '/js/matomo.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/fonts/ibm-plex.css',
    '@/assets/css/typography.css',
    '@/assets/css/hamburgers.css',
    '@/assets/css/transitions.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n' },
    { src: '~/plugins/datetime-filter' },
    { src: '~/plugins/vue2-filters' },
    { src: '~/plugins/vue-agile' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    { path: '~/components/UI/', prefix: 'UI' },
    { path: '~/components/Lists/', prefix: 'Lists' },
    { path: '~/components/Views/', prefix: 'Views' },
    { path: '~/components/Sliders/', prefix: 'Sliders' },
    { path: '~/components/SlideTypes/', prefix: 'SlideTypes' },
    { path: '~/components/Forms/', prefix: 'Forms' },
    { path: '~/components/Helpdesk/', prefix: 'Helpdesk' },
    { path: '~/components/Elements/', prefix: 'Elements' },
    { path: '~/components/Tabs/', prefix: 'Tabs' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'tailwindcss-dir',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/moment',
    'nuxt-healthcheck',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // I18n conmodule configurationfig
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.js',
        name: 'English',
        dir: 'ltr'
      },
      {
        code: 'ar',
        iso: 'ar',
        file: 'ar.js',
        name: 'العربية',
        dir: 'rtl'
      }
    ],
    defaultLocale: 'ar',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: false,
    seo: true
  },

  moment: {
    defaultLocale: 'en',
    locales: ['ar']
  },

  healthcheck: {
    path: '/ping',
    contentType: 'application/json',
    healthy: () => {
      return JSON.stringify({ result: 'pong' })
    }
  },
  publicRuntimeConfig: {
    APIBaseURL: process.env.API_BASE_URL,
  },

  privateRuntimeConfig: {
    APIBaseURL: process.env.API_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  }
}
