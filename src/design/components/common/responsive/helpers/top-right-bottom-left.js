import { css } from 'styled-components'

const topRightBottomLeft = value => {
  if (value == null || typeof value !== `object`) {
    return value
  }

  let { x, y, top, right, bottom, left } = value

  top = top ?? y ?? `unset`
  right = right ?? x ?? `unset`
  bottom = bottom ?? y ?? `unset`
  left = left ?? x ?? `unset`

  return top === bottom && right === left
    ? top === right
      ? css`
          ${top}
        `
      : css`
          ${top} ${right}
        `
    : css`${top} ${right} ${bottom} ${left}`
}

export default topRightBottomLeft
