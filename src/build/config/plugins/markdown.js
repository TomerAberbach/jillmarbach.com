const markdown = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-squeeze-paragraphs`,
        `gatsby-remark-external-links`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-responsive-iframe`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            withWebp: true,
          },
        },
      ],
    },
  },
  `gatsby-transformer-remark-plaintext`,
]

export default markdown
