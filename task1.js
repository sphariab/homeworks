const text = 'What is the average airspeed velocity of an unladen swallow';

const getTheLongestWord = word => word && word.split(' ').reduce(
    (accumulator, currentValue) => accumulator.length > currentValue.length ? accumulator : currentValue);