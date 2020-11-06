import clone from './clone'

/**
 * Returns a clone of the object minus the specified properties.
 * @since 0.1.0
 * @param {object} [ob] - the input object
 * @param {string|string[]} [keys] - a single property, or array of properties to omit
 * @param {boolean} [deleteFromRe=false] - If the value is correct, the main object comes with the output. default false
 * @returns {Object}
 * @see except
 * @example
 *
 * > o.except({ a: 1, b: 2, c: 3}, 'b')
 * { a: 1, c: 3 }
 *
 * > o.except({ a: 1, b: 2, c: 3}, ['b', 'a'])
 * { c: 3 }
 */
function except<
  T extends { [key: string]: any },
  K extends (keyof T | string) | Array<keyof T | string>
>(
  ob: T,
  keys: K,
  deleteFromRef: boolean = false
): { [key in Exclude<keyof T, K extends string ? K : K[keyof K]>]: T[key] } {
  const output = deleteFromRef ? ob : clone(ob)
  if (Array.isArray(keys)) {
    let i = keys.length
    while (--i > -1) {
      if (keys[i] in output) delete output[keys[i]]
    }
    return output
  } else if (keys in output) delete output[<keyof T>keys]
  return output
}

export default except
