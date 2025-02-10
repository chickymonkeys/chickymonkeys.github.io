import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    research: defineCollection({
      type: 'page',
      schema: z.object({
        title: z.string(),
        meta: z.object({
          title: z.string(),
          title_link: z.string().optional(),
          links: z.array(z.object({
            label: z.string(),
            link: z.string(),
          })),
          coauthors: z.array(z.object({
            coauthor: z.object({
              name: z.string(),
              link: z.string().optional(),
            }),
          })),
          cta: z.string().optional(),
          date: z.string().optional(),
        }),
      }),
      source: 'research/*.md',
    }),
    teaching: defineCollection({
      type: 'page',
      schema: z.object({
        meta: z.object({
          subject: z.string(),
          institution: z.string().optional(),
          role: z.string(),
          semester: z.string(),
          degree: z.string(),
          date: z.string().optional(),
        }),
      }),
      source: 'teaching/*.md',
    }),
  },
})
