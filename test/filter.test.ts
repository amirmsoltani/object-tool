import filter from '../src/filter'
import creator from './object-creator'

test('Filter: Check the correct output', () => {
  const ob = creator({ length: 100 })
  const eq: any = {}
  expect(
    filter(ob, (key, value) => {
      if (value % 2) {
        eq[key] = value
        return true
      }
      return false
    })
  ).toEqual(eq)
})
