import { createGlobalStyle } from 'styled-components'
import fluid from 'design/style/fluid'

const variablesFor = name => ({
  theme: {
    fluid: { [name]: property, viewport }
  }
}) =>
  Array.from({ length: property.span * 2 + 1 }, (_, i) => {
    const n = i - property.span

    return fluid({
      viewport,
      property: property.name(n),
      value: {
        from: property.base.from * property.ratio.from ** n,
        to: property.base.to * property.ratio.to ** n,
        unit: property.base.unit
      }
    })
  })

const Variables = createGlobalStyle`
  :root {
    ${variablesFor(`size`)}
    ${variablesFor(`lineHeight`)}
  }
`

export default Variables
