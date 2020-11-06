const skip = { key: 'skip', value: 'skip' }
/**
 * All properties are sent to this callback as {@link etch} and after processing the return value.
 * @callback mapToArrayCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {Object} [options] callback options
 * @param {Object} [options.skip] If you return this value, the function will pass over this property
 * @note If you return the skip parameter, the operator passes over that property and it does not move to the output.
 * @param {number} [options.index]
 * @returns {*}
 * @example
 *
 * //If the value value is an odd number, it is passed over the property, and if the type is a string, it must be added together with the key and returned, otherwise the value value is returned.
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === "number" && value%2 !== 0)
 *  { return skip; }
 *  else if(type value === "string") return key+value;
 *  return value
 * }
 */
/**
 * Calls back all input object properties and returns the output value as an array
 * @since 0.1.0
 * @param {Object} [ob] Input object for map operation
 * @param {mapToArrayCallback} [callbackFn] Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @see mapToArray
 * @returns {Array}
 * @example
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === "number" && value%2 !== 0)
 *  { return skip; }
 *  else if(type value === "string") return key+'-'+value;
 *  return value
 * }
 *
 * >ot.mapToArray({one:1,tow:2,three:3},callbackFn)
 * [2]
 *
 * >ot.mapToArray({one:1,tow:2,three:3,four:'example',five:5,six:'hello'},callbackFn)
 * [2,"four-example",six:'six-hello']
 */
export default function mapToArray<
  T extends { [key: string]: any },
  R extends any
> (
  ob: T,
  callbackFn: (
    key: keyof T,
    value: T[keyof T],
    options: { skip: typeof skip; index: number }
  ) => R | typeof skip
): R[] {
  const result: R[] = []
  Object.entries(ob).forEach((array, index) => {
    const response = callbackFn(array[0] as keyof T, array[1], { index, skip })
    if (response !== skip) result.push(response as R)
  })
  return result
}
