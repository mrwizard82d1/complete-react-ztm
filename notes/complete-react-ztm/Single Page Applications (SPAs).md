- Dynamic information is typically **not** hard-coded
	- Our `monsters` **is** hard-coded
- Typical applications will
	- Not hard-code data
	- But retrieve it from some data source
		- For example, a database

- React typically builds SPAs

- The world **before** SPAs
	- To display page, browser
		- Requests a **specific** page
			- For example, the "home" page
	- To display **another page**, browser
		- Requests a **second, different** page

* In an SPA,
	* Request for **first page**
		* Returns a complete page
			* HTML
			* CSS
			* JavaScript
		* Browser then displays this page
	* Request for **second page**
		* **Does not** request a complete page
		* Instead, requests only additional data
			* Customized optimizations may change this assertion

- Our `monsters-rolodex` application must now:
	- Get data for our monsters from a **data store**
	- Use that data to display the appropriate page

