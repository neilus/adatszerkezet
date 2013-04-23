beszam = 0;

function linksFrom(node){
	var myLinks = new Array();
	links.forEach(function(link){
		if(link.source.id === node.id){
			myLinks.push(link);
		}
	})
	return myLinks;
}
function linksTo(node){
	var myLinks = new Array();
	links.forEach(function(link){
		if(link.target.id === node.id){
			myLinks.push(link);
		}
	})
	return myLinks;
}

function runDFS(startNode){
	var startLinks = linksFrom(startNode);
	var component = new Array(startNode);
	startNode.visited = true;
	startLinks.forEach(function(link){
		if(link.target.visited === false){
			runDFS(link.target).forEach(function(v){
				component.push(v);
			});
		}
	});
	startNode.bsz = beszam++;
	return component;
}

function runReverseDFS(startNode){
	var startLinks = linksTo(startNode);
	startLinks.forEach(function(link){
		if(link.source.visited === false){
			runReverseDFS(link.source);

		}
	})
}



