Suppose we want to change the greeting name
- Our first attempt
	- "Change name" button invokes a **callback**
		- That changes the text of `this.state.name`
	- **FAILS**

React and state
- React maintains a record of the current state of every React component
- When that state changes, React invokes `this.render()`

How does React **know** that `this.state` is changed?
- A variable declaration, `obj1 = { name: 'Larry' }`
	- Performs **two actions**
		- Creates a **new, anonymous object**; that is, `{ name: Larry }`
		- Creates a variable named `obj1` that **refers** to the newly created object