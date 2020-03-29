import { readFileSync } from 'fs'
import src from 'src'

const metadata = {
  siteUrl: `https://jillmarbach.com`,
  title: `Jill Marbach`,
  description: JSON.parse(
    readFileSync(src(`content/pages/metadata.json`)).toString()
  ).description,
}

export default metadata
