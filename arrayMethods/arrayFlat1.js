/* Alternative to reduce and concat */
const array = [1, 2, [3, 4]];

// array.flat();
/* is equivalent to */
let newArray = array.reduce((acc, val) => acc.concat(val), []);
console.log(newArray);

// const flattened = array => [].concat(...array);
// let newArray1 = flattened();
// console.log(newArray1);
