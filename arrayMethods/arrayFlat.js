/* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/
/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */

const array = [0, 1, 2, [3, 4]];

console.log(array.flat());  /* [0, 1, 2, 3, 4] */

const array2 = [0, 1, 2, 3, [[4, 5]]];
console.log(array2.flat(2)); /* Inside the flat the the parameter is called depth. */


/* SYNTAX
flat()
flat(depth)
Copy to Clipboard
*/

/* What is depth */
/* The depth level specifying how deep a nested array structure should be flattened. Defaults to 1. */

