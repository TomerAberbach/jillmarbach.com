import React from 'react'

// eslint-disable-next-line no-unused-vars
const ExternalLink = ({ href, target, rel, children, ...rest }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
    {children}
  </a>
)

export default ExternalLink
