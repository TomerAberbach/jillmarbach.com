import React from 'react'
import styled from 'styled-components'
import { color } from 'design/components/layout/themed/theme'
import Text from './text'

const Stripe = styled.span`
  background-color: transparent;
  background-image: linear-gradient(transparent 65%, ${color(`light`)} 0%);
  background-size: 1px 1em;
`

const createHeading = (i) => ({ children, ...rest }) => (
  <Text as={`h${i}`} size={7 - i} {...rest}>
    <Stripe>{children}</Stripe>
  </Text>
)

export const Heading6 = createHeading(6)
export const Heading5 = createHeading(5)
export const Heading4 = createHeading(4)
export const Heading3 = createHeading(3)
export const Heading2 = createHeading(2)
export const Heading1 = createHeading(1)
