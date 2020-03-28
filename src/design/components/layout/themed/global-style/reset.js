import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    background-color: inherit;
    color: inherit;
    font: inherit;
    overflow-wrap: break-word;
    padding: 0;
    margin: 0;
    border-style: solid;
    border-width: 0;
    border-color: currentColor;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }

  html {
    height: 100%;
    overflow-x: hidden;
  }
  
  body {
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  #___gatsby, #gatsby-focus-wrapper {
    flex: 1;
  }
  
  ul {
    list-style: none;
  }
`

export default Reset
