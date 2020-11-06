/**
 * All properties are given to this callback and it can return the boolean value after processing
 * @callback EveryCallback
 * @param {*} [value] valueOf ob
 * @param {string} [key] keyof ob
 * @returns {boolean}
 *
 * @example
 *
 * > function EveryCallback(value,key)
 * {
 *  return keyof value === 'number' && value > 3 && key.includes('i')
 * }
 */
/**
 * Returns true if the supplied iterator function returns true for every property in the object
 * @since 0.1.0
 * @param {Object} [ob] - the object to inspect
 * @param {EveryCallback} - the iterator function to run against each key/value pair, the args are `(value, key)`.
 * @returns {boolean}
 * @see every
 * @example
 *
 * > function aboveTen(input){ return input > 10; }
 *
 * > ot.every({ eggs: 12, carrots: 30, peas: 100 }, aboveTen)
 * true
 *
 * > ot.every({ eggs: 6, carrots: 30, peas: 100 }, aboveTen)
 * false
 */
export default function every<T extends { [key: string]: any }> (
  ob: T,
  iterator: (value: T[keyof T], key: keyof T) => boolean
): boolean {
  for (const key in ob) {
    if (!iterator(ob[key], key)) return false
  }
  return true
}
