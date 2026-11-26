import { expect, test } from 'vitest'
import { matches } from './search.ts'

test.each([
  [`Graphic Design`, `graphic`, true],
  [`Graphic Design`, `design graph`, true],
  [`Graphic Design`, `graphic logo`, false],
  [`Graphic Design`, `  `, true],
  [`The Monarchs’ Children`, `monarchs'`, true],
  [`Café`, `cafe`, true],
  [`#BB&L`, `BB&L`, true],
  [`a.b`, `.*`, false],
])(`matches(%j, %j) is %j`, (text, query, expected) => {
  expect(matches(text, query)).toBe(expected)
})
