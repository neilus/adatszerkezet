/// futtatja a BFS algoritmus következő iterációját
function runBFS(currentLevel, lastLevel) {
	var lpontok;
	document.getElementById("lastLevel").innerHTML = lastLevel.toString();
	document.getElementById("nextLevel").innerHTML = currentLevel.toString();

	lpontok = d3.selectAll('circle')[0];
	/*
	lastLevel.forEach(function (s) {
		lpontok[s].style.fill = "#8f8f8f";
		console.log("DEBUG: " + s);
	})/**/
	for (i=0; i<lastLevel.length; i++){
		lpontok[ lastLevel[i] ].style.fill = "#8f8f8f";
		nodes [lastLevel[i] ].visited = true;

	}
	console.log("LAST Level: " + lastLevel.toString());
	console.log("CURRENT Level: " + currentLevel.toString());
	//circle.data(0).attr('class','WAT');
	var pontok;
	nextLevel = Array();
	for (i = 0; i < links.length; i++) {
		for (j = 0; j < currentLevel.length; j++) {
			if (links[i].source.id == currentLevel[j]) {
				if(links[i].target.visited===false)
					nextLevel.push(links[i].target.id);
			}
			pontok = d3.selectAll('circle')[0];
			currentLevel.forEach(function (s) {

				pontok[s].style.fill = "#45f01a";
				//console.log("DEBUG: " + s);
			})
		}
	}
	lLevel = currentLevel;

}

/// felparaméterezi a BFS következő iterációját
function stepBFS(){
	console.log(typeof nextLevel);
  	if(typeof nextLevel=="undefined"){

  		if(selected_node && selected_node.visited === false){
  			runBFS([selected_node.id],[]);
  		}
  	}
	else
	{
		if(nextLevel.length > 0){
			console.log(nextLevel, lLevel);
			runBFS(nextLevel,lLevel);
		}
		else if(nextLevel.length === 0 && selected_node.visited === true){
			d3.selectAll('circle')[0][selected_node.id].style.fill = "yellow";
			pontok = d3.selectAll('circle')[0];
			lLevel.forEach(function (s) {
				pontok[s].style.fill = "blue";

			})

		}
  	}
  	updateVisited();

}