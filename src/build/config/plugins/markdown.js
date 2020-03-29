const markdown = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-external-links`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-responsive-iframe`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            withWebp: true
          }
        }
      ]
    }
  },
  `gatsby-transformer-remark-plaintext`,
  {
    resolve: `gatsby-plugin-excerpts`,
    options: {
      sources: {
        default: {
          type: `htmlQuery`,
          sourceField: `html`,
          excerptSelector: `*`,
          stripSelector: `img`,
          elementReplacements: [],
          truncate: {
            length: 150,
            ellipsis: `…`
          }
        }
      },
      sourceSets: {
        markdownHtml: [`default`]
      },
      excerpts: {
        noImageExcerpt: {
          type: `text`,
          nodeTypeSourceSet: {
            MarkdownRemark: `markdownHtml`
          }
        }
      }
    }
  }
]

export default markdown
