/* REFERENCE */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin */
const array1 = ["a", "b", "c", "d", "e"];

// The same array will be modified. 
console.log(array1.copyWithin(0, 3, 4));
/*[ 'd', 'b', 'c', 'd', 'e' ] */


console.log(array1.copyWithin(1, 3));
/* [ 'd', 'd', 'e', 'd', 'e' ] */

/* copyWithin(target)
copyWithin(target, start)
copyWithin(target,start, end) */

/* if there is no end the changes will be continued untill last index of array.*/
/* The end is length of that array.*/
