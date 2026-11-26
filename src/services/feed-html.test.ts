import { expect, test } from 'vitest'
import { toFeedHtml } from './feed-html.ts'

const site = new URL(`https://example.com`)

test.each([
  [`<a href="/posts">x</a>`, `<a href="https://example.com/posts">x</a>`],
  [`<a href="https://a.com/">x</a>`, `<a href="https://a.com/">x</a>`],
  [`<a href="//a.com/">x</a>`, `<a href="//a.com/">x</a>`],
  [
    `<img alt="a > b" src="/a.webp" srcset="/b.webp 600w" sizes="70vmin">`,
    `<img alt="a > b" src="https://example.com/a.webp">`,
  ],
  [`<p> src="/a"</p>`, `<p> src="/a"</p>`],
])(`toFeedHtml of %j`, (html, expected) => {
  expect(toFeedHtml(html, site)).toBe(expected)
})
