declare const skip: {
    key: string;
    value: string;
};
/**
 * type mapCallback
 * @typedef {Object} MapCallbackType
 * @property {string} key
 * @property {*} value
 */
/**
 * All properties are sent to this callback as {@link etch} and after processing the return value, it replaces the previous property.
 * @callback mapCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {Object} [options] callback options
 * @param {Object} [options.skip] If you return this value, the function will pass over this property
 * @note If you return the skip parameter, the operator passes over that property and it does not move to the output.
 * @param {number} [options.index] indexOf ob
 * @returns {MapCallbackType}
 * @example
 *
 * //If the value of the value can be divided into two parts, the value of the property will be deleted.
 * //In bitumen, the word odd will be added to the end.
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === number && value % 2 === 0)
 * { return skip; }
 *  else return {key:key,value:value+'odd'}
 * }
 */
/**
 * Modifies the input object based on the callback and returns a new object
 * @since 0.1.0
 * @param {Object} [ob] Object Input object properties are sent to callbackFn
 * @param {mapCallback} [callbackFn] Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @returns {Object}
 * @see map
 * @example
 *
 * function callbackFn(key,value,{skip}){
 *  if(typeof value === number && value % 2 === 0)
 * { return skip; }
 *  else return {key:key,value:value+'odd'}
 * }
 *
 * > ot.map({one:1,tow:2,three:3,four:4},callbackFn)
 * {one:"1odd",three:"3odd"}
 *
 * > function callbackFn(key,value){
 *    if(typeof value === "string")
 *        {return {key:value,value:key};}
 *    else return {key:key,value:value};
 * }
 *
 * > ot.map({one:1,tow:2,three:"example",four:"javascript")
 * {one:1,tow:2,example:"three",javascript:"four"}
 */
declare function map<T = {
    [key: string]: any;
}, O = {
    [key: string]: any;
}>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], options: {
    skip: typeof skip;
    index: number;
}) => {
    key: string | number;
    value: any;
} | typeof skip): O;

declare const skip$1: {
    key: string;
    value: string;
};
/**
 * All properties are sent to this callback as {@link etch} and after processing the return value.
 * @callback mapToArrayCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {Object} [options] callback options
 * @param {Object} [options.skip] If you return this value, the function will pass over this property
 * @note If you return the skip parameter, the operator passes over that property and it does not move to the output.
 * @param {number} [options.index]
 * @returns {*}
 * @example
 *
 * //If the value value is an odd number, it is passed over the property, and if the type is a string, it must be added together with the key and returned, otherwise the value value is returned.
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === "number" && value%2 !== 0)
 *  { return skip; }
 *  else if(type value === "string") return key+value;
 *  return value
 * }
 */
/**
 * Calls back all input object properties and returns the output value as an array
 * @since 0.1.0
 * @param {Object} [ob] Input object for map operation
 * @param {mapToArrayCallback} [callbackFn] Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @see mapToArray
 * @returns {Array}
 * @example
 *
 * >function callbackFn(key,value,{skip}){
 *  if(typeof value === "number" && value%2 !== 0)
 *  { return skip; }
 *  else if(type value === "string") return key+'-'+value;
 *  return value
 * }
 *
 * >ot.mapToArray({one:1,tow:2,three:3},callbackFn)
 * [2]
 *
 * >ot.mapToArray({one:1,tow:2,three:3,four:'example',five:5,six:'hello'},callbackFn)
 * [2,"four-example",six:'six-hello']
 */
declare function mapToArray<T extends {
    [key: string]: any;
}, R extends any>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], options: {
    skip: typeof skip$1;
    index: number;
}) => R | typeof skip$1): R[];

/**
 * All properties are sent to this callback and there is no return value
 * @callback etchCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {number} [index] indexOf ob
 * @returns {void}
 *
 * @example
 *
 * >let add = 0;
 * >const newOb = {}
 * >function callbackFn(key,value,index){
 *  if(type of value === "number")
 * { add += value }
 *
 *  new Ob[key] = {value:value,index:index}
 * }
 */
/**
 * All properties are sent in the input sent to the callback and you can perform your desired operations on the data
 * @since 0.1.0
 * @param {Object} [ob] Input Object
 * @param {etchCallback} [callbackFn] Callback is used to send object property
 * @returns {void}
 * @see etch
 * @example
 *
 * >let add = 0;
 * >const newOb = {}
 * function callbackFn(key,value,index){
 *  if(type of value === "number")
 * { add += value }
 *
 *  new Ob[key] = {value:value,index:index}
 * }
 *
 * > ot.etch({one:9,tow:2,three:"javascript",four:"example"},callbackFn)
 *
 * > console.log(add);
 * 11
 * >console.log(newOb);
 * {three:{value:"javascript",index:2},four:{value:"example",index:3}
 */
declare function etch<T = {
    [key: string]: any;
}>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => void): void;

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
declare function keys<T = {
    [key: string]: any;
}>(ob: T): Array<keyof T>;

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
declare function len<T = {
    [key: string]: any;
}>(ob: T): number;

/**
 returns true if the key/value pairs in `query` also exist identically in `object`.
 Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.
 @since 0.1.0
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
declare function exists<T extends {
    [key: string]: any;
}>(ob: T, query: {
    [key: string]: string | number | RegExp | ((property: any) => boolean);
}): boolean;

/**
 * Merge input objects from left to right All properties are replaced
 *
 * @since 0.1.0
 * @param {...Object}  - a sequence of object instances to be extended
 * @returns {Object}
 * @static
 * @see union
 * @example
 * > ot.union({ one: 1, three: 3 }, { one: 'one', two: 2 }, { four: 4 })
 * { one: 'one', three: 3, two: 2, four: 4 }
 * @example
 * > ot.union({one:[1,2,3],five:5},{tow:{one:1},three:3},{one:1,tow:2}})
 * {one:1,five:5,tow:2,three:3}
 */
declare function union<T extends {
    [key: string]: any;
}>(...args: T[]): {
    [K in keyof T extends undefined ? never : keyof T]: T[K];
};

/**
 * This method is for copying functions with specified depth.
 * You can specify how deep to copy objects or arrays
 *
 * @since 0.1.0
 * @param {*} input The value to recursively clone.
 * @param {number} [depth=0] Depth that the function should copy , default value is 0 (just copy first layer)
 * @note If the value of the submitted depth is -1, all references will be cloned
 * @returns {*}
 * @see clone
 *
 * @example
 * // Object cloning and object reference comparison
 *
 * const objects = { a : 1 , b : 2 , c: { a:1 , b:2 }, d: [1 , 2 , 3]}
 *
 * > deep = ot.clone(objects)
 *
 * > console.log( deep === objects , deep.c === objects.c , deep.d === objects.c )
 * false , true , true
 *
 * > deep = ot.clone( objects , -1 )
 *
 * > console.log( deep === objects , deep.c === objects.c , deep.d === objects.d )
 * false , false , false
 *
 * @example
 * // Clone arrays and compare array references
 *
 * > const arrays = [ 1 , 2 , [ 1 , 2 ] , { a : 1 , b : 2 } ]
 * > let deep = ot.clone(arrays)
 *
 * > console.log( deep === arrays , deep[2] === arrays[2] , deep[3] === arrays[3] )
 * false , true , true
 *
 * > deep = ot.clone(arrays,-1)
 *
 * > console.log( deep === arrays , deep[2] === arrays[2] , deep[3] === arrays[3] )
 * false , false , false
 */
declare function clone<T extends {
    [key: string]: any;
} | Array<any>>(input: T, depth?: number): T;

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
declare function every<T extends {
    [key: string]: any;
}>(ob: T, iterator: (value: T[keyof T], key: keyof T) => boolean): boolean;

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
declare function except<T extends {
    [key: string]: any;
}, K extends (keyof T | string) | Array<keyof T | string>>(ob: T, keys: K, deleteFromRef?: boolean): {
    [key in Exclude<keyof T, K extends string ? K : K[keyof K]>]: T[key];
};

/**
 * Submissions are reviewed by the user and the boolean value is returned
 *
 * @callback filterCallback
 * @param {string} [key] keyof ob
 * @param {*} [value] valueOf ob
 * @param {number} [index] indexOf ob
 * @returns {boolean}
 * @example
 * // If the word (of) is inside the key, the value true returns
 * >function(key){ return key.includes('of')}
 *
 * //If the type (value) is a number and more than 10, it must return true
 * >function(key,value){ return typeof value === "number" && value > 10}
 *
 * //If the index is divisible by 10, it returns true
 * >function(key,value,index){return index % 10 !== 0}
 */
/**
 * Sends the input value of the function as key and value to callbackFn,
 *  and if the correct value is returned by callbackFn,
 *  it creates a new object with the property and sends it to the output.
 *
 * @since 0.1.0
 * @param {Object} [ob] Object Input object properties are sent to callbackFn
 * @param {filterCallback} [callbackFn] Callback to perform operations
 * @returns {Object}
 * @see filter
 * @example
 * > function() callbackFn(key,value,index) { return value%2 === 0 || key.includes('filter') || index === 5}
 *
 * > ot.filter({one:1,tow:2,three:3,four:4},callbackFn)
 * {tow:2,four:4}
 *
 * > ot.filter({map:12,reduce:55,filter:1,etch:11},callbackFn)
 * {map:12,filter:1}
 *
 * > ot.filter({one:1,three:3,five:5,seven:7,nine:9,eleven:11},callbackFn)
 * {eleven:11}
 *
 */
declare function filter<T = {
    [key: string]: any;
}>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => boolean): T;

export { clone, etch, every, except, exists, filter, keys, len, map, mapToArray, union };
