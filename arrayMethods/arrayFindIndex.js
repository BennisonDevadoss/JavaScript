/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */

const array = [1, 2, 3, 4, 5, 6];

const isLargeNumber = (element) => element > 5;
console.log(array.findIndex(isLargeNumber));

console.log(array.indexOf(6)); // this is index of method in this way we can't find the index one by one 
// if you want to use indexof method, to find the largest number in an array now the indexof method need the for loop to find the largest number
// to ignore this we can use findIndexOf method().


// If the condition is false the findIndexOf method returns the -1 value. 