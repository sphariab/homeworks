const numbers = ['Name1', 'Name2', 'Name1', 'Name3', 'orange', 'blue', 'orange'];

const removeDuplicates = values => values && values.reduce(
    (acc, currentValue) => acc.includes(currentValue) ? acc : [...acc, currentValue], []);