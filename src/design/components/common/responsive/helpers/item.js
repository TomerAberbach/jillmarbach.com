import { css } from 'styled-components'
import computeAxes from './axes'
import split from './split'

const item = ({
  direction,
  itemBasis = `auto`,
  maxItemSize,
  grow = false,
  shrink = false
}) => {
  const axes = computeAxes(direction ?? `column`)

  if (grow === true) {
    grow = 1
  }

  if (shrink === true) {
    shrink = 1
  }

  return css`
    flex-basis: ${itemBasis};
    ${typeof grow === `number` &&
      css`
        flex-grow: ${grow};
      `}
    ${typeof shrink === `number` &&
      css`
        flex-shrink: ${shrink};
      `}
    
    ${maxItemSize != null && css`max-${axes.main.dimension}: ${maxItemSize};`}
    
    ${split}
  `
}

export default item
