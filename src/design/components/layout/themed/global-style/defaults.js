import { createGlobalStyle } from 'styled-components'
import {
  color,
  fontFamily,
  lineHeight,
  size,
} from 'design/components/layout/themed/theme'

const Defaults = createGlobalStyle`
  body {
    background-color: ${color(`background`)};
    color: ${color(`text`)};
    
    font-family: ${fontFamily};
    font-size: ${size(0)};
    line-height: ${lineHeight(0)};
  }
  
  img {
    max-width: 100%;
  }
  
  ::-moz-selection {
    color: black;
    background: ${color(`light`)};
  }
  
  ::selection {
    color: black;
    background: ${color(`light`)};
  }
`

export default Defaults
