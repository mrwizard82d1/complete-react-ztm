State and components combine to **specify** the UI to be built
	- The `react` libraries act like a function
		- That accepts state and components
		- And builds the virtual DOM
	- React takes responsibility to 
		- Move virtual DOM to actual DOM
	- Whenever **state** changes, React
		- Updates the virtual DOM
		- And changes the DOM to "reflect" the virtual DOM

Application built from virtual DOM
When state changes, 
	- Individual DOM components **react** to that change
	- By updating their (virtual) appearance

Cardinal rule: "Data never moves up (the component tree)"
	- All UI changes
		- Change the state
		- Which changes the virtual DOM
		- Which changes the real DOM