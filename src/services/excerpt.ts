import type { Nodes } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'

const MAX_LENGTH = 200
const INLINE_TYPES = new Set<Nodes[`type`]>([
  `delete`,
  `emphasis`,
  `link`,
  `linkReference`,
  `strong`,
])

const getNodeText = (node: Nodes): string => {
  if (node.type === `html`) {
    return ``
  }
  if (node.type === `break`) {
    return ` `
  }
  if (`children` in node) {
    const text = node.children.map(getNodeText).join(``)
    return INLINE_TYPES.has(node.type) ? text : `${text} `
  }
  return `value` in node ? node.value : ``
}

const segmenter = new Intl.Segmenter(`en`)

/** Returns the Markdown's text, without images or HTML. */
export const getText = (markdown: string): string => {
  const tree = fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  })
  return (
    getNodeText(tree)
      // Rich text editors insert this invisible character, which \s matches.
      .replaceAll(`\u{FEFF}`, ``)
      .replaceAll(/\s+/gu, ` `)
      .trim()
  )
}

/** Returns the start of the Markdown's text, without images or HTML. */
export const getExcerpt = (markdown: string): string => {
  const text = getText(markdown)
  const characters = Array.from(
    segmenter.segment(text),
    ({ segment }) => segment,
  )
  return characters.length > MAX_LENGTH
    ? `${characters.slice(0, MAX_LENGTH - 1).join(``)}…`
    : text
}
