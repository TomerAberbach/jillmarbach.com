const modularScale = ({ base, ratio, span }) => {
  const scale = Array.from({ length: 1 + 2 * span })
  scale[span] = base

  for (let i = 1; i <= span; i++) {
    scale[span + i] = scale[span + (i - 1)] * ratio
    scale[span - i] = scale[span - (i - 1)] / ratio
  }

  return scale
}

export default modularScale
