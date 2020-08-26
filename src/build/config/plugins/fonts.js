const fonts = [
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Catamaran:${Array.from(
            { length: 9 },
            (_, i) => `${(i + 1) * 100}`
          ).flatMap((variant) => [variant, `${variant}i`]).join(`,`)
        }`,
      ],
      display: `swap`,
    },
  },
]

export default fonts
