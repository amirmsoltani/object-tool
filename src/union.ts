/**
 * Merge a list of objects, left to right, into one
 * @since 0.1.0
 * @param {...Object}  - a sequence of object instances to be extended
 * @returns {Object}
 * @static
 * @see union
 * @example
 * > ot.union({ one: 1, three: 3 }, { one: 'one', two: 2 }, { four: 4 })
 * { one: 'one', three: 3, two: 2, four: 4 }
 *
 * > ot.union({one:[1,2,3],five:5},{tow:{one:1},three:3},{one:1,tow:2}})
 * {one:1,five:5,tow:2,three:3}
 */
export default function union<T extends { [key: string]: any }> (
  ...args: T[]
): { [K in keyof T extends undefined ? never : keyof T]: T[K] } {
  let output = {}
  args.forEach((property) => {
    output = Object.assign(output, property)
  })
  return <T>output
}
