import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { getExcerpt, getText } from './excerpt.ts'

export type Post = CollectionEntry<`posts`>

/** Returns every post, newest first, ordering the same day's posts by ID. */
export const getPosts = async (): Promise<Post[]> =>
  (await getCollection(`posts`)).sort(
    (left, right) =>
      right.data.date.getTime() - left.data.date.getTime() ||
      (left.id < right.id ? 1 : -1),
  )

export const getPostPath = (post: Post): string => `/posts/${post.id}`

export const getPostExcerpt = (post: Post): string =>
  getExcerpt(post.body ?? ``)

export const getPostSearchText = ({ data, body }: Post): string =>
  [data.title, ...data.tags.map(tag => `#${tag}`), getText(body ?? ``)].join(
    ` `,
  )
