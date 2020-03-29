import React, { createElement } from 'react'
import styled, { css } from 'styled-components'
import ensureUnit from './helpers/ensure-unit'
import box from './helpers/box'
import flex from './helpers/flex'
import item from './helpers/item'

const StyledWrap = styled.div(({ gap, hideOverflow = false }) => {
  gap = ensureUnit(gap)

  return css`
    ${hideOverflow &&
    css`
      overflow: hidden;
    `}
    ${box}

    & > * {
      flex-wrap: wrap;

      width: calc(100% + (${gap}));
      height: calc(100% + (${gap}));
      margin: calc((${gap}) / -2);

      ${flex}

      & > * {
        margin: calc((${gap}) / 2);

        &[hidden] {
          margin: 0;
        }

        ${item}
      }
    }
  `
})

const Wrap = ({
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
  shrink,
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
  innerAs = `div`,
  children,
}) => (
  <StyledWrap
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
  >
    {createElement(innerAs, {}, ...children)}
  </StyledWrap>
)

export default Wrap
