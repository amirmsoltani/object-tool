/**
 * This method is for copying functions with specified depth.
 * You can specify how deep to copy objects or arrays
 *
 * @since 0.1.0
 * @param {*} input The value to recursively clone.
 * @param {number} [depth=0] Depth that the function should copy , default value is 0 (just copy first layer)
 * @note If the value of the submitted depth is -1, all references will be cloned
 * @returns {*} Returns the deep cloned value.
 * @see clone
 *
 * @example
 * // Object cloning and object reference comparison
 *
 * const objects = { a : 1 , b : 2 , c: { a:1 , b:2 }, d: [1 , 2 , 3]}
 *
 * > deep = ot.clone(objects)
 *
 * > console.log( deep === objects , deep.c === objects.c , deep.d === objects.c )
 * false , true , true
 *
 * > deep = ot.clone( objects , -1 )
 *
 * > console.log( deep === objects , deep.c === objects.c , deep.d === objects.d )
 * false , false , false
 *
 * @example
 * // Clone arrays and compare array references
 *
 * > const arrays = [ 1 , 2 , [ 1 , 2 ] , { a : 1 , b : 2 } ]
 * > let deep = ot.clone(arrays)
 *
 * > console.log( deep === arrays , deep[2] === arrays[2] , deep[3] === arrays[3] )
 * false , true , true
 *
 * > deep = ot.clone(arrays,-1)
 *
 * > console.log( deep === arrays , deep[2] === arrays[2] , deep[3] === arrays[3] )
 * false , false , false
 */
export default function clone<T extends { [key: string]: any } | Array<any>> (
  input: T,
  depth = 0
): T {
  if (Array.isArray(input)) {
    let i = input.length
    const output: Array<any> = new Array(i)
    while (--i > -1) {
      output[i] =
        typeof input[i] === 'object' && (depth === -1 || depth > 0)
          ? clone(input[i], depth > 0 ? depth - 1 : depth)
          : input[i]
    }
    return <T>output
  }
  const output: { [key: string]: any } = {}
  for (const key in input) {
    output[key] =
      typeof input[key] === 'object' && (depth === -1 || depth > 0)
        ? clone(input[key], depth ? depth - 1 : depth)
        : input[key]
  }
  return <T>output
}
