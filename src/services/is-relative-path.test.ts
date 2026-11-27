import { expect, test } from 'vitest'
import { isRelativePath } from './is-relative-path.ts'

test.each([
  [`a.png`, true],
  [`./a.png`, true],
  [`../a.png`, true],
  [`/files/a.png`, false],
  [`//example.com/a.png`, false],
  [`https://example.com/a.png`, false],
  [`HTTPS://example.com/a.png`, false],
  [`mailto:a@example.com`, false],
])(`isRelativePath(%j) is %j`, (path, expected) => {
  expect(isRelativePath(path)).toBe(expected)
})
