- Functional components are an alternative to class components
	- However, the general direction of React seems to be favoring functional components over class components
	- In the wild, one will probably see **both**
- Differences
	- No constructor
		- Just a JavaScript / TypeScript **function**
	- No component methods
		- `componentDidMount`
		- `componentUnmount`
	- No `render`
- Functional components
	- Take `props` (or no arguments)
	- Simply run from top to bottom
	- No **lifecycle methods**
	- Whatever is returned is what is rendered
	- Uses side-effects to address aspects like state
- Key ideas
	- Functions
	- Pure functions
	- Impure functions
	- Side-effects
	- 