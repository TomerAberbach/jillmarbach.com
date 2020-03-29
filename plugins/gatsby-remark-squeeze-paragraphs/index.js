const remarkSqueezeParagraphs = require(`remark-squeeze-paragraphs`)

module.exports = ({ markdownAST }) => {
  remarkSqueezeParagraphs(markdownAST)
  return markdownAST
}
