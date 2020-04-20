//Inputs: two strings as arguments in a function
//Outputs the strings combined in short/long/short concatenated

//determine length of both strings and assign them to shorter and longer variables
//concatenate those strings in S/L/S order


function shortLongShort (stringOne, stringTwo){
	if (stringOne.length < stringTwo.length){
		console.log(`${stringOne}${stringTwo}${stringOne}`);
	}
	else {
		console.log(`${stringTwo}${stringOne}${stringTwo}`);
	}	
}

shortLongShort('abc', "defgh");