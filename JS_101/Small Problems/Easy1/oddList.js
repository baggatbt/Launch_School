//function accepts array, returns only odd numbered elements, [1] [3] [5] so on

function oddities(array){
	for(let i = 1; i <= array.length; i++){
		array.splice(i,1);
	}
	return array;
}
	
	
