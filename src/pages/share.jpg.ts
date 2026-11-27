import type { APIRoute } from 'astro'
import { renderShareImage } from '../services/share-image.ts'

export const GET: APIRoute = async () =>
  renderShareImage(`public/icons/logo.svg`)
