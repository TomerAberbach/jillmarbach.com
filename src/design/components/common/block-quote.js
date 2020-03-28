import styled from 'styled-components'
import { color, size } from 'design/components/layout/themed/theme'

const BlockQuote = styled.blockquote`
  font-style: italic;
  border-left: ${size(-10)} solid ${color(`light`)};
  padding-left: ${size(-2)};
  margin-left: ${size(-3)};
`

export default BlockQuote
