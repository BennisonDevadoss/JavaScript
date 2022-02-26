/* The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. */

const arr = [1, 2, 3, 4, 5];

console.log(arr.fill(0, 2, 4));
/* [ 1, 2, 0, 0, 5 ] */
/* Fill the zero from second index to fourth index */

console.log(arr.fill(5, 1));
/* [ 1, 5, 5, 5, 5 ] */

console.log(arr.fill(6));
/* [ 6, 6, 6, 6, 6 ] */

/* Syntax 
fill(value)
fill(value, start)
fill(value, start, end)*/