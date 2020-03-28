require(`@babel/register`)({
  babelrc: false,
  presets: [`@tomera/node`],
  plugins: [
    `@babel/transform-modules-commonjs`,
    [`module-resolver`, { root: [`./src`] }],
    `@babel/proposal-class-properties`,
    `@babel/proposal-export-default-from`,
    `@babel/proposal-export-namespace-from`,
    `@babel/proposal-nullish-coalescing-operator`,
    `@babel/proposal-numeric-separator`,
    `@babel/proposal-optional-chaining`,
    `@babel/proposal-throw-expressions`
  ]
})
