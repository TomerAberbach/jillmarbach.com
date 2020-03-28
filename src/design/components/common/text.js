import styled, { css } from 'styled-components'

const Text = styled.span(({ size, crop = false, theme }) => {
  let additional

  if (crop) {
    const lineHeight = 1.667 * 1.3 ** -size
    const topCrop = 7
    const bottomCrop = 11
    const cropFontSize = 36
    const cropLineHeight = 1.2

    const dynamicTopCrop =
      Math.max(
        topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
        0
      ) / cropFontSize
    const dynamicBottomCrop =
      Math.max(
        bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
        0
      ) / cropFontSize

    additional = css`
      &::before,
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
      }

      &::before {
        margin-bottom: calc((${dynamicTopCrop}) * -1em);
      }

      &::after {
        margin-top: calc((${dynamicBottomCrop}) * -1em);
      }
    `
  }

  return css`
    font-size: ${theme.size(size)};
    line-height: ${theme.lineHeight(-size)};
    ${additional}
  `
})

export default Text
