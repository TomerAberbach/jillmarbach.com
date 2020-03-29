import { css } from 'styled-components'
import computeAxes from './axes'

const split = ({ direction, splitBefore = [], splitAfter = [] }) => {
  const axes = computeAxes(direction ?? `row`)
  splitBefore = [].concat(splitBefore)
  splitAfter = [].concat(splitAfter)

  return css`
    ${splitBefore.length > 0 &&
    css`
      ${splitBefore.map((i) => `&:nth-child(${i + 1})`).join(`, `)} {
        margin-${axes.main.start}: auto;
      }
    `}

    ${splitAfter.length > 0 &&
    css`
      ${splitAfter.map((i) => `&:nth-child(${i + 1})`).join(`, `)} {
        margin-${axes.main.end}: auto;
      }
    `}
  `
}

export default split
