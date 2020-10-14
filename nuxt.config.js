export default {
  ssr: false,
  head: {
    title: 'ごちイラニュース',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { hid: 'description', name: 'description', content: 'ごちうさ新着ニュースをすぐに受け取りたい方へ' },
      { hid: 'og:title', property: 'og:title', content: 'ごちイラニュース' },
      { hid: 'og:description', property: 'og:description', content: 'ごちうさ新着ニュースをすぐに受け取りたい方へ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ごちイラニュース' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect dns-prefetch', href: '//news-api.gochiusa.team' }
    ]
  },
  manifest: {
    name: 'ごちイラニュース',
    short_name: 'ごちニュース',
    description: 'ごちうさ新着ニュースをすぐに受け取りたい方へ',
    lang: 'ja',
    theme_color: '#7b5544',
    background_color: '#7b5544',
    display: 'standalone',
    scope: '/',
    start_url: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-purgecss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
    'nuxt-precompress'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faShareAltSquare'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faTwitterSquare', 'faLine']
      }
    ]
  },
  purgeCSS: {
    whitelistPatterns: [/(^|\.)fa-/, /-fa($|\.)/]
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: true, // set false to turn off console messages
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip']
    },
    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 }
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8
    }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://cdn.gochiusa.team/core_sys',
    extractCSS: true
  },
  vue: {
    devtools: (process.env.NODE_ENV !== 'production')
  },
  dev: (process.env.NODE_ENV !== 'production')
}
