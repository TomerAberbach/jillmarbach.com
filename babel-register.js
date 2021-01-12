require(`@babel/register`)({
  babelrc: false,
  presets: [
    [`@babel/env`, {
      targets: {
        node: `10`
      },
      useBuiltIns: `usage`,
      corejs: 3
    }]
  ],
  plugins: [
    `@babel/transform-modules-commonjs`,
    [`module-resolver`, { root: [`./src`] }],
    `@babel/proposal-class-properties`,
    `@babel/proposal-export-default-from`,
    `@babel/proposal-export-namespace-from`,
    `@babel/proposal-numeric-separator`,
    `@babel/proposal-throw-expressions`,
  ],
})
