Review
	- A Functional Component is **completely re-run** whenever
		- `props` changes
		- State changes
			- The value initialized by `useState()`
			- And manipulated by `setXyz()` 
				- The second part of the array returned by `useState()`
- Under the hood, React
	- Monitors the state value
	- If the state value is changed,
		- React will re-render the component by 
			- Re-running the **entire** function
- In a bit more detail,
	- React **does not** call the function again when `setSearchState()` is called
	- React **does** call the function again when it notices a difference between the 
		- Previous "state"
		- And the **current "state"**
- Remember, we only change the state
	- By a call to `setSearchState()` 
	- But if this call does not actually trigger a re-render
	- The component is rendered; that is, the function is run from top-to-bottom
		- When React determines that the **external** state value (a mysterious "variable") has actually changed
- 