import { existsSync } from 'node:fs'
import { glob, readFile } from 'node:fs/promises'
import type { Link } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { expect, test } from 'vitest'

const paths = await Array.fromAsync(glob(`src/content/**/*.md`))

// Astro leaves relative links as is, so they don't resolve to files.
const isRelative = (url: string): boolean =>
  !URL.canParse(url) && !/^[/#]/u.test(url)

const isMissingFile = (url: string): boolean =>
  url.startsWith(`/files/`) &&
  !existsSync(
    `public${decodeURIComponent(new URL(url, `https://example.com`).pathname)}`,
  )

const isBroken = (url: string): boolean => isRelative(url) || isMissingFile(url)

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
