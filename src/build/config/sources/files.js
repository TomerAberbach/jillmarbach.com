import src from 'src'

const files = ({ path, name }) => [
  {
    resolve: `gatsby-source-filesystem`,
    options: { name, path: src(path) },
  },
]

export default files
