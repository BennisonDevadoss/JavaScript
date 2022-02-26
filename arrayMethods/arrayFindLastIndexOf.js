/* The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. */
/* REFERENCE
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf */

const names = ["Bennison Devadoss", "Gibson Joseph", "Edison Devadoss", "GnanaBillian", "Bennison Devadoss"];

console.log(names.lastIndexOf("Bennison Devadoss"));  /* 4 */

console.log(names.lastIndexOf("GnanaBillian")); /* 3 */


/* if the array.lastindexof can't find the index, it returns the value -1 */

/* SYNTAX
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
 */