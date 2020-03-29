const axes = (direction) => {
  const x = {
    start: `left`,
    end: `right`,
    axis: `x`,
    dimension: `width`,
  }

  const y = {
    start: `top`,
    end: `bottom`,
    axis: `y`,
    dimension: `height`,
  }

  const axes = direction.startsWith(`column`)
    ? { main: y, cross: x }
    : { main: x, cross: y }

  if (direction.endsWith(`reverse`)) {
    [axes.main.start, axes.main.end] = [axes.main.end, axes.main.start]
  }

  return axes
}

export default axes
