function DFS(){
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
function reverseOrder(){
	var n = [];
	nodes.forEach(function(node){n.push(node);});
	
	/// felbuborekolom a kis bejarasi szamu csucsokat
	for(var i=0;i<n.length;i++){
		for(var j=i;j<n.length-1;j++){
			if(n[j].bsz < n[j+1].bsz){
				tmp = n[j+1];
				n[j+1] = n[j];
				n[j] = tmp;
			}
		}
	}
	return n;
}

