import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { parseFrontmatter } from '@astrojs/markdown-remark'
import type { APIRoute, GetStaticPaths } from 'astro'
import { getPosts } from '../../services/posts.ts'
import {
  renderShareImage,
  SHARE_IMAGE_TYPE,
} from '../../services/share-image.ts'

type Props = { filePath: string }

export const getStaticPaths = (async () =>
  (await getPosts())
    .filter(({ data }) => data.cover)
    .map(({ id, filePath }) => ({
      params: { id },
      props: { filePath },
    }))) satisfies GetStaticPaths

export const GET: APIRoute<Props> = async ({ props: { filePath } }) => {
  // The parsed post contains the cover's built URL instead of its file path.
  const { frontmatter } = parseFrontmatter(await readFile(filePath, `utf8`))
  const coverPath = path.join(
    path.dirname(filePath),
    frontmatter.cover as string,
  )
  return new Response(await renderShareImage(coverPath), {
    headers: { 'Content-Type': SHARE_IMAGE_TYPE },
  })
}
