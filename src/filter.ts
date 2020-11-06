/**
 * Submissions are reviewed by the user and the boolean value is returned
 *
 * @callback filterCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {number} [index] indexOf ob
 * @returns {boolean}
 * @example
 * // If the word (of) is inside the key, the value true returns
 * >function(key){ return key.includes('of')}
 *
 * //If the type (value) is a number and more than 10, it must return true
 * >function(key,value){ return typeof value === "number" && value > 10}
 *
 * //If the index is divisible by 10, it returns true
 * >function(key,value,index){return index % 10 !== 0}
 */
/**
 * Sends the input value of the function as key and value to callbackFn,
 *  and if the correct value is returned by callbackFn,
 *  it creates a new object with the property and sends it to the output.
 *
 * @since 0.1.0
 * @param {Object} [ob] Object Input object properties are sent to callbackFn
 * @param {filterCallback} [callbackFn] Callback to perform operations
 * @returns {Object}
 * @see filter
 * @example
 * > function() callbackFn(key,value,index) { return value%2 === 0 || key.includes('filter') || index === 5}
 *
 * > ot.filter({one:1,tow:2,three:3,four:4},callbackFn)
 * {tow:2,four:4}
 *
 * > ot.filter({map:12,reduce:55,filter:1,etch:11},callbackFn)
 * {map:12,filter:1}
 *
 * > ot.filter({one:1,three:3,five:5,seven:7,nine:9,eleven:11},callbackFn)
 * {eleven:11}
 *
 */
export default function filter<T = { [key: string]: any }> (
  ob: T,
  callbackFn: (key: keyof T, value: T[keyof T], index: number) => boolean
): T {
  const result: { [key: string]: any } = {}
  Object.entries(ob).forEach((array, index) => {
    if (callbackFn(array[0] as keyof T, array[1], index)) {
      result[array[0]] = array[1]
    }
  })
  return <T>result
}
