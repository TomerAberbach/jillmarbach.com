import { css } from 'styled-components'

const flex = ({ direction, justify, align, textAlign }) => css`
  display: flex;
  ${
    direction != null &&
    css`
      flex-direction: ${direction};
    `
  }
  ${
    justify != null &&
    css`
      justify-content: ${justify};
    `
  }
  ${
    align != null &&
    css`
      align-items: ${align};
    `
  }
  ${
    textAlign != null &&
    css`
      text-align: ${textAlign};
    `
  }
`

export default flex
