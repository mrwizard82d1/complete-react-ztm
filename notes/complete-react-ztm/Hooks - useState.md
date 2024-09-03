- The `useState` hook is the simplest state hook
	- Provides the ability to
		- "Encapsulate" local state in a functional component
- Usage of `useState`
	- `[stateA, setStateA] = useState()`
		- Returns the current value of `stateA`
			- Which is **not** passed to the function
			- But is stored **outside** the function
				- That is, a "global" value whose access controlled by React
		- A setter function to set the state to a **new** value
- Each call to `useState` manages **exactly one** value
- 