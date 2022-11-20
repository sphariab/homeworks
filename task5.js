const array = [1, 2, 3, [3, [64], [12]]];

const toFlat = values  => values && Array.isArray(values) && values.flat(Infinity);