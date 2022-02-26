/* I have an doupt, in this program */
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
console.log(numbers);
/* [[1], 2, [3]] */

num1[0].push(4);

console.log(numbers);

/* After the concating once we change the array1 one or array2 
the changes will be changed in the concatinated array.*/


/* I think this is an call by reference.*/