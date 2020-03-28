import React from 'react'
import styled, { useTheme } from 'styled-components'
import { color, lineHeight, size } from 'design/components/layout/themed/theme'
import useMetadata from 'design/hooks/use-metadata'
import ExternalLink from 'design/components/external-link'
import Wrap from 'design/components/common/responsive/wrap'
import Fit from 'design/components/common/responsive/fit'
import Icon from './icon'
import rss from './rss.svg'

const StyledFooter = styled.footer`
  flex: none;

  background-color: ${color(`dark`)};
  color: ${color(`background`)};

  font-size: ${size(-1)};
  text-align: center;
  line-height: ${lineHeight(-2)};

  padding: ${size(0)};
`

const Footer = () => {
  const { email, socialMedia } = useMetadata()
  const theme = useTheme()

  return (
    <StyledFooter>
      <Fit direction='column' align='center' gap={theme.size(-1)}>
        <p>
          Contact at&nbsp;
          <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
        </p>

        <Wrap
          direction='row'
          justify='center'
          align='center'
          gap={theme.size(-1)}
        >
          <Icon name='RSS Feed' url='/rss.xml' iconPath={rss} />
          {socialMedia.map(socialMedium => (
            <Icon key={socialMedium.name} {...socialMedium} />
          ))}
        </Wrap>

        <p>© All rights reserved.</p>
      </Fit>
    </StyledFooter>
  )
}

export default Footer
