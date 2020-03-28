const fluid = {
  size: {
    base: { from: 1, to: 1.375, unit: `rem` },
    ratio: { from: 1.15, to: 1.2 },
    span: 20,
    name: i => `--s${i}`,
    var: i => `var(${fluid.size.name(i)})`
  },
  lineHeight: {
    base: { from: 1.875, to: 1.667, unit: `em` },
    ratio: { from: 1.125, to: 1.275 },
    span: 20,
    name: i => `--lh${i}`,
    var: i => `var(${fluid.lineHeight.name(i)})`
  },
  viewport: { from: 320, to: 960, unit: `px` }
}

const theme = {
  fluid,
  fontFamily: `'Catamaran', Arial, Helvetica, sans-serif`,
  size: fluid.size.var,
  lineHeight: fluid.lineHeight.var,
  measure: `65ch`,
  color: {
    background: `white`,
    text: `black`,
    dark: `hsl(187, 37%, 52%)`,
    medium: `hsl(179, 29.5%, 64.5%)`,
    light: `hsl(171, 22%, 77%)`
  }
}

export const fontFamily = ({ theme }) => theme.fontFamily
export const size = i => ({ theme }) => theme.size(i)
export const lineHeight = i => ({ theme }) => theme.lineHeight(i)
export const measure = ({ theme }) => theme.measure
export const color = name => ({ theme }) => theme.color[name]

export default theme
