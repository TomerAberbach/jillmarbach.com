import { css } from 'styled-components'
import topRightBottomLeft from './top-right-bottom-left'
import computeAxes from './axes'

const box = ({
  direction,
  maxMainSize = `100%`,
  maxCrossSize = `100%`,
  mainSize,
  crossSize,
  padding,
  background,
  color,
  border = {},
  outline,
  shadow
}) => {
  const axes = computeAxes(direction ?? `row`)

  return css`
    ${background != null &&
      css`
        background: ${background};
      `}
    ${color != null &&
      css`
        color: ${color};
      `}

    ${mainSize != null &&
      css`
        ${axes.main.dimension}: ${mainSize};
      `}

    ${crossSize != null &&
      css`
        ${axes.cross.dimension}: ${crossSize};
      `}

    max-${axes.main.dimension}: ${maxMainSize};
    max-${axes.cross.dimension}: ${maxCrossSize};

    ${padding != null &&
      css`
        padding: ${topRightBottomLeft(padding)};
      `}
    ${border.width != null &&
      css`
        border-width: ${topRightBottomLeft(border.width)};
      `}
    ${border.style != null &&
      css`
        border-style: ${topRightBottomLeft(border.style)};
      `}
    ${border.color != null &&
      css`
        border-color: ${topRightBottomLeft(border.color)};
      `}
    ${outline != null &&
      css`
        outline: ${outline};
      `}
    ${shadow != null &&
      css`
        box-shadow: ${shadow};
      `}
  `
}

export default box
