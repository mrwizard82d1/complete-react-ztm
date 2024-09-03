Look at "Elements" tab in `devtools`
- Root at element with class of `root`

Virtual DOM
- Changing the actual DOM is **very expensive**
- Consequently, React creates a **virtual DOM**
	- Represented in JavaScript

Consider typing "lea" in the search box
- React copies the original virtual DOM
- Into a **copy** of the virtual DOM
	- That is, create two in-memory trees
- These two trees
	- Allow React to optimize rendering of the DOM

Steps
	- Copy virtual DOM Snapshot
	- Make changes requested by React to virtual DOM Snapshot
	- Compare snapshot to virtual DOM
		- Minimize changes needed to change
			- Virtual DOM snapshot
			- Virtual DOM copy
	- Move all changes to actual DOM