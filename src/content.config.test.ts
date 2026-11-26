import { readFile } from 'node:fs/promises'
import { z } from 'astro/zod'
import { expect, test } from 'vitest'
import { parse } from 'yaml'
import { collections } from './content.config.ts'

type Field = { name: string; required?: boolean; fields?: Field[] }
type Entry = { name: string; fields: Field[] }
type Config = { collections: (Partial<Entry> & { files?: Entry[] })[] }

const config = parse(
  await readFile(`public/admin/config.yml`, `utf8`),
) as Config
const entries = config.collections.flatMap(
  ({ name, fields, files }) =>
    files ?? (name && fields ? [{ name, fields }] : []),
)

type Schema =
  z.ZodObject | ((context: { image: () => z.ZodString }) => z.ZodObject)

const getShape = (schema: unknown): z.ZodRawShape => {
  const objectOrFunction = schema as Schema
  const object =
    typeof objectOrFunction === `function`
      ? objectOrFunction({ image: () => z.string() })
      : objectOrFunction
  return object.shape
}

/** Describes a schema's fields, marking each as required or optional. */
const describeShape = (shape: z.ZodRawShape): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(shape).map(([name, type]) => [
      name,
      {
        required: !z.safeParse(type, undefined).success,
        ...(type instanceof z.ZodArray &&
          type.element instanceof z.ZodObject && {
            fields: describeShape(type.element.shape),
          }),
      },
    ]),
  )

const describeFields = (fields: Field[]): Record<string, unknown> =>
  Object.fromEntries(
    fields
      .filter(({ name }) => name !== `body`)
      .map(({ name, required = true, fields: nested }) => [
        name,
        { required, ...(nested && { fields: describeFields(nested) }) },
      ]),
  )

test(`the CMS edits every collection`, () => {
  expect(new Set(entries.map(({ name }) => name))).toStrictEqual(
    new Set(Object.keys(collections)),
  )
})

test.each(entries)(
  `the CMS fields of $name match its schema`,
  ({ name, fields }) => {
    const { schema } = collections[name as keyof typeof collections]

    expect(describeFields(fields)).toStrictEqual(
      describeShape(getShape(schema)),
    )
  },
)
