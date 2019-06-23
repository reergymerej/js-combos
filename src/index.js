const prepend = (val) => (x) => [val, x]
const slice = (a, index) => [...a].slice(index)
const split = ([head, ...tail]) => [head, tail]

const reduceListIntoPairs = (acc, _val, index, all) => {
  const afterValue = slice(all, index)
  const [head, tail] = split(afterValue)
  const prepended = tail.map(prepend(head))
  return [
    ...acc,
    ...prepended,
  ]
}

export const pairs = (list) => list.reduce(reduceListIntoPairs, [])
