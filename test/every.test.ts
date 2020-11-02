import every from '../src/every'
import creator from './object-creator'
test('Every: check output ', () => {
  expect(every(creator({ max: 10 }), (value) => value < 10)).toBeTruthy()
})
