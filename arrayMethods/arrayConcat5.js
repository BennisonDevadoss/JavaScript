const array = [12, 3, 4, [5, 6, 878]];
const array1 = [1, 2, 3, 4, 5];

const nestedArray = array.concat(array1);
console.log(nestedArray);

/* [ 12, 3, 4, [ 5, 6, 878 ], 1, 2, 3, 4, 5 ] */
array[3].push(12, 14, 15);

console.log(nestedArray);
// now the nested array value will be modified. 
/* [ 12, 3, 4, [ 5, 6, 878, 12, 14, 15 ], 1, 2, 3, 4, 5 ] */


/* If there is an nested array, and this array is concatinated with another new array
and now one array will be concatinated. if you change the nested array, now the conctinated newarray will be modified. 
*/

/* REFERENCE */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat */