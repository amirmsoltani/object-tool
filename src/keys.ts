/**
 * This function is used to capture the array of entity keys inside the object.
 * @param {{[key:string]:any}}ob
 * @returns {String[]}
 */
export default function len<T = { [key: string]: any }> (ob: T): Array<keyof T> {
  if (!ob) return []
  return <Array<keyof T>>Object.keys(ob)
}
