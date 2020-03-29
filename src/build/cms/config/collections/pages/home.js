const home = {
  name: `home`,
  label: `Home`,
  file: `src/content/pages/home.md`,
  fields: [
    { name: `body`, label: `Introductory Blurb`, widget: `markdown` },
    {
      name: `featuredPosts`,
      label: `Featured Posts`,
      widget: `relation`,
      multiple: true,
      collection: `posts`,
      searchFields: [`title`],
      valueField: `title`,
      hint: `Note: changing a featured post title requires updating the featured posts list.`,
    },
  ],
}

export default home
