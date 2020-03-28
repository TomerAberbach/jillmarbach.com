import React from 'react'
import styled from 'styled-components'
import { measure, size } from 'design/components/layout/themed/theme'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  box-sizing: content-box;
  width: ${measure};
  max-width: calc(100% - 2 * (${size(0)}));

  padding: ${size(5)} ${size(0)};

  margin-left: auto;
  margin-right: auto;
`

const Main = ({ children }) => <StyledMain>{children}</StyledMain>

export default Main
