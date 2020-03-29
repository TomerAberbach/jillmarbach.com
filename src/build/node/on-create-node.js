import { join } from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import unique from 'array-unique'

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName
    createNodeField({
      name: `collection`,
      node,
      value: collection,
    })

    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    const path = `/${join(collection, slug)}`
    createNodeField({
      name: `path`,
      node,
      value: path,
    })

    if (node.fields.tags != null) {
      createNodeField({
        name: `tags`,
        node,
        value: unique(node.fields.tags),
      })
    }
  }
}

export default onCreateNode
