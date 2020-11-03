import map from '../src/mapToArray'
import creator from './object-creator'

test('MapToArray: Test skip if return skip and compare output', () => {
  const ob = creator({ length: 100 })
  const eq: any = []
  expect(
    map(ob, (key, value, { skip }) => {
      if (value % 2 === 0) {
        eq.push(key + value.toString())
        return key + value.toString()
      }
      return skip
    })
  ).toEqual(eq)
})
