var cash2 = new Array();

function createMatrix(arr, first_time) {
	var str="<table class='table table-bordered table-hover'>";
	str+="<tr class='first'><td class='first'> &nbsp; </td>";
	for(var i=0;i<arr.length;i++) { 
		str+="<td class='first'>" + i + "</td>";
	}
	str+="</tr>";

	for(var i=0;i<arr.length;i++) {
		for(var j=0;j<arr[i].length;j++) {
			if(j<i) arr[i][j] = arr[j][i];
        	}
	}

	for(var i=0;i<arr.length;i++) {
		str+="<tr><td class='first'>" + i + "</td>";
		for(var j=0;j<arr[i].length;j++) {
			if(first_time == 0 && cash2 !=  undefined && cash2[0] != undefined && cash2[0].length == arr[0].length) {
				if(cash2[i][j] != arr[i][j]) 
					str += "<td style='color : red;'>" + arr[i][j] + "</td>"; 
				else        		
					str += "<td>" + arr[i][j] + "</td>";
			}
			else        		
				str += "<td>" + arr[i][j] + "</td>";
	    	}
		str+="</tr>";
	}
	
	for(var i=0;i<arr.length;i++) {
		cash2[i] = new Array();
		for(var j=0;j<arr[i].length;j++) {
			cash2[i][j] = arr[i][j];
        	}
	}
	
	return str+"</table>";
}
