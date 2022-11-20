const numbers = [1, 2, 3, 4, 5];

const getSumOfSquares = values => values && Array.isArray(values) && values.reduce(
    (acc, currentValue) => {
        if (typeof currentValue !== 'number') return;

        return acc + Math.pow(currentValue, 2)
    });