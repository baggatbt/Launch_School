//User is asked to enter integer greater than 0
//User is asked if they want to determine the sum or product of all the numbers between 1 and the entered number including the entered number

//Must take input for 1 integer > 0
//Output the sum of all numbers between the two inclusive in a string

//for loop that starts at 1 and stops after adding the target number
//depending on user choice, product or sum, perform operation on all iterated numbers

const readlineSync = require('readline-sync');
console.log("Please enter an integer greater than 0:");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let operationSelection = readlineSync.prompt();

let sum = 0;
let product = 1;

if (operationSelection === "s"){
	for (let i = 1; i <= number; i++){
		sum+= i;
	}
	console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
}

if (operationSelection === "p"){
	for (let i = 1; i <= number; i++){
		product *=i;
	}
	console.log(`The product of the integers between 1 and ${number} is ${product}`);
}

