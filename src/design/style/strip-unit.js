import valueAndUnit from './value-and-unit'

const stripUnit = (string) => valueAndUnit(string).value

export default stripUnit
