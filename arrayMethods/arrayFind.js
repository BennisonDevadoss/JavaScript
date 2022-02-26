/* The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. */
/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find */
const array = [12, 12, 14, 14, 12, 15, 26, 25];

const found = array.find(element => {
    return element > 10;
})
/* 12 */
console.log(found);
/*  Once the condition is true, the loop will be stoped
but in the filter method,  the loop will be gone to last index
That is why the filter checks the all the index values */

/* find(function(element, index, array) { /* ... */
