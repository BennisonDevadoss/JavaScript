/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
*/


// flatMap(function(currentValue) { /* ... */ })
// flatMap(function(currentValue, index) { /* ... */ })
// flatMap(function(currentValue, index, array){ /* ... */ })
// flatMap(function(currentValue, index, array) { /* ... */ }, thisArg)

/* Callback function */
/* 
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
*/

let arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
console.log(arr);
/* // [1, 2, 2, 4, 3, 6, 4, 8] */