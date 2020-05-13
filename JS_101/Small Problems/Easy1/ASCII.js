

//Enter a string and use String.prototype.charCodeAt() to detemine ASCII value of each character
//Loop through each character in the string, take the value and add it to a sum variable
//Can iterate through string with charAt


function asciiValue(string) {
	let sum = 0;
	for (let i = 0; i < string.length; i++){

		sum+=string.charCodeAt(i);
	}
	return sum;
}