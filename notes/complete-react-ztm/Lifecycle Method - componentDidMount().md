- Will change code to get data from
	- https://jsonplaceholder.typicode.com/users

- We want to **update** our `monsters` array as the user navigates
	- This retrieval is **not** a key concern of our application
	- For example, if an error occurs
		- We should display an "empty" list of monsters

- Initializing our `monsters` state member to an empty array makes sense

- But **how** do we update this state?
	- Using a react **lifecycle** method
	- We want to update this state **whenever**
		- Our component is **mounted**

- We focus on four key lifecycle methods
	- `componentDidMount`
	- `componentDidUpdate`
	- `componentWillUnmount`

- Our focus is on `componentDidMount`
	- Only occurs when first added to the DOM
	- If added back later, one can argue that it is a "different component" or a "different instance"
	- When a component is **first** added to the DOM
		- Then we want to request the **data** needed by that component
		- That is, we must make an API request