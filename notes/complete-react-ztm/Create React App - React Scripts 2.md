Goal
- Deep dive into three remaining scripts

`build`
- Goal: to optimize our application
	- Invoke by
		- `yarn build`
		- `npm build`
	- Generates an optimized build
		- Single file containing all the code for our application

`test`
- Mechanism to ensure that our code works
- For example,
	- `App.test.js`
		- Ensures that `App.js` works as expected

`eject`
- Requires better understanding of environment
	- Not all browsers understand the same version of JavaScript
- Two helpers
	- `babel`
		- Transliterates code into version understandable to **all** browsers
	- `webpack`
		- Inside `build` folder
			- Separates JavaScript into "chunks"
			- Allows different pages to only access necessary "chunks" of **all** available JavaScript files
- Supports further optimization of project
- Should only be invoked in very specific / extreme circumstances

Other files
- `setUpTest.js`
	- Used to support testing
- `logoXYZ.png`
	- Used by "progressive web apps"
- `robots.txt`
	- Helps "web crawlers" crawl generated web page

