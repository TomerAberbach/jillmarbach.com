import src from 'src'

const pages = ({ path }) => [
  {
    resolve: `gatsby-plugin-page-creator`,
    options: { path: src(path) },
  },
]

export default pages
