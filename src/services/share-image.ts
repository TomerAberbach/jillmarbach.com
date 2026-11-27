import sharp from 'sharp'

/**
 * Responds with the image file's first frame as a JPEG that social networks
 * can display.
 */
export const renderShareImage = async (path: string): Promise<Response> => {
  const image = new Uint8Array(
    await sharp(path)
      .rotate()
      .resize({ width: 1200, height: 630, fit: `contain`, background: `white` })
      .flatten({ background: `white` })
      .jpeg({ quality: 85 })
      .toBuffer(),
  )
  return new Response(image, { headers: { 'Content-Type': `image/jpeg` } })
}
