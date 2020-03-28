import React from 'react'
import styled from 'styled-components'
import { size } from 'design/components/layout/themed/theme'
import ExternalLink from 'design/components/external-link'

const Image = styled.img`
  width: ${size(2)};
  transition: 400ms ease-in-out transform;

  &:hover {
    transform: scale(1.15);
  }
`

const Icon = ({ iconPath, name, url }) => (
  <ExternalLink href={url} css='line-height: 0;'>
    <Image src={iconPath} alt={name} />
  </ExternalLink>
)

export default Icon
