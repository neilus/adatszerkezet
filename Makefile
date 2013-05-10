all: js/d3

clean:
	cd js && make clean
deep-clean:
	cd js && make deep-clean

js:
	mkdir js
js/d3: js
	cd js && make d3

