import { css } from 'styled-components'

const defaultFont = {
  size: 16,
  unit: `px`,
}

const fluid = ({ viewport, property, value }) => {
  const from = `${value.from}${value.unit}`
  let between
  let to

  if ([`em`, `rem`].includes(value.unit)) {
    const absoluteFrom = value.from * defaultFont.size
    const absoluteTo = value.to * defaultFont.size

    // value = slope * viewport + base
    const slope = (absoluteTo - absoluteFrom) / (viewport.to - viewport.from)
    const base = absoluteTo - slope * viewport.to

    between = `calc(${from} + ${100 * slope}vw + ${base - absoluteFrom}${
      defaultFont.unit
    })`
    to = `calc(${from} + ${absoluteTo - absoluteFrom}${defaultFont.unit})`
  } else {
    // value = slope * viewport + base
    const slope = (value.to - value.from) / (viewport.to - viewport.from)
    const base = value.to - slope * viewport.to

    between = `calc(${100 * slope}vw + ${base}${value.unit})`
    to = `${value.to}${value.unit}`
  }

  return css`
    ${property}: ${from};
    
    @media (min-width: ${viewport.from}${viewport.unit}) {
      ${property}: ${between};
    }
    
    @media (min-width: ${viewport.to}${viewport.unit}) {
      ${property}: ${to};
    }
  `
}

export default fluid
