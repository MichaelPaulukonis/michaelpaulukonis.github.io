import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**.md',
        exclude: ['blog/**']
      },
      search: {
        fields: {
          title: true,
          description: true,
          body: true
        }
      }
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**.md',
      schema: z.object({
        tags: z.array(z.string()).optional(),
        headline: z.string().optional(),
        excerpt: z.string().optional(),
        date: z.date().optional(),
        dateUpdated: z.date().optional(),
        author: z.string().optional(),
        socialImage: z.object({
          src: z.string(),
          mime: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          alt: z.string().optional()
        }).optional()
      }),
      search: {
        fields: {
          title: true,
          headline: true,
          excerpt: true,
          body: true
        }
      }
    }),
    authors: defineCollection({
      type: 'data',
      source: 'authors.json',
      schema: z.object({
        name: z.string(),
        bio: z.string().optional(),
        avatar: z.string().optional(),
        social: z.object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
          instagram: z.string().optional(),
          bluesky: z.string().optional()
        }).optional()
      })
    })
  },
})