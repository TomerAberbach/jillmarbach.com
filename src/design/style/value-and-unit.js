const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/

const valueAndUnit = string => {
  const matches = string.match(cssRegex)
  return {
    value: parseFloat(string),
    unit: matches[2]
  }
}

export default valueAndUnit
