- Review
	- Learned about
		- Class components
		- Class component constructor
		- render
- Order of calls
	1. Constructor (only initializes state)
	2. Render() - Determines what to show
		1. Mounts component
		2. Renders component content
	3. componentDidMount()
		- Calls `setState()` to change component state
		- Calling `setState()` results in a re-render
- Once initial rendering and mounting completes
	- React continues to call `render()` whenever the application state **changes**
	- 