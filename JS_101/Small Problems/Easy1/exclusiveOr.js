//function takes two arguments
//returns true if ONE of the two is true, else false

function xor(argument1, argument2){
	if (argument1 === true && argument2 === false){
		return true;
	}
	else if( argument1 === false && argument2 === true){
		return true;
	}
	else{
		return false;
	}
}

console.log(xor(5,0));