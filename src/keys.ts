/**
 * This function is used to capture the array of entity keys inside the object.
 * @since 0.1.0
 * @param {Object} [ob] Input object to get keys
 * @returns {String[]}
 *
 * @example
 *
 * >ot.keys({one:1,tow:2,three:3})
 * ["one","tow","three"]
 */
export default function keys<T = { [key: string]: any }> (
  ob: T
): Array<keyof T> {
  if (!ob) return []
  return <Array<keyof T>>Object.keys(ob)
}
