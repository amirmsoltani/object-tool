/**
 returns true if the key/value pairs in `query` also exist identically in `object`.
 Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.
 @since 0.1.0
 @method exists
 @param {Object} [ob]  the object to examine
 @param {Object} query  the key/value pairs to look for
 @returns {boolean}
 @see exists
 @static

 @example
 > ot.exists({ a: 1, b: 2}, {a: 0})
 false
 > ot.exists({ a: 1, b: 2}, {a: 1})
 true
 > ot.exists({ a: 1, b: 2}, {'!a': 1})
 false
 > ot.exists({ name: 'clive hater' }, { name: /clive/ })
 true
 > ot.exists({ name: 'clive hater' }, { '!name': /ian/ })
 true
 > ot.exists({ a: 1}, { a: function(n){ return n > 0; } })
 true
 > ot.exists({ a: 1}, { a: function(n){ return n > 1; } })
 false
 */
export default function exists<T extends { [key: string]: any }> (
  ob: T,
  query: {
    [key: string]: string | number | RegExp | ((property: any) => boolean)
  }
): boolean {
  for (let key in query) {
    let not = false
    key = key[0] === '!' ? (not = true) && key.slice(1) : key
    if (key in ob) {
      const value = query[key]
      if (
        ((typeof value === 'string' && typeof ob[key] === 'string') ||
          (typeof value === 'number' && typeof ob[key] === 'number')) &&
        value === ob[key]
      ) {
        continue
      } else if (
        value instanceof RegExp &&
        typeof ob[key] === 'string' &&
        value.test(ob[key])
      ) {
        continue
      } else if (not && typeof value !== 'function') continue
      else if (typeof value === 'function' && value(ob[key])) continue

      return false
    } else return false
  }
  return true
}
