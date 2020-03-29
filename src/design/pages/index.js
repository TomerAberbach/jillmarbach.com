import React from 'react'
import styled from 'styled-components'
import { Link as InternalLink } from 'gatsby'
import Layout from 'design/components/layout'
import Markdown from 'design/components/markdown'
import useHome from 'design/hooks/use-home'
import { color, size } from 'design/components/layout/themed/theme'
import { Heading2 } from 'design/components/common/headings'
import Fit from 'design/components/common/responsive/fit'
import Paragraph from 'design/components/common/paragraph'
import Wrap from 'design/components/common/responsive/wrap'
import Preview from 'design/components/preview'
import SEO from 'design/components/seo'

const SeeMore = styled(InternalLink)`
  display: inline-block;
  text-decoration: none;
  align-self: center;
  text-align: center;
  background-color: ${color(`light`)};
  padding: ${size(-3)};

  &:hover {
    background-color: ${color(`medium`)};
  }
`

const Home = () => {
  const { introduction, featuredPosts } = useHome()

  return (
    <Layout>
      <SEO title='Home' path='' />
      <Fit direction='column' gap={size(6)}>
        <article>
          <Markdown ast={introduction} />
        </article>
        <Fit direction='column' textAlign='center' gap={size(6)}>
          <Heading2>Featured</Heading2>
          {featuredPosts.length > 0 ? (
            <>
              <Wrap
                direction='row'
                justify='center'
                itemBasis='27ch'
                gap={size(7)}
              >
                {featuredPosts.map((post) => (
                  <Preview key={post.path} post={post} />
                ))}
              </Wrap>
              <SeeMore to='/posts'>See more</SeeMore>
            </>
          ) : (
            <Paragraph>No posts yet. Come back soon!</Paragraph>
          )}
        </Fit>
      </Fit>
    </Layout>
  )
}

export default Home
