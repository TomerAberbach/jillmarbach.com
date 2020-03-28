const fonts = [
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Catamaran`,
          variants: Array.from(
            { length: 9 },
            (_, i) => `${(i + 1) * 100}`
          ).flatMap(variant => [variant, `${variant}i`])
        }
      ]
    }
  }
]

export default fonts
