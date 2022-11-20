const firstSet = [1, 2, [3, [6]]];
const secondSet = [1, 2, [3, [6]]];

const isEqual = (firstArray, secondArray) => JSON.stringify(firstArray) === JSON.stringify(secondArray);