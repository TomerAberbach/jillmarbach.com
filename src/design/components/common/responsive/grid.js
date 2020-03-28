import React from 'react'
import styled, { css } from 'styled-components'
import box from './helpers/box'

const StyledGrid = styled.div(
  ({ gap, size }) => css`
    display: grid;

    grid-template-columns: ${size == null
      ? `100%`
      : css`repeat(auto-fill, minmax(${size}, 1fr))`};

    ${gap != null &&
      css`
        grid-gap: ${gap};
      `}

    ${box}
  `
)

const Grid = ({
  size,
  gap,
  background,
  color,
  padding,
  border,
  outline,
  shadow,
  as,
  children
}) => (
  <StyledGrid
    size={size}
    gap={gap}
    background={background}
    color={color}
    padding={padding}
    border={border}
    outline={outline}
    shadow={shadow}
    as={as}
  >
    {children}
  </StyledGrid>
)

export default Grid
