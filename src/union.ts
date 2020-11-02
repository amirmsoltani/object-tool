/**
Merge a list of objects, left to right, into one
@param {...object} object - a sequence of object instances to be extended
@returns {object}
@static
@example
> ot.union({ one: 1, three: 3 }, { one: 'one', two: 2 }, { four: 4 })
{ one: 'one',
  three: 3,
  two: 2,
  four: 4 }
*/
export default function union<T extends { [key: string]: any }> (
  ...args: T[]
): { [key: string]: any } {
  let output = {}
  args.forEach((property) => {
    output = { ...output, ...property }
  })
  return output
}
