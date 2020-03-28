import styled from 'styled-components'
import { color, size } from 'design/components/layout/themed/theme'

const borderRadius = size(-6)

const Table = styled.table`
  width: 100%;
  border-radius: ${borderRadius};
  border-spacing: 0;

  & > thead {
    background-color: ${color(`light`)};
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};

    & th {
      text-align: left;
      font-weight: 600;
      padding: ${size(-3)} ${size(-2)};
    }

    & > tr:first-child {
      border-top-left-radius: ${borderRadius};
      border-top-right-radius: ${borderRadius};

      & > th {
        &:first-child {
          border-top-left-radius: ${borderRadius};
        }

        &:last-child {
          border-top-right-radius: ${borderRadius};
        }
      }
    }
  }

  & > tbody {
    background-color: hsl(187, 15%, 93%);
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};

    & td {
      padding: ${size(-3)} ${size(-2)};
      border-top: ${size(-12)} solid ${color(`medium`)};
    }

    & > tr:last-child {
      border-bottom-left-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};

      & > td {
        &:first-child {
          border-bottom-left-radius: ${borderRadius};
        }

        &:last-child {
          border-bottom-right-radius: ${borderRadius};
        }
      }
    }
  }
`

export default Table
