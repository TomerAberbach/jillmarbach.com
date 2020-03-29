import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const usePosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "posts" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              valueDate: date(formatString: "YYYY-MM-DD")
              textDate: date(formatString: "MMMM DD, YYYY")
              tags
            }
            fields {
              path
            }
            plainText
            excerpt(pruneLength: 200, format: PLAIN, truncate: true)
            featuredImage {
              alt
              title
              srcFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges.map(
    ({
      node: {
        frontmatter: { tags, ...frontmatter },
        fields,
        plainText,
        excerpt,
        featuredImage,
      },
    }) => ({
      ...frontmatter,
      ...fields,
      tags,
      body: plainText,
      excerpt:
        featuredImage == null || featuredImage.title == null
          ? excerpt
          : excerpt.substring(featuredImage.title.length).trim(),
      ...(featuredImage == null
        ? {}
        : {
            image:
              featuredImage.srcFile.childImageSharp == null ? (
                <img
                  src={featuredImage.srcFile.publicURL}
                  alt={featuredImage.alt ?? ``}
                  title={featuredImage.title ?? undefined}
                />
              ) : (
                <Img
                  fluid={featuredImage.srcFile.childImageSharp.fluid}
                  alt={featuredImage.alt ?? ``}
                  title={featuredImage.title ?? undefined}
                  style={{ position: `unset` }}
                />
              ),
          }),
    })
  )
}

export default usePosts
