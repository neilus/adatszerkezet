all: js/d3

js:
	mkdir js
js/d3: js
	cd js && git clone git://github.com/mbostock/d3.git && cd d3 && npm install && npm test
