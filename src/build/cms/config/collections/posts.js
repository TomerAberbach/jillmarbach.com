const posts = {
  name: `posts`,
  label: `Posts`,
  label_singular: `Post`,
  folder: `src/content/posts`,
  slug: `{{year}}-{{month}}-{{day}}-{{slug}}`,
  create: true,
  editor: {
    preview: false,
  },
  identifier_field: `title`,
  fields: [
    { name: `title`, label: `Title`, widget: `string` },
    { name: `date`, label: `Publish Date`, widget: `datetime` },
    {
      name: `tags`,
      label: `Tags`,
      widget: `list`,
      default: [],
      hint: `A comma separated list of tags.`,
    },
    {
      name: `body`,
      label: `Content`,
      widget: `markdown`,
      hint: `For an image post, embed a single image.`,
    },
  ],
}

export default posts
