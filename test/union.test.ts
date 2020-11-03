import union from '../src/union'

test('Union: test output', () => {
  expect(
    union({ a: 1, b: 'a', c: [1, 2, 3] }, { c: 4 }, { b: [7, 8, 9] })
  ).toEqual({ a: 1, c: 4, b: [7, 8, 9] })
  expect(
    union(
      { one: 1, tow: '55' },
      { one: 6, three: '3', five: 6 },
      { one: [1, 2, 3], five: { one: 13 } }
    )
  ).toEqual({ one: [1, 2, 3], tow: '55', three: '3', five: { one: 13 } })
})
