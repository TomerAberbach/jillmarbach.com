import metadata from 'build/config/metadata'

const manifest = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: metadata.title,
      short_name: metadata.title,
      start_url: `/`,
      background_color: `#FFFFFF`,
      theme_color: `#57A7B2`,
      display: `minimal-ui`,
      icon: `src/content/logo.svg`,
    },
  },
]

export default manifest
