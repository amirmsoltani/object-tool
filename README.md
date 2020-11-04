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
<dd></dd>
</dl>

<a name="filter"></a>

## filter([ob], [callbackFn]) ⇒ <code>Object</code>
Sends the input value of the function as key and value to callbackFn, and if the correct value is returned by callbackFn, it creates a new object with the property and sends it to the output.

**Kind**: global function  
**See**: filter  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ob] | <code>Object</code> | Object Input object properties are sent to callbackFn |
| [callbackFn] | [<code>filterCallback</code>](#filterCallback) | Callback to perform operations |

**Example**  
```js
> function() callbackFn(key,value,index) { return value%2 === 0 || key.includes('filter') || index === 5}> ot.filter({one:1,tow:2,three:3,four:4},callbackFn){tow:2,four:4}> ot.filter({map:12,reduce:55,filter:1,etch:11},callbackFn){map:12,filter:1}> ot.filter({one:1,three:3,five:5,seven:7,nine:9,eleven:11},callbackFn){eleven:11}
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
function callbackFn(key,value,{skip}){ if(typeof value === number && value % 2 === 0){ return skip; } else return {key:key,value:value+'odd'}}> ot.map({one:1,tow:2,three:3,four:4},callbackFn){one:"1odd",three:"3odd"}> function callbackFn(key,value){   if(typeof value === "string")       {return {key:value,value:key};}   else return {key:key,value:value};}> ot.map({one:1,tow:2,three:"example",four:"javascript"){one:1,tow:2,example:"three",javascript:"four"}
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
>function callbackFn(key,value,{skip}){ if(typeof value === "number" && value%2 !== 0) { return skip; } else if(type value === "string") return key+'-'+value; return value}>ot.mapToArray({one:1,tow:2,three:3},callbackFn)[2]>ot.mapToArray({one:1,tow:2,three:3,four:'example',five:5,six:'hello'},callbackFn)[2,"four-example",six:'six-hello']
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
>let add = 0;>const newOb = {}function callbackFn(key,value,index){ if(type of value === "number"){ add += value } new Ob[key] = {value:value,index:index}}> ot.etch({one:9,tow:2,three:"javascript",four:"example"},callbackFn)> console.log(add);11>console.log(newOb);{three:{value:"javascript",index:2},four:{value:"example",index:3}
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
>ot.len({one:1,tow:2})2> ot.len(one:1,tow:2,three:3,four:{one:1})4
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
>ot.keys({one:1,tow:2,three:3})["one","tow","three"]
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
// If the word (of) is inside the key, the value true returns>function(key){ return key.includes('of')}//If the type (value) is a number and more than 10, it must return true>function(key,value){ return typeof value === "number" && value > 10}//If the index is divisible by 10, it returns true>function(key,value,index){return index % 10 !== 0}
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
//If the value of the value can be divided into two parts, the value of the property will be deleted.//In bitumen, the word odd will be added to the end.>function callbackFn(key,value,{skip}){ if(typeof value === number && value % 2 === 0){ return skip; } else return {key:key,value:value+'odd'}}
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
//If the value value is an odd number, it is passed over the property, and if the type is a string, it must be added together with the key and returned, otherwise the value value is returned.>function callbackFn(key,value,{skip}){ if(typeof value === "number" && value%2 !== 0) { return skip; } else if(type value === "string") return key+value; return value}
```
<a name="etchCallback"></a>

## etchCallback ⇒ <code>void</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | keyof ob |
| [value] | <code>\*</code> | valueOf ob |
| [index] | <code>number</code> | indexOf ob |

**Example**  
```js
>let add = 0;>const newOb = {}>function callbackFn(key,value,index){ if(type of value === "number"){ add += value } new Ob[key] = {value:value,index:index}}
```
