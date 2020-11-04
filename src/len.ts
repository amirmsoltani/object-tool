/**
 * This function is used to get the number of values inside the object
 * @since 0.1.0
 * @param {Object} [ob] Input object to count all properties
 * @returns {number}
 *
 * @example
 *
 * >ot.len({one:1,tow:2})
 * 2
 *
 * > ot.len(one:1,tow:2,three:3,four:{one:1})
 * 4
 */
export default function len<T = { [key: string]: any }> (ob: T): number {
  if (!ob) return 0
  return Object.entries(ob).length
}
