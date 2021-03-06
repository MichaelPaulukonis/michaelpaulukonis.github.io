import blogsEn from './contents/en/blogsEn.js'
const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')

const productionUrl = {
  en: '/en'
}
const baseUrl = 'https://michaelpaulukonis.github.io'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
} : {}

module.exports = {
  ...routerBase,
  env: {
    baseUrl,
    productionUrl
  },
  head: {
    title: 'Michael Paulukonis| Software Architect and Code Artist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-150x150.png' },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@othermichael' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-512x512.png', sizes: '512x512' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss'
  ],

  build: {
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      })
    }
  },
  plugins: ['~/plugins/lazyload', '~/plugins/globalComponents', { src: '~plugins/ga.js', ssr: false }],
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
    'nuxt-webfontloader'
  ],

  styleResources: {
    scss: [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ]
  },

  webfontloader: {
    custom: {
      families: ['Graphik', 'Tiempos Headline'],
      urls: ['/fonts/fonts.css']
    }
  },

  generate: {
    routes: [
      '404'
    ]
      .concat(blogsEn.map(w => `/blog/${w}`))
  }
}
