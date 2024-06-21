A key skill: understanding `state` and `setState()`
- Key understanding
	- How and when do components re-render

Why seeing **old** state
- `setState()` **called** before call to `console.log()`
- But displays **old** state

Key: `react` batches **all** state updates
- Consequently, a call to `setState()` is an **asynchronous** call
	- Relative to `console.log()`

How to synchronize console output?
- Call `setState()` with
	- A function returning the state updates to be merged into the current ("old") state
	- A callback to log output
- Solution: call `setState()` with two **callbacks**
	- The first callback calls `setState()`
	- The second callback, guaranteed to occur **after** the first callback finishes, calls `console.log()`
	- Note that `setState()` takes two arguments
		- `state` - the current state before any changes
		- `props` - The properties passed to this function(?)