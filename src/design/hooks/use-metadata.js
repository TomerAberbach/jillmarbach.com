import { graphql, useStaticQuery } from 'gatsby'

const useMetadata = () => {
  const { file, site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url: siteUrl
          title
          description
        }
      }
      file(name: { eq: "metadata" }) {
        childPagesJson {
          name
          email
          socialMedia {
            name
            url
            iconPath
          }
          resume
        }
      }
    }
  `)

  return { ...file.childPagesJson, ...site.siteMetadata }
}

export default useMetadata
