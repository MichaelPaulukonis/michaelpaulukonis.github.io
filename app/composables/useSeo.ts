export interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function useSeo(options: SeoOptions) {
  const { path } = useRoute()
  const siteName = 'Michael Paulukonis'
  const baseUrl = 'https://michaelpaulukonis.github.io'
  
  const title = options.title ? `${options.title} | ${siteName}` : siteName
  const description = options.description || 'Personal website and blog of Michael Paulukonis - Software Engineer and Digital Artist.'
  const url = options.url || `${baseUrl}${path}`.replace(/\/+$/, '')
  const image = options.image || `${baseUrl}/sample.webp`
  const type = options.type || 'website'

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'author', content: options.author || siteName },
      
      // Open Graph
      { property: 'og:site_name', content: siteName },
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },

      // Article specific
      options.publishedTime ? { property: 'article:published_time', content: options.publishedTime } : null,
      options.modifiedTime ? { property: 'article:modified_time', content: options.modifiedTime } : null,
    ].filter((m): m is any => m !== null),
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
