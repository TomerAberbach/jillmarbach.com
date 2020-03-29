import React from 'react'
import { Helmet } from 'react-helmet'
import useMetadata from 'design/hooks/use-metadata'

const SEO = ({
  path,
  title,
  description,
  thumbnail,
  og = { type: `website` },
}) => {
  const metadata = useMetadata()

  title = `${title} | ${metadata.title}`
  description = description ?? metadata.description

  return (
    <Helmet htmlAttributes={{ lang: `en` }}>
      <title>{title}</title>
      <meta name='author' content={metadata.name} />
      <meta name='description' content={description} />

      <meta property='og:site_name' content={metadata.title} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={`${metadata.url}${path}`} />
      <meta
        property='og:image'
        content={`${metadata.url}${
          thumbnail?.path ?? `/icons/icon-512x512.png`
        }`}
      />
      <meta
        property='og:image:alt'
        content={thumbnail?.alt ?? metadata.title}
      />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={og.type} />
      {og.metadata}

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {thumbnail != null && (
        <meta
          name='twitter:image'
          content={`${metadata.url}${thumbnail.path}`}
        />
      )}
      {thumbnail != null && (
        <meta name='twitter:image:alt' content={thumbnail.alt} />
      )}
    </Helmet>
  )
}

export default SEO
