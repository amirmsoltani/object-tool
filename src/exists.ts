/**
 returns true if the key/value pairs in `query` also exist identically in `object`.
 Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.
 @method exists
 @param ob {object} - the object to examine
 @param query {object} - the key/value pairs to look for
 @returns {boolean}
 @static
 @example
 > o.exists({ a: 1, b: 2}, {a: 0})
 false
 > o.exists({ a: 1, b: 2}, {a: 1})
 true
 > o.exists({ a: 1, b: 2}, {'!a': 1})
 false
 > o.exists({ name: 'clive hater' }, { name: /clive/ })
 true
 > o.exists({ name: 'clive hater' }, { '!name': /ian/ })
 true
 > o.exists({ a: 1}, { a: function(n){ return n > 0; } })
 true
 > o.exists({ a: 1}, { a: function(n){ return n > 1; } })
 false
 */
export default function exists<T extends { [key: string]: any }> (
  ob: T,
  query: {
    [key: string]: string | number | RegExp | ((property: any) => boolean)
  }
): boolean {
  for (const key in query) {
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
      } else if (typeof value === 'function' && value(ob[key])) {
        continue
      }
      return false
    } else return false
  }
  return true
}
