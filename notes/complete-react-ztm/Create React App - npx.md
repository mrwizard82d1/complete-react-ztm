A tool you can run from the command line to create an "empty", single page React App

Command line: `npx create-react-app my-app`

Comparison: `npm` and `npx`
- `npm` manage "packages
	- A collection of libraries that work together
	- Requires one to
		- Download latest version of `npm` packages
	- Command `npm install create-react-app`
		- Only install a **single version locally**
	- In contrast, `npm install --global create-react-app`
		- Installs `create-react-app` **globally**
			- That is, a single version of `create-react-app` is available anywhere on our workstation
- `npx` installs locally by default
	- For example, `npx cowsay hello`
		- Downloads `cowsay`
		- Executes package immediately
		- Deletes package when finished
		- **Does not** install package in current folder
	- Ensures that 
		- Packages **do not** clog disk when used for "one-time" use
		- For example, `create-react-app` is **not** retained on-disk
			- When run using `npx`



