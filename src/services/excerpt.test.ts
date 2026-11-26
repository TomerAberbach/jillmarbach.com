import { expect, test } from 'vitest'
import { getExcerpt } from './excerpt.ts'

test.each([
  [`![alt](./a.png "title")\n\nSome *text*.\n\nMore.`, `Some text. More.`],
  [`- one\n- two\n  - three`, `one two three`],
  [`one  \ntwo`, `one two`],
  [`in*ter*national`, `international`],
  [`<b>bold</b> text<!-- comment -->`, `bold text`],
  [`<div>block</div>\n\ntext`, `text`],
  [`~~struck~~ text`, `struck text`],
  [`| a | b |\n| - | - |\n| c | d |`, `a b c d`],
  [`![alt](./a.png)`, ``],
  [`W\u{FEFF}atch`, `Watch`],
])(`getExcerpt of %j`, (markdown, excerpt) => {
  expect(getExcerpt(markdown)).toBe(excerpt)
})

test(`getExcerpt truncates long text`, () => {
  expect(getExcerpt(`a`.repeat(300))).toBe(`${`a`.repeat(199)}…`)
})

test(`getExcerpt does not truncate inside an emoji`, () => {
  expect(getExcerpt(`${`a`.repeat(198)}👩‍🎨bcd`)).toBe(`${`a`.repeat(198)}👩‍🎨…`)
})
