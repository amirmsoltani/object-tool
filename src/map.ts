const skip = { key: 'skip', value: 'skip' }
/**
 * type mapCallback
 * @typedef {Object} MapCallbackType
 * @property {string} key
 * @property {*} value
 */
/**
 * All properties are sent to this callback as etch and after processing the return value, it replaces the previous property.
 * @callback mapCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {Object} [options] call back options
 * @param {Object} [options.skip] If you return this value, the function will pass over this property
 * @note If you return the skip parameter, the operator passes over that property and it does not move to the output.
 * @param {number} [options.index] indexOf ob
 * @returns {MapCallbackType}
 * @example
 *
 * //If the value of the value can be divided into two parts, the value of the property will be deleted.
 * //In bitumen, the word odd will be added to the end.
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === number && value % 2 === 0)
 * { return skip; }
 *  else return {key:key,value:value+'odd'}
 * }
 */
/**
 * Modifies the input object based on the callback and returns a new object
 * @since 0.1.0
 * @param {Object} [ob] Object Input object properties are sent to callbackFn
 * @param {mapCallback} [callbackFn] Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @returns {O}
 * @see map
 * @example
 *
 * function callbackFn(key,value,{skip}){
 *  if(typeof value === number && value % 2 === 0)
 * { return skip; }
 *  else return {key:key,value:value+'odd'}
 * }
 *
 * > ot.map({one:1,tow:2,three:3,four:4},callbackFn)
 * {one:"1odd",three:"3odd"}
 *
 * > function callbackFn(key,value){
 *    if(typeof value === "string")
 *        {return {key:value,value:key};}
 *    else return {key:key,value:value};
 * }
 *
 * > ot.map({one:1,tow:2,three:"example",four:"javascript")
 * {one:1,tow:2,example:"three",javascript:"four"}
 */
export default function map<
  T = { [key: string]: any },
  O = { [key: string]: any }
> (
  ob: T,
  callbackFn: (
    key: keyof T,
    value: T[keyof T],
    options: {
      skip: typeof skip
      index: number
    }
  ) =>
    | {
        key: string | number
        value: any
      }
    | typeof skip
): O {
  const result: { [key: string]: any } = {}
  Object.entries(ob).forEach((array, index) => {
    const response = callbackFn(array[0] as keyof T, array[1], { index, skip })
    if (response !== skip) result[response.key] = response.value
  })
  return <O>result
}
