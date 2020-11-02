/**
 * This method is for copying functions with specified depth.
 * You can specify how deep to copy objects or arrays for you
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} input The value to recursively clone.
 * @param {number=0} depth Depth that the function should copy
 * @returns {*} Returns the deep cloned value.
 * @see clone
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * > const deep = ot.clone(objects)
 * > console.log(deep[0] === objects[0])
 * > //false
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
        typeof input[i] === 'object' && depth > 0
          ? clone(input[i], depth ? depth - 1 : depth)
          : input[i]
    }
    return <T>output
  }
  const output: { [key: string]: any } = {}
  for (const key in input) {
    output[key] =
      typeof input[key] === 'object' && depth > 0
        ? clone(input[key], depth ? depth - 1 : depth)
        : input[key]
  }
  return <T>output
}
