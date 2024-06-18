`setState()` performs a **shallow merge**
- Looks for keys in new object that **also** exist in original object
- Better practice with shallow merge
	- Ensure that calls to `setState()`
		- Refer to the **same type** of value as the **original** value
- Best practice
	- Pass a **function** to `setState()`
	- Recommended by React itself