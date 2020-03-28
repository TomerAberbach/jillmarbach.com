import Paragraph from 'design/components/common/paragraph'
import {
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from 'design/components/common/headings'
import UnorderedList from 'design/components/common/unordered-list'
import OrderedList from 'design/components/common/ordered-list'
import Emphasized from 'design/components/common/emphasized'
import Strong from 'design/components/common/strong'
import Break from 'design/components/common/break'
import Code from 'design/components/common/code'
import BlockQuote from 'design/components/common/block-quote'
import Table from 'design/components/common/table'

const components = {
  p: Paragraph,
  h6: Heading6,
  h5: Heading6,
  h4: Heading5,
  h3: Heading4,
  h2: Heading3,
  h1: Heading2,
  ul: UnorderedList,
  ol: OrderedList,
  em: Emphasized,
  strong: Strong,
  hr: Break,
  code: Code,
  blockquote: BlockQuote,
  table: Table
}

export default components
