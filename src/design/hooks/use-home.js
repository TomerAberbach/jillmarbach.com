import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const useHome = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(name: { eq: "home" }) {
        childMarkdownRemark {
          frontmatter {
            featuredPosts {
              frontmatter {
                title
                valueDate: date(formatString: "YYYY-MM-DD")
                textDate: date(formatString: "MMMM DD, YYYY")
                tags
              }
              fields {
                path
              }
              excerpt: noImageExcerpt
              htmlAst
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
          htmlAst
        }
      }
    }
  `)

  const { frontmatter, htmlAst: introduction } = file.childMarkdownRemark
  const { resume, featuredPosts } = frontmatter

  return {
    introduction,
    resume,
    featuredPosts: featuredPosts.map(
      ({ frontmatter, fields, htmlAst: ast, excerpt, featuredImage }) => ({
        ...frontmatter,
        ...fields,
        ast,
        excerpt: excerpt.trim(),
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
    ),
  }
}

export default useHome
