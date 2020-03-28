import { join, normalize } from 'path'

const src = (...paths) => normalize(join(__dirname, ...paths))

export default src
