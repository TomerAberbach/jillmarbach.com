import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Text from 'design/components/common/text'

const tag = css`
  color: gray;

  * + & {
    &::before {
      content: ' ';
    }
  }
`

const TextLink = (props) => <Text {...props} as={Link} />

const StyledLinkTag = styled(TextLink)`
  ${tag}
`
const StyledTag = styled(Text)`
  ${tag}
`

const Tag = ({ linked = false, ...rest }) =>
  linked ? (
    <StyledLinkTag
      to={`/posts?query=${encodeURIComponent(rest.children.join(``))}`}
      css='text-decoration: none;'
      {...rest}
    />
  ) : (
    <StyledTag css='text-decoration: none;' {...rest} />
  )

export default Tag
