let bill = parseInt(prompt("What is the total amount of the bill in USD?"));
let tipRate = prompt("What is the desired tip percentage?") / 100;

let tip = (bill * tipRate);
let total = (bill + tip);

console.log( total);

console.log("The tip is $" + tip);
console.log("The total is $" + total);