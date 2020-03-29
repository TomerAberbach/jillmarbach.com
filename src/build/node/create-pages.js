import src from 'src'

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "posts" } } }
      ) {
        edges {
          previous {
            fields {
              slug
            }
          }
          node {
            fields {
              slug
              path
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors != null) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ previous, node: current, next }) =>
    createPage({
      path: current.fields.path,
      component: src(`design/templates/post.js`),
      context: {
        previous: previous?.fields?.slug,
        current: current.fields.slug,
        next: next?.fields?.slug,
      },
    })
  )
}

export default createPages
