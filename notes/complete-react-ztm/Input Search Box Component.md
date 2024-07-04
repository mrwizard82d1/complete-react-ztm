
- To reiterate, the order of React component methods is:
	- Constructor
	- `render()` (typically with inital (sometimes empty) state)
	- `componentDidMount()`
	- `render()`
- Our goal
	- We have different H1s that model monsters
	- Work on functionality **before** styling
	- Add in search functionality
- Behavior
	- Type text in search bar
		- Filters in "real time"
- What do we need?
	- Input field
	- Enter text and filter out montsters
- Use `input` inside field
- React provides equivalent for all HTML tags
	- Some names changed to avoid conflicts
		- e.g., `class` => `className`
- Handling `onChanged` event
	- Log event
		- Not `InputEvent
		- But `SyntheticEvent` containing a
			- **Native** `InputEvent`