const metadata = {
  name: `metadata`,
  label: `Metadata`,
  file: `src/content/pages/metadata.json`,
  fields: [
    { name: `name`, label: `Full Name`, widget: `string` },
    { name: `email`, label: `Email Address`, widget: `string` },
    {
      name: `description`,
      label: `Website Description (for search engines)`,
      widget: `string`
    },
    {
      name: `socialMedia`,
      label: `Social Media`,
      widget: `list`,
      fields: [
        { name: `name`, label: `Brand Name`, widget: `string` },
        { name: `url`, label: `Profile URL`, widget: `string` },
        {
          name: `iconPath`,
          label: `Brand Icon`,
          widget: `image`,
          allow_multiple: false,
          hint: `Find SVG icons for brands at https://simpleicons.org. You will have to make them white yourself.`
        }
      ]
    },
    { name: `resume`, label: `Resume`, widget: `file` }
  ]
}

export default metadata
