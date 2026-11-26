import config from '@tomer/eslint-config'

export default [
  ...config,
  { ignores: [`src/content/**`] },
  {
    files: [`public/sw.js`],
    languageOptions: { globals: { caches: `readonly`, self: `readonly` } },
    rules: { 'unicorn/prefer-global-this': `off` },
  },
]
