console.log([1, 2, 3, 4, 5].copyWithin(-2));
/* [ 1, 2, 3, 1, 2 ] */

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
/* [ 4, 5, 3, 4, 5 ] */  // the changes will be continued.

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
/* [ 4, 2, 3, 4, 5 ] */  // the changes will not be continued because the copyWithin function have end. 
/* Only if the copyWithin method don't have end statement, then only the changes will be continued */

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
/* [ 1, 2, 3, 3, 4 ] */

console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 3));

// ES2015
var arr = new Int32Array([1, 2, 3, 4, 5]);
console.log(arr);
/* Int32Array [ 1, 2, 3, 4, 5 ] */

console.log(arr.copyWithin(0, 2)); 
