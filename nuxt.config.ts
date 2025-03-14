export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-content-assets', '@nuxt/content'],
    css: ['/assets/css/main.css'],
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: false
        }
    },
    nitro: {
      prerender: {
        crawlLinks: true,
        routes: [
          '/',
          '/blog'
        ]
      }
    },
    sourcemap: false,
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-dark',
            preload: ['java','javascript']
        },
        markdown: {
            // https://github.com/rehypejs/rehype-external-links
            rehypePlugins: [
                [
                    'rehype-external-links',
                    {
                        target: '_blank',
                        rel: 'noopener noreferer'
                    }
                ]
            ]
        }
    },
    app: {
      // baseURL: "/nuxt-blog-starter/",
      head: {
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }
        ]
      }
    }
});
