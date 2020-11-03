/**
 * This function is used to get the number of values inside the object
 * @param {{[key:string]:any}}ob
 * @returns {number}
 */
export default function len<T = { [key: string]: any }> (ob: T): number {
  if (!ob) return 0
  return Object.entries(ob).length
}
