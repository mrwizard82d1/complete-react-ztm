In React 18 Strict Mode
- The React team has started doing a **double invocation** for certain things in the lifestyle of a component
	- This behavior is the **cause**
		- Of "double rendering"

Suppressing `console.log`
- In React 17, `console.log` was automatically **suppressed**
- React 18 **stops** suppressing calls to `console.log`