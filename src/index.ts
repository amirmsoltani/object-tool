/**
 * @module ot
 *
 * @summary
 * <pre>
 * This package is for easy use of objects in JavaScript and typescript.
 *
 * The functions that are repeated in JavaScript are written in typescript for convenience, which is shown in the example below.
 * </pre>
 *
 * @example
 *
 * const ob = { a : 1 , b : 'example' , c : [1 , 2, 3] };
 *
 * // javascript
 *
 * > const keys = Object.keys(ob)
 *
 * // type return string[] | Array<String>
 *
 * > ob[keys[0]]
 *
 * // You will encounter an error using this method in typescript
 *
 * // object-tool
 *
 * const keys = ot.keys(ob)
 *
 * // type return "a" | "b" | "c"
 *
 * > ob[keys[0]]
 *
 * // You will not get any error and the value of 1 will be returned
 * @example
 * // How to use this package is as follows
 *
 * > import ot from 'object-tool';
 *
 * > ot.keys({a:1,b:2})
 * ['a','b']
 *
 * // or
 *
 * > import {keys} from 'object-tool';
 *
 * keys({a:1,b:2})
 * ['a','b']
 *
 * // or
 *
 * > const ot = require('object-tool')
 *
 * ot.keys({a:1,b:2})
 * ['a','b']
 *
 * // or
 *
 * > const {keys} = require('object-tool');
 *
 * keys({a:1,b:2})
 * ['a','b']
 *
 * // or
 *
 */
import map from './map'
import mapToArray from './mapToArray'
import etch from './etch'
import keys from './keys'
import len from './len'
import exists from './exists'
import union from './union'
import clone from './clone'
import every from './every'
import except from './except'
import filter from './filter'

export {
  map,
  mapToArray,
  etch,
  keys,
  exists,
  len,
  union,
  clone,
  every,
  except,
  filter
}

export default {
  map,
  mapToArray,
  etch,
  keys,
  exists,
  len,
  union,
  clone,
  every,
  except,
  filter
}
