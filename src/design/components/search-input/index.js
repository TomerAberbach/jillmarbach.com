import React from 'react'
import styled from 'styled-components'
import {
  color,
  lineHeight,
  measure,
  size
} from 'design/components/layout/themed/theme'
import magnifyingGlass from './magnifying-glass.svg'

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${measure};
  max-width: 100%;

  padding: ${size(-9)} ${size(-3)};
  background: white;
  border: 1.5px solid black;
  border-radius: 100vw;

  &:focus-within {
    border-color: ${color(`dark`)};

    & > img {
    }
  }

  & > input {
    flex-grow: 1;
    background: none;
    line-height: 1;

    &:focus {
      outline: none;
    }
  }
`

const Image = styled.img`
  height: calc((${lineHeight(0)}) - ${size(-4)});
  width: auto;

  margin-right: ${size(-3)};
`

const SearchInput = ({ ...props }) => (
  <SearchBox>
    <Image src={magnifyingGlass} alt='' />
    <input type='search' {...props} />
  </SearchBox>
)

export default SearchInput
