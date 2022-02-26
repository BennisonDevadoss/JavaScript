/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
*/
let index = [];

let alpha = ["a", "b", "c", "d", "e", "a", "a"];

let element = "a";

let found = alpha.lastIndexOf(element);

while (found != -1) {
    index.push(found);
    found = (found > 0 ? alpha.lastIndexOf(element, found - 1) : -1);
}

console.log(index);
/* [ 6, 5, 0 ] */