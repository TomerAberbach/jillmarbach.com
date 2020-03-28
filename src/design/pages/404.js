import React from 'react'
import Layout from 'design/components/layout'
import Fit from 'design/components/common/responsive/fit'
import Paragraph from 'design/components/common/paragraph'
import { Heading1 } from 'design/components/common/headings'
import { size } from 'design/components/layout/themed/theme'
import SEO from 'design/components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404' path='/404' />
    <Fit
      direction='column'
      justify='center'
      align='center'
      textAlign='center'
      gap={size(0)}
      css='flex: 1 0 auto;'
    >
      <Heading1>404 Not Found</Heading1>
      <Paragraph size={1}>
        I guess you&apos;ll just have to read through all the posts to find what
        you were looking for...
      </Paragraph>
    </Fit>
  </Layout>
)

export default NotFoundPage
