import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { size } from 'design/components/layout/themed/theme'
import Fit from 'design/components/common/responsive/fit'
import ExternalLink from 'design/components/external-link'
import useMetadata from 'design/hooks/use-metadata'
import image from './image.svg'

const Header = styled.header`
  flex: none;
  position: relative;
  height: ${size(10)};
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  left: 50%;
  max-width: unset;
  transform: translateX(-50%);
  height: 100%;
`

const Navigation = styled.nav`
  background: none;
  position: absolute;
  top: calc((${size(10)}) * 9 / 13);
  left: 50%;
  transform: translateX(-50%);
  font-size: ${size(-1)};
  line-height: 1;

  @media (max-width: 600px) {
    top: calc((${size(10)}) * 7 / 11);
  }
`

const NavigationItem = styled.li`
  background-color: white;
  padding: ${size(-7)};
  border-radius: 100vw;

  @media (max-width: 400px) {
    padding: ${size(-9)};
  }
`

const Banner = () => {
  const { name, resume } = useMetadata()

  return (
    <Header>
      <Image src={image} alt={name} />
      <Navigation>
        <Fit as='ul' direction='row' gap={size(0)}>
          <NavigationItem>
            <Link to='/'>Home</Link>
          </NavigationItem>
          <NavigationItem>
            <ExternalLink href={resume}>Resume</ExternalLink>
          </NavigationItem>
          <NavigationItem>
            <Link to='/posts'>Posts</Link>
          </NavigationItem>
        </Fit>
      </Navigation>
    </Header>
  )
}

export default Banner
