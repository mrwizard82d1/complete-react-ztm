The purpose of `Promises` was to eliminate "callback hell"
	- See example `before_promises.js`
	- Introduced in ES6
	```
	const myPromise = new Promise((resolve, reject)) => {
	// ...
	}
```

- A `Promise` will eventually be either
	- Resolved or
	- Rejected
	- In either state, the appropriate callback is invoked
```

- A main benefit of supplying `resolve` and `reject`
	- Separate success processing (`resolve`)
	- From failure processing (`reject`)

- Additional benefit of `Promise`
	- Can chain `then` calls **further**

- A call to `fetch` returns a `Promise`!
	- Allows chained calls to `then` and `catch`