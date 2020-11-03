import without from '../src/except'
import creator from './object-creator'
test('Except: test output', () => {
  const ob = creator({ length: 3 })

  expect(without(ob, 'A')).toEqual({ B: ob.B, C: ob.C })

  expect(without(ob, ['A', 'C'])).toEqual({ B: ob.B })

  const output = without(ob, ['B', 'Y', 'U', 'L'], true)

  expect(output).toBe(ob)

  expect(output).toEqual({ A: ob.A, C: ob.C })
})
