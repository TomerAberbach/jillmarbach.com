import pages from '../sources/pages'
import files from '../sources/files'
import markdown from './markdown'
import json from './json'
import fonts from './fonts'
import images from './images'
import react from './react'
import manifest from './manifest'
import feed from './feed'
import analytics from './analytics'
import netlify from './netlify'

const plugins = [
  `gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-catch-links`,
  ...pages({ path: `design/pages` }),
  ...files({ name: `metadata`, path: `content/pages/metadata.json` }),
  ...files({ name: `home`, path: `content/pages/home.md` }),
  ...files({ name: `posts`, path: `content/posts` }),
  ...files({ name: `static`, path: `../static` }),
  ...markdown,
  ...json,
  ...fonts,
  ...images,
  ...react,
  ...manifest,
  ...feed,
  ...analytics,
  ...netlify,
]

export default plugins
