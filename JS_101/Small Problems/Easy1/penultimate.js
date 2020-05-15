function penultimate(words) {
	let wordsArray = words.split(" ");
	return wordsArray[wordsArray.length - 2];
}

penultimate("last word");