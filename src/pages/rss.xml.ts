import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { render } from 'astro:content'
import { toFeedHtml } from '../services/feed-html.ts'
import { getPostExcerpt, getPostPath, getPosts } from '../services/posts.ts'
import { getSettings } from '../services/settings.ts'

export const GET: APIRoute = async context => {
  const site = context.site!
  const { name, description } = await getSettings()
  const container = await AstroContainer.create()
  return rss({
    title: `${name}'s RSS Feed`,
    description,
    site,
    trailingSlash: false,
    items: await Promise.all(
      (await getPosts()).map(async post => {
        const { Content } = await render(post)
        return {
          title: post.data.title,
          pubDate: post.data.date,
          description: getPostExcerpt(post),
          content: toFeedHtml(await container.renderToString(Content), site),
          link: getPostPath(post),
          // Feed readers identify items by GUID, so it keeps the Gatsby site's
          // trailing slash.
          customData: `<guid isPermaLink="false">${new URL(`${getPostPath(post)}/`, site).href}</guid>`,
        }
      }),
    ),
  })
}
