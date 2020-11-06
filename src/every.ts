/**
 * Returns true if the supplied iterator function returns true for every property in the object
 * @since 0.1.0
 * @param {Object} - the object to inspect
 * @param {Function} - the iterator function to run against each key/value pair, the args are `(value, key)`.
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
