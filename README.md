## Modules

<dl>
<dt><a href="#module_ot">ot</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#filter">filter([ob], [callbackFn])</a> ⇒ <code>Object</code></dt>
<dd><p>Sends the input value of the function as key and value to callbackFn,
 and if the correct value is returned by callbackFn,
 it creates a new object with the property and sends it to the output.</p>
</dd>
<dt><a href="#map">map([ob], [callbackFn])</a> ⇒ <code>Object</code></dt>
<dd><p>Modifies the input object based on the callback and returns a new object</p>
</dd>
<dt><a href="#mapToArray">mapToArray([ob], [callbackFn])</a> ⇒ <code>Array</code></dt>
<dd><p>Calls back all input object properties and returns the output value as an array</p>
</dd>
<dt><a href="#etch">etch([ob], [callbackFn])</a> ⇒ <code>void</code></dt>
<dd><p>All properties are sent in the input sent to the callback and you can perform your desired operations on the data</p>
</dd>
<dt><a href="#len">len([ob])</a> ⇒ <code>number</code></dt>
<dd><p>This function is used to get the number of values inside the object</p>
</dd>
<dt><a href="#keys">keys([ob])</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>This function is used to capture the array of entity keys inside the object.</p>
</dd>
<dt><a href="#exists">exists([ob], query)</a> ⇒ <code>boolean</code></dt>
<dd><p>returns true if the key/value pairs in <code>query</code> also exist identically in <code>object</code>.
 Also supports RegExp values in <code>query</code>. If the <code>query</code> property begins with <code>!</code> then test is negated.</p>
</dd>
<dt><a href="#union">union()</a> ⇒ <code>Object</code></dt>
<dd><p>Merge input objects from left to right All properties are replaced</p>
</dd>
<dt><a href="#clone">clone(input, [depth])</a> ⇒ <code>*</code></dt>
<dd><p>This method is for copying functions with specified depth.
You can specify how deep to copy objects or arrays</p>
</dd>
<dt><a href="#every">every([ob], iterator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if the supplied iterator function returns true for every property in the object</p>
</dd>
<dt><a href="#except">except([ob], [keys], [deleteFromRe])</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a clone of the object minus the specified properties.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#filterCallback">filterCallback</a> ⇒ <code>boolean</code></dt>
<dd><p>Submissions are reviewed by the user and the boolean value is returned</p>
</dd>
<dt><a href="#MapCallbackType">MapCallbackType</a> : <code>Object</code></dt>
<dd><p>type mapCallback</p>
</dd>
<dt><a href="#mapCallback">mapCallback</a> ⇒ <code><a href="#MapCallbackType">MapCallbackType</a></code></dt>
<dd><p>All properties are sent to this callback as <a href="#etch">etch</a> and after processing the return value, it replaces the previous property.</p>
</dd>
<dt><a href="#mapToArrayCallback">mapToArrayCallback</a> ⇒ <code>*</code></dt>
<dd><p>All properties are sent to this callback as <a href="#etch">etch</a> and after processing the return value.</p>
</dd>
<dt><a href="#etchCallback">etchCallback</a> ⇒ <code>void</code></dt>
<dd><p>All properties are sent to this callback and there is no return value</p>
</dd>
<dt><a href="#EveryCallback">EveryCallback</a> ⇒ <code>boolean</code></dt>
<dd><p>All properties are given to this callback and it can return the boolean value after processing</p>
</dd>
</dl>

<a name="module_ot"></a>

## ot
**Summary**: <pre>
**Example**  
```js
const ob = { a : 1 , b : 'example' , c : [1 , 2, 3] };
```
**Example**  
```js
// How to use this package is as follows
```
<a name="filter"></a>

## filter([ob], [callbackFn]) ⇒ <code>Object</code>
Sends the input value of the function as key and value to callbackFn,

**Kind**: global function  
**See**: filter  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Object Input object properties are sent to callbackFn |
| [callbackFn] | [<code>filterCallback</code>](#filterCallback) | Callback to perform operations |

**Example**  
```js
> function() callbackFn(key,value,index) { return value%2 === 0 || key.includes('filter') || index === 5}
```
<a name="map"></a>

## map([ob], [callbackFn]) ⇒ <code>Object</code>
Modifies the input object based on the callback and returns a new object

**Kind**: global function  
**See**: map  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Object Input object properties are sent to callbackFn |
| [callbackFn] | [<code>mapCallback</code>](#mapCallback) | Callback is used to change the values sent . If you want to skip the value sent, return the skip value |

**Example**  
```js
function callbackFn(key,value,{skip}){
```
<a name="mapToArray"></a>

## mapToArray([ob], [callbackFn]) ⇒ <code>Array</code>
Calls back all input object properties and returns the output value as an array

**Kind**: global function  
**See**: mapToArray  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Input object for map operation |
| [callbackFn] | [<code>mapToArrayCallback</code>](#mapToArrayCallback) | Callback is used to change the values sent . If you want to skip the value sent, return the skip value |

**Example**  
```js
>function callbackFn(key,value,{skip}){
```
<a name="etch"></a>

## etch([ob], [callbackFn]) ⇒ <code>void</code>
All properties are sent in the input sent to the callback and you can perform your desired operations on the data

**Kind**: global function  
**See**: etch  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Input Object |
| [callbackFn] | [<code>etchCallback</code>](#etchCallback) | Callback is used to send object property |

**Example**  
```js
>let add = 0;
```
<a name="len"></a>

## len([ob]) ⇒ <code>number</code>
This function is used to get the number of values inside the object

**Kind**: global function  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Input object to count all properties |

**Example**  
```js
>ot.len({one:1,tow:2})
```
<a name="keys"></a>

## keys([ob]) ⇒ <code>Array.&lt;String&gt;</code>
This function is used to capture the array of entity keys inside the object.

**Kind**: global function  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Input object to get keys |

**Example**  
```js
>ot.keys({one:1,tow:2,three:3})
```
<a name="exists"></a>

## exists([ob], query) ⇒ <code>boolean</code>
returns true if the key/value pairs in `query` also exist identically in `object`.
 Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.

**Kind**: global function  
**See**: exists  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | the object to examine |
| query | <code>Object</code> | the key/value pairs to look for |

**Example**  
```js
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
```
<a name="union"></a>

## union() ⇒ <code>Object</code>
Merge input objects from left to right All properties are replaced

**Kind**: global function  
**See**: union  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| ... | <code>Object</code> | a sequence of object instances to be extended |

**Example**  
```js
> ot.union({ one: 1, three: 3 }, { one: 'one', two: 2 }, { four: 4 })
```
**Example**  
```js
> ot.union({one:[1,2,3],five:5},{tow:{one:1},three:3},{one:1,tow:2}})
```
<a name="clone"></a>

## clone(input, [depth]) ⇒ <code>\*</code>
This method is for copying functions with specified depth.

**Kind**: global function  
**Note**: If the value of the submitted depth is -1, all references will be cloned  
**See**: clone  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>\*</code> |  | The value to recursively clone. |
| [depth] | <code>number</code> | <code>0</code> | Depth that the function should copy , default value is 0 (just copy first layer) |

**Example**  
```js
// Object cloning and object reference comparison
```
**Example**  
```js
// Clone arrays and compare array references
```
<a name="every"></a>

## every([ob], iterator) ⇒ <code>boolean</code>
Returns true if the supplied iterator function returns true for every property in the object

**Kind**: global function  
**See**: every  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | the object to inspect |
| iterator | [<code>EveryCallback</code>](#EveryCallback) | the iterator function to run against each key/value pair, the args are `(value, key)`. |

**Example**  
```js
> function aboveTen(input){ return input > 10; }
```
<a name="except"></a>

## except([ob], [keys], [deleteFromRe]) ⇒ <code>Object</code>
Returns a clone of the object minus the specified properties.

**Kind**: global function  
**See**: except  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [ob] | <code>object</code> |  | the input object |
| [keys] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | a single property, or array of properties to omit |
| [deleteFromRe] | <code>boolean</code> | <code>false</code> | If the value is correct, the main object comes with the output. default false |

**Example**  
```js
> o.except({ a: 1, b: 2, c: 3}, 'b')
```
<a name="filterCallback"></a>

## filterCallback ⇒ <code>boolean</code>
Submissions are reviewed by the user and the boolean value is returned

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | keyof ob |
| [value] | <code>\*</code> | valueOf ob |
| [index] | <code>number</code> | indexOf ob |

**Example**  
```js
// If the word (of) is inside the key, the value true returns
```
<a name="MapCallbackType"></a>

## MapCallbackType : <code>Object</code>
type mapCallback

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>\*</code> | 

<a name="mapCallback"></a>

## mapCallback ⇒ [<code>MapCallbackType</code>](#MapCallbackType)
All properties are sent to this callback as [etch](#etch) and after processing the return value, it replaces the previous property.

**Kind**: global typedef  
**Note**: If you return the skip parameter, the operator passes over that property and it does not move to the output.  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | keyof ob |
| [value] | <code>\*</code> | valueOf ob |
| [options] | <code>Object</code> | callback options |
| [options.skip] | <code>Object</code> | If you return this value, the function will pass over this property |
| [options.index] | <code>number</code> | indexOf ob |

**Example**  
```js
//If the value of the value can be divided into two parts, the value of the property will be deleted.
```
<a name="mapToArrayCallback"></a>

## mapToArrayCallback ⇒ <code>\*</code>
All properties are sent to this callback as [etch](#etch) and after processing the return value.

**Kind**: global typedef  
**Note**: If you return the skip parameter, the operator passes over that property and it does not move to the output.  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | keyof ob |
| [value] | <code>\*</code> | valueOf ob |
| [options] | <code>Object</code> | callback options |
| [options.skip] | <code>Object</code> | If you return this value, the function will pass over this property |
| [options.index] | <code>number</code> |  |

**Example**  
```js
//If the value value is an odd number, it is passed over the property, and if the type is a string, it must be added together with the key and returned, otherwise the value value is returned.
```
<a name="etchCallback"></a>

## etchCallback ⇒ <code>void</code>
All properties are sent to this callback and there is no return value

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | keyof ob |
| [value] | <code>\*</code> | valueOf ob |
| [index] | <code>number</code> | indexOf ob |

**Example**  
```js
>let add = 0;
```
<a name="EveryCallback"></a>

## EveryCallback ⇒ <code>boolean</code>
All properties are given to this callback and it can return the boolean value after processing

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>\*</code> | valueOf ob |
| [key] | <code>string</code> | keyof ob |

**Example**  
```js
> function EveryCallback(value,key)
```