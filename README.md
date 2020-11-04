<a name="union"></a>

## union(...object) ⇒ <code>object</code>
Merge a list of objects, left to right, into one

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...object | <code>object</code> | a sequence of object instances to be extended |

**Example**  
```js
> ot.union({ one: 1, three: 3 }, { one: 'one', two: 2 }, { four: 4 })
{ one: 'one',
  three: 3,
  two: 2,
  four: 4 }
```
