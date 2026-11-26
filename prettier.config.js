import config from '@tomer/prettier-config'

export default {
  ...config,
  plugins: [...config.plugins, `prettier-plugin-astro`],
}
