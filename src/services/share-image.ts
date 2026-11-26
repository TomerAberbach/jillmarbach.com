import sharp from 'sharp'

export const SHARE_IMAGE_TYPE = `image/jpeg`

/**
 * Renders the image file's first frame as a JPEG that social networks can
 * display.
 */
export const renderShareImage = async (
  path: string,
): Promise<Uint8Array<ArrayBuffer>> =>
  new Uint8Array(
    await sharp(path)
      .rotate()
      .resize({ width: 1200, height: 630, fit: `contain`, background: `white` })
      .flatten({ background: `white` })
      .jpeg({ quality: 85 })
      .toBuffer(),
  )
