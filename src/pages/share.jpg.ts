import type { APIRoute } from 'astro'
import { renderShareImage, SHARE_IMAGE_TYPE } from '../services/share-image.ts'

export const GET: APIRoute = async () =>
  new Response(await renderShareImage(`public/icons/logo.svg`), {
    headers: { 'Content-Type': SHARE_IMAGE_TYPE },
  })
