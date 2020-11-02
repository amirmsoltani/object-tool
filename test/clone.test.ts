import clone from '../src/clone'

test('Clone: test Copy depth and output', () => {
  /* initial object for test  */

  const ob = {
    one: 1,
    tow: 'this is a test',
    c: [1, '2', [3, '4']],
    d: {
      a: 1,
      b: '1',
      c: [1, '2'],
      d: { a: 1, b: '2', c: { a: 1, b: '2', c: [1, '2'] } }
    }
  }

  let output = clone(ob)
  /* Check tha the reference is not equal */
  expect(output).not.toBe(ob)

  /* Checking the equality of object information */
  expect(output).toEqual(ob)

  /* Check the equality of the first layer reference */

  /* Array */
  expect(output.c).toBe(ob.c)
  /* Object */
  expect(output.d).toBe(ob.d)

  /* Build a new clone to test the second layer */
  output = clone(ob, 1)

  /* Check the equality of the third layer reference */

  /* Array */
  expect(output.c[2]).toBe(ob.c[2])
  /* Object */
  expect(output.d.c).toBe(ob.d.c)

  /* Check that the second layer reference is not equal */

  /* Array */
  expect(output.c).not.toBe(ob.c)
  /* Object  */
  expect(output.d).not.toBe(ob.d)
})
