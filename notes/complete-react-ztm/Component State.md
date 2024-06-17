Current state of `App` component
- Nothing is **dynamic**
	- Atypical for react applications

Let's change `App` to use less hard-coding
- Write class constructor
	- Initialize parent state
	- Initialize class state (`this.state = { name: 'Larry' }`)
- Change `render` to uses `this.state.name`

Because we've initialized state (`this.state`) in the ctor
- React will "automagically" invoke `render()` 
	- When members of `this.state` change