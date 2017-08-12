# xml-to-json
A parser to convert XML to JSON built using underscore.js and DOMParser browser API.

### Installation
* fork the repo 
* open file index.html in browser.
* see your JSON in console.

### How it works
1. Loads the XML from a smaple file, which is hardcoded string for now, can use other methods to load XML as needed.
2. Uses the DOMParser to convert string into XML object with can be processed upon.
3. parseElement is a function which parses one element at a time. Its used in recursion to parse the entire XML object.
	- Checks if the element is a text node, returns value iff so
	- Checks for childrens and attributes, iff no return the textContent of node
	- If element has no children but some textContent, adds textContent to data.text
	- If element has attributes, adds them to data.attributes
	- for each children, parse the children using "parseElement"
	- while doing so, convert all the '-'(hyphen) to '_'(underscore)

Thank you!
