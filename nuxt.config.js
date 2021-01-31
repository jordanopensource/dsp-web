export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Digital Safety Portal - JOSA',
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
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"},
    ],
    script:[
      {
        src:"https://code.jquery.com/jquery-2.1.4.min.js",
        body: true,
        type: "text/javascript"
      },
      {
        src: 'https://ots.jordanopensource.org/assets/form/form.js',
        id: 'zammad_form_script',
        body: true,
        type: "text/javascript"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/fonts/aleo.css',
    '@/assets/css/typography.css',
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
    ['nuxt-fontawesome',
    {
      imports: [
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }],
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
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: false,
    seo: true
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
