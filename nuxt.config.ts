// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/content',
  ],

  css: [
    '~/assets/css/main.purple.css'
  ],

  content: {
    markdown: {
      mdc: true,
      remarkPlugins: {
        'remark-attr': {}
      }
    }
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',
})
