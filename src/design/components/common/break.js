import styled from 'styled-components'
import { color, size } from 'design/components/layout/themed/theme'

const Break = styled.hr`
  border-top: ${size(-10)} solid ${color(`dark`)};
  margin-left: ${size(-4)};
  margin-right: ${size(-4)};
  border-radius: 100vw;
`

export default Break
