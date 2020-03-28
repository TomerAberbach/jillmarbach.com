import React from 'react'
import Text from './text'

const Paragraph = ({ children, ...rest }) => (
  <Text as='p' size={0} {...rest}>
    {children}
  </Text>
)

export default Paragraph
