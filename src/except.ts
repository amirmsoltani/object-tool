/**
Returns a clone of the object minus the specified properties.
@param {object} - the input object
@param {string|string[]} - a single property, or array of properties to omit
@returns {object}
@static
@example
> o.except({ a: 1, b: 2, c: 3}, 'b')
{ a: 1, c: 3 }
> o.except({ a: 1, b: 2, c: 3}, ['b', 'a'])
{ c: 3 }
*/
export default function except<T extends { [key: string]: any }> (
  ob: T,
  keys: string | string[]
) {
  if (Array.isArray(keys)) {
      
  }
}
