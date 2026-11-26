import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection, reference } from 'astro:content'

const posts = defineCollection({
  loader: glob({
    pattern: `*/index.md`,
    base: `./src/content/posts`,
    generateId: ({ entry }) => entry.replace(/\/index\.md$/u, ``),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      date: z.coerce.date(),
      tags: z
        .array(z.string())
        .default([])
        .transform(tags => tags.filter(tag => tag.trim())),
      cover: image().optional(),
    }),
})

const home = defineCollection({
  loader: glob({ pattern: `home.md`, base: `./src/content` }),
  schema: z.object({
    featuredPosts: z.array(reference(`posts`)).default([]),
  }),
})

const settings = defineCollection({
  loader: glob({ pattern: `settings.json`, base: `./src/content` }),
  schema: z.object({
    name: z.string(),
    email: z.string(),
    description: z.string(),
    socialMedia: z.array(
      z.object({ name: z.string(), url: z.url(), icon: z.string() }),
    ),
    resume: z.string(),
  }),
})

export const collections = { posts, home, settings }
