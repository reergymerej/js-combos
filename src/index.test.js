import * as mod from '.'

describe('pairs', () => {
  it('should return all pairs', () => {
    expect(mod.pairs([1, 2, 3])).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
    ])

    expect(mod.pairs([1, 2, 3, 4, 5])).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
    [4, 5],
    ])
  })
})
