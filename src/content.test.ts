import { existsSync } from 'node:fs'
import { glob, readFile } from 'node:fs/promises'
import type { Link } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { expect, test } from 'vitest'
import { isRelativePath } from './services/is-relative-path.ts'

const paths = await Array.fromAsync(glob(`src/content/**/*.md`))

const isMissingFile = (url: string): boolean =>
  url.startsWith(`/files/`) &&
  !existsSync(
    `public${decodeURIComponent(new URL(url, `https://example.com`).pathname)}`,
  )

// Astro leaves relative links as is, so they don't resolve to files.
const isBroken = (url: string): boolean =>
  (isRelativePath(url) && !url.startsWith(`#`)) || isMissingFile(url)

test(`there is content`, () => {
  expect(paths).not.toHaveLength(0)
})

test.each(paths)(`%s has no broken file links`, async path => {
  const urls: string[] = []
  visit(fromMarkdown(await readFile(path, `utf8`)), `link`, (node: Link) => {
    urls.push(node.url)
  })

  expect(urls.filter(isBroken)).toStrictEqual([])
})
