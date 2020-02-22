function isOdd(number) {

	if (Math.abs(number) % 2 == 0) {
		return false;
	}
	else {
			return true;
		}

}

console.log(isOdd(2));
console.log(isOdd(5));