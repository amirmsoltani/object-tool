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

export { default as map } from './map'
export { default as mapToArray } from './mapToArray'
export { default as etch } from './etch'
export { default as keys } from './keys'
export { default as len } from './len'
export { default as exists } from './exists'
export { default as union } from './union'
export { default as clone } from './clone'
export { default as every } from './every'
export { default as except } from './except'
export { default as filter } from './filter'
