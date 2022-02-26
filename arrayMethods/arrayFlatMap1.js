/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
*/

/* map() and flatMap() */

let array1 = [1, 2, 3, 4];

array1.map(x => [x * 2]);
/* // [[2], [4], [6], [8]] */

array1.flatMap(x => [x * 2]);
/* // [2, 4, 6, 8] */

array1.flatMap(x => [[x * 2]])
/* // [[2], [4], [6], [8]] */