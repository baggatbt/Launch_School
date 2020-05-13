function isDivisible(number,divisor){
	return number % divisor === 0
}

function multisum(maxValue){
	let sum = 0;

	for ( let number = 1; number <= maxValue; number++){
		if (isDivisible(number,3) || isDivisible(number,5)){

			sum += number;
		}
		
		
	}
	return sum;
}