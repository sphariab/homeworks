const text = 'What is the average airspeed velocity of an unladen swallow';

const getTheLongestWord = word => {
	if (typeof word !== 'string') return;

	return word && word.split(' ').reduce(
		(accumulator, currentValue) => accumulator.length > currentValue.length ? accumulator : currentValue);
}

console.log(getTheLongestWord(text))