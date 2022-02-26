const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 4]);

console.log(alphaNumeric);


const multiArray = letters.concat([[[1, 32, 4, 5]]]);
console.log(multiArray)
/* [ 'a', 'b', 'c', [ [ 1, 32, 4, 5 ] ] ] */
