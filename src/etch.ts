/**
 * @callback etchCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {number} [index] indexOf ob
 * @returns {void}
 *
 * @example
 *
 * >let add = 0;
 * >const newOb = {}
 * >function callbackFn(key,value,index){
 *  if(type of value === "number")
 * { add += value }
 *
 *  new Ob[key] = {value:value,index:index}
 * }
 */
/**
 * All properties are sent in the input sent to the callback and you can perform your desired operations on the data
 * @since 0.1.0
 * @param {Object} ob Input Object
 * @param {etchCallback} callbackFn Callback is used to send object property
 * @returns {void}
 * @see etch
 * @example
 *
 * >let add = 0;
 * >const newOb = {}
 * function callbackFn(key,value,index){
 *  if(type of value === "number")
 * { add += value }
 *
 *  new Ob[key] = {value:value,index:index}
 * }
 *
 * > ot.etch({one:1,tow:2,three:"javascript",four:"example"},callbackFn)
 *
 * > console.log(add);
 * 3
 * >console.log(newOb);
 * {three:{value:"javascript",index:2},four:{value:"example",index:3}
 */
export default function etch<T = { [key: string]: any }> (
  ob: T,
  callbackFn: (key: keyof T, value: T[keyof T], index: number) => void
): void {
  Object.entries(ob).forEach((array, index) => {
    callbackFn(array[0] as keyof T, array[1], index)
  })
}
