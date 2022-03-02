/* Flating array holes */

/* REFERENCE 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/

/* Flating and array holes
the flat method removes empty slots in arrays */
const arr = [1, 2, 3, , , , , , 5];
console.log(arr.length);
arr.Flat();
// [1, 2, 3, 5]


