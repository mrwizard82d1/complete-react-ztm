- Four key concepts
	1. "Don't touch the DOM, I'll do it"

- Previous solutions required developers to "touch the DOM"
	- Used DOM API to affect each change
	- Imperative programming
		- That is, developer "instructs" DOM "what to do"
			- Must handle **all** the details
	- Problem
		- Difficult to see relationship between all changes

- React chose a **declarative** approach
	- Changing the DOM is expensive
	- React takes care of operation to optimize over all changes
		- Compose a virtual DOM **offline**
		- React then 
			- **Minimizes** changes to make real DOM "equal to" virtual DOM
		- 