import src from 'src'

const netlify = [
  {
    resolve: `gatsby-plugin-netlify-cms`,
    options: {
      modulePath: src(`build/cms/index.js`),
      manualInit: true,
    },
  },
  `gatsby-plugin-netlify`,
]

export default netlify
