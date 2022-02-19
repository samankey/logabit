export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'logabit-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: false,

  css: [
    '~/assets/scss/global.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/mixins.scss'
    ]
  },

  plugins: [
    { src: '~/plugins/notifications-ssr', ssr: false },
    { src: '~/plugins/notifications-client', ssr: false }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  moment: {
    locales: ['ko'],
    defaultLocale: 'ko'
  },

  build: {
    optimizeCSS: true,

    extractCSS: {
      ignoreOrder: true
    }
  }
}
