import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

/**
 * Moves headings down one level, below the page title, highlights them, opens
 * external links in a new tab, and makes local images responsive.
 */
const rehypeMarkdown = (): ((tree: Root) => void) => tree => {
  visit(tree, `element`, node => {
    const level = /^h(?<level>[1-6])$/u.exec(node.tagName)?.groups?.level
    if (level) {
      node.tagName = `h${Math.min(Number(level) + 1, 6)}`
      node.children = [
        {
          type: `element`,
          tagName: `span`,
          properties: { className: [`stripe`] },
          children: node.children,
        },
      ]
    }

    if (
      node.tagName === `a` &&
      /^https?:/u.test(String(node.properties.href))
    ) {
      node.properties.target = `_blank`
      node.properties.rel = [`noopener`, `noreferrer`]
    }

    // Resizing cannot shrink an SVG, and is slow for an animated GIF.
    if (
      node.tagName === `img` &&
      /^(?!\/|[a-z]+:).*\.(?:jpe?g|png|webp)$/iu.test(
        String(node.properties.src),
      )
    ) {
      Object.assign(node.properties, {
        widths: [600, 1000, 1600],
        sizes: `70vmin`,
      })
    }
  })
}

export default rehypeMarkdown
