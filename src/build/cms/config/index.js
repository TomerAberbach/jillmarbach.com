import backend from './backend'
import assets from './assets'
import collections from './collections'

const config = {
  backend,
  ...assets,
  collections
}

export default config
