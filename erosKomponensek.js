function erosKomponensek(){
	var i = 0; /// i. komponens...
	pontok = d3.selectAll('circle')[0];
	nodes.forEach(function(node){
		if(node.visited === false){
			runDFS(node).forEach(function(v){
				pontok[v.id].style.fill = d3.rgb(colors(i*10));
			});
		}
		i++;
	});
}