import { unified } from '@astrojs/markdown-remark'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeMarkdown from './src/services/rehype-markdown.ts'

export default defineConfig({
  site: `https://jillmarbach.com`,
  trailingSlash: `never`,
  server: { port: 3000 },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    processor: unified({ rehypePlugins: [rehypeMarkdown] }),
    syntaxHighlight: false,
  },
})
