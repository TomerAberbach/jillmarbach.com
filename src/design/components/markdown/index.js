import { createElement, Fragment } from 'react'
import RehypeReact from 'rehype-react'
import minify from 'rehype-minify-whitespace'
import components from './components'

const renderAst = new RehypeReact({
  createElement,
  Fragment,
  components,
}).Compiler

const Markdown = ({ ast }) => renderAst(minify()(ast))

export default Markdown
