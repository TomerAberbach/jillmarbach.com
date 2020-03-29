const feed = [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          query: `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fields: { collection: { eq: "posts" } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                      tags
                    }
                    fields {
                      path
                    }
                    excerpt
                    html
                  }
                }
              }
            }
          `,
          serialize: ({ query: { site, allMarkdownRemark } }) =>
            allMarkdownRemark.edges.map(
              ({
                node: {
                  frontmatter: { title, date },
                  fields: { path },
                  excerpt,
                  html,
                },
              }) => ({
                title,
                date,
                description: excerpt,
                url: `${site.siteMetadata.siteUrl}${path}`,
                guid: `${site.siteMetadata.siteUrl}${path}`,
                custom_elements: [{ 'content:encoded': html }],
              })
            ),
          output: `/rss.xml`,
          title: `Jill Marbach's RSS Feed`,
        },
      ],
    },
  },
]

export default feed
