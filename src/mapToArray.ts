const skip = { key: 'skip', value: 'skip' }

/**
 * With the help of this function, you can trace and change your desired object
 * @template {{[key:string]:any}} T
 * @template {any} R
 * @param {T} ob Input object for map operation
 * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,value:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @returns {O} After change and deleting the values from the object, a new object returns
 */
export default function map<T = { [key: string]: any }, R = any> (
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
