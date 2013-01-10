function generate() {
	this.complete = function(n) {
		var verts = new Array();
		var graph = new Graph()
		
		for(var i=0;i < n;i++) verts[i] = graph.newNode();
		
		for(var i=0;i < n;i++)
			for(var j=i;j < n;j++)
				if(i != j)
					graph.newEdge(verts[i],verts[j],{color: 'blue', directional:false});
		return graph;
	};

	this.cn  = function(n)   {
		var verts = new Array();
		var graph = new Graph()
		
		for(var i=0;i < n;i++) verts[i] = graph.newNode();
		for(var i=0;i < n-1;i++) graph.newEdge(verts[i],verts[i+1],{color: 'blue', directional:false});
		graph.newEdge(verts[n-1],verts[0]);
		return graph;
	};

	this.random = function(n,p) {
		if(p == "") {alert('Please enter a value for the probability p.');return;}
		var verts = new Array();
		var graph = new Graph()
		
		for(var i=0;i < n;i++) verts[i] = graph.newNode();
		
		for(var i=0;i < n;i++) 
		for(var j=i+1;j < n;j++) 
		if(Math.random() < p)
			graph.newEdge(verts[i],verts[j],{color: 'blue', directional:false});		
		
		return graph;
	};

};

