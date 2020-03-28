import React from 'react'
import styled, { css } from 'styled-components'
import computeAxes from './helpers/axes'
import flex from './helpers/flex'
import box from './helpers/box'
import item from './helpers/item'

const StyledFit = styled.div(({ direction, gap }) => {
  const axes = computeAxes(direction ?? `row`)

  return css`
    ${flex}
    ${box}

    & > * {
      ${item}

      margin-${axes.main.start}: 0;
      margin-${axes.main.end}: 0;

      & + * {
        margin-${axes.main.start}: ${gap};
      }
      
      &[hidden] + * {
        margin-${axes.main.start}: 0;
      }
    }
  `
})

const Fit = ({
  direction,
  justify,
  align,
  textAlign,
  maxMainSize,
  maxCrossSize,
  mainSize,
  crossSize,
  itemBasis,
  maxItemSize,
  grow,
  shrink = true,
  gap,
  splitAfter,
  splitBefore,
  background,
  color,
  padding,
  border,
  outline,
  shadow,
  as,
  children,
  ...rest
}) => (
  <StyledFit
    direction={direction}
    justify={justify}
    align={align}
    textAlign={textAlign}
    maxMainSize={maxMainSize}
    maxCrossSize={maxCrossSize}
    mainSize={mainSize}
    crossSize={crossSize}
    itemBasis={itemBasis}
    maxItemSize={maxItemSize}
    grow={grow}
    shrink={shrink}
    gap={gap}
    splitAfter={splitAfter}
    splitBefore={splitBefore}
    background={background}
    color={color}
    padding={padding}
    border={border}
    outline={outline}
    shadow={shadow}
    as={as}
    {...rest}
  >
    {children}
  </StyledFit>
)

export default Fit
