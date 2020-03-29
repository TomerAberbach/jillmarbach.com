import { join } from 'path'

const parseFeaturedImage = (ast) => {
  if (ast.type !== `root` || ast.children.length < 1) {
    return null
  }

  ast = ast.children[0]

  if (
    ast.type !== `element` ||
    ast.tagName !== `p` ||
    ast.children.length < 1
  ) {
    return null
  }

  ast = ast.children[0]

  return ast.type === `element` && ast.tagName === `img` ? ast.properties : null
}

const createResolvers = ({ createResolvers }) =>
  createResolvers({
    MarkdownRemark: {
      featuredImage: {
        type: `Image`,
        resolve: async (source, args, context, info) => {
          const resolveHtmlAst = info.schema
            .getType(`MarkdownRemark`)
            .getFields().htmlAst.resolve
          return parseFeaturedImage(await resolveHtmlAst(source))
        },
      },
    },
    Image: {
      srcFile: {
        type: `File!`,
        resolve: (source, args, context) =>
          context.nodeModel.runQuery({
            query: {
              filter: {
                sourceInstanceName: { eq: `static` },
                relativePath: { eq: join(`.`, source.src) },
              },
            },
            type: `File`,
            firstOnly: true,
          }),
      },
    },
  })

export default createResolvers
