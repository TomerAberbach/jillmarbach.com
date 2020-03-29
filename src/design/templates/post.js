import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from 'design/components/layout'
import Markdown from 'design/components/markdown'
import { Heading1 } from 'design/components/common/headings'
import Text from 'design/components/common/text'
import { measure } from 'design/components/layout/themed/theme'
import Fit from 'design/components/common/responsive/fit'
import { size } from 'design/components/layout/themed/theme'
import Tag from 'design/components/tag'
import SEO from 'design/components/seo'
import useMetadata from 'design/hooks/use-metadata'

const Section = styled.section`
  & > * + * {
    margin-top: ${size(-1)};
    margin-bottom: 0;
  }

  & > * + h1,
  & > * + h2,
  & > * + h3,
  & > * + h4,
  & > * + h5,
  & > * + h6 {
    margin-top: ${size(1)};
  }

  & > * + hr,
  & > hr + * {
    margin-top: ${size(3)};
  }

  & > h1 + *,
  & > h2 + *,
  & > h3 + *,
  & > h4 + *,
  & > h5 + *,
  & > h6 + * {
    margin-top: ${size(-9)};
  }
`

const PostTemplate = ({ data: { previous, current, next } }) => {
  const { name } = useMetadata()

  return (
    <Layout>
      <SEO
        path={current.fields.path}
        title={current.frontmatter.title}
        description={current.excerpt}
        thumbnail={
          current.featuredImage == null
            ? undefined
            : {
                path: current.featuredImage.srcFile.childImageSharp.fixed.src,
                alt: current.featuredImage.alt ?? ''
              }
        }
        og={{
          type: `article`,
          metadata: [
            <meta
              key='article:published_time'
              property='article:published_time'
              content={current.frontmatter.valueDate}
            />,
            <meta
              key='article:author'
              property='article:author'
              content={name}
            />,
            ...current.frontmatter.tags.map(tag => (
              <meta key={tag} property='article:tag' content={tag} />
            ))
          ]
        }}
      />
      <Fit direction='column' gap={size(3)}>
        <Fit
          as='article'
          direction='column'
          maxCrossSize={measure}
          gap={size(0)}
        >
          <Fit as='header' direction='column' gap={size(-3)}>
            <Heading1>{current.frontmatter.title}</Heading1>
            <Text
              as='time'
              size={0}
              crop
              dateTime={current.frontmatter.valueDate}
            >
              {current.frontmatter.textDate}
            </Text>
            <span css={{ lineHeight: 1 }}>
              {current.frontmatter.tags.map((tag, i) => (
                <Tag key={i} size={0} linked={true}>
                  #{tag}
                </Tag>
              ))}
            </span>
          </Fit>
          <Section>
            <Markdown ast={current.htmlAst} />
          </Section>
        </Fit>
        <nav>
          <Fit as='ul' direction='row' justify='space-between'>
            <li>
              {previous != null && (
                <Link to={previous.fields.path} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next != null && (
                <Link to={next.fields.path} rel='next'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </Fit>
        </nav>
      </Fit>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($previous: String, $current: String!, $next: String) {
    previous: markdownRemark(fields: { slug: { eq: $previous } }) {
      frontmatter {
        title
      }
      fields {
        path
      }
    }
    current: markdownRemark(fields: { slug: { eq: $current } }) {
      htmlAst
      excerpt: noImageExcerpt
      frontmatter {
        title
        valueDate: date(formatString: "YYYY-MM-DD")
        textDate: date(formatString: "MMMM DD, YYYY")
        tags
      }
      fields {
        path
      }
      featuredImage {
        alt
        title
        srcFile {
          childImageSharp {
            fixed(width: 600) {
              src
            }
          }
        }
      }
    }
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      frontmatter {
        title
      }
      fields {
        path
      }
    }
  }
`
