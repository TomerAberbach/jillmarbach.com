const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Image {
      src: String!
      alt: String!
      title: String!
    }
  `)
}

export default createSchemaCustomization
