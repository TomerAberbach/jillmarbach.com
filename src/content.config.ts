import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection, reference } from 'astro:content'

const isRelativePath = (path: unknown): boolean =>
  typeof path === `string` && path !== `` && !/^(?:\/|[a-z]+:)/iu.test(path)

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
      // A cover outside the post's folder can't be resized, so it's ignored.
      cover: z.preprocess(
        cover => (isRelativePath(cover) ? cover : undefined),
        image().optional(),
      ),
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
