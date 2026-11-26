import type { APIRoute } from 'astro'
import { getPosts, getPostSearchText } from '../services/posts.ts'

export const GET: APIRoute = async () =>
  Response.json(
    Object.fromEntries(
      (await getPosts()).map(post => [post.id, getPostSearchText(post)]),
    ),
  )
