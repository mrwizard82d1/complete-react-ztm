Key warning
- "Each element must have a unique key"
- Typical React behavior

React key values **must be unique**
- Many elements in "real (computer) life" have a unique key
- But many "natural keys" are **not** unique

React will update items from a collection
- Based on the **key value**
- Not on the item itself
- For example, Identical names

Purpose of key
- React uses unique value to only perform **minimal** updates

Where to add
- At "highest" level of element
- For example
```js
	<div key={monsters.id}>
		<h1>{monsters.name}</h1>
	</div>
```

React keeps track of key internally
- Consequently, `key` property **not** stored on page
	- But only, I believe, in the virtual DOM
