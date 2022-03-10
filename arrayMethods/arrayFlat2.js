/* REFERENCE link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/

const array = [1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]];
let newarr = array.flat(Infinity);
console.log(newarr); 