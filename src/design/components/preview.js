import React from 'react'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Fit from './common/responsive/fit'
import { Heading3 } from './common/headings'
import Paragraph from './common/paragraph'
import { color, size } from './layout/themed/theme'
import Text from './common/text'
import Tag from './tag'

const Borders = styled.article`
  height: 100%;

  & > div {
    position: relative;
    padding: ${size(2)};

    &::after,
    &::before {
      position: absolute;
      display: block;
      content: '';
      width: ${size(7)};
      height: ${size(7)};
      z-index: 1;

      transition-property: top, right, bottom, left, border-color;
      transition-duration: 400ms;
      transition-timing-function: ease-in-out;
    }

    &::after {
      top: 0;
      left: 0;
      border-top: ${size(-4)} solid ${color(`light`)};
      border-left: ${size(-4)} solid ${color(`light`)};
    }

    &::before {
      bottom: 0;
      right: 0;
      border-bottom: ${size(-4)} solid ${color(`light`)};
      border-right: ${size(-4)} solid ${color(`light`)};
    }

    & > * {
      position: relative;
      z-index: 2;
    }
  }
`

const Frame = styled.div`
  position: relative;
  padding-bottom: ${({ left, right }) =>
    css`calc((${right}) / (${left}) * 100%)`};

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Link = styled(GatsbyLink)`
  text-decoration: none;

  &:hover ${Borders} > div {
    &::after,
    &::before {
      border-color: ${color(`dark`)};
    }

    &::after {
      top: ${size(-4)};
      left: ${size(-4)};
    }

    &::before {
      bottom: ${size(-4)};
      right: ${size(-4)};
    }
  }
`

const Preview = ({
  post: { path, title, valueDate, textDate, tags, excerpt, image },
}) => {
  return (
    <Link to={path}>
      <Borders>
        <div css={{ height: `100%` }}>
          <Fit
            direction='column'
            mainSize='100%'
            textAlign='left'
            justify='center'
            gap={size(-2)}
            padding={size(-2)}
            border={{
              width: `1px`,
              style: `solid`,
              color: `black`,
            }}
          >
            <Fit direction='column' gap={size(-3)}>
              <Heading3 size={2} crop>
                {title}
              </Heading3>
              <Fit direction='column' gap={size(-7)}>
                <Text as='time' size={-2} crop dateTime={valueDate}>
                  {textDate}
                </Text>
                <span css={{ lineHeight: 1 }}>
                  {tags.map((tag, i) => (
                    <Tag key={i} size={-2}>
                      #{tag}
                    </Tag>
                  ))}
                </span>
              </Fit>
            </Fit>
            {image != null && (
              <Frame left={16} right={9}>
                {image}
              </Frame>
            )}
            <Paragraph size={-1}>{excerpt}</Paragraph>
          </Fit>
        </div>
      </Borders>
    </Link>
  )
}

export default Preview
