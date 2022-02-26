const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
const num3 = [9, 10, 11, 12];

const numbers = num1.concat(num2, num3);
console.log(numbers);

/* The array concatinate is started with num1*/

num2.push(13, 14, 15);
console.log(numbers);
console.log(num2); 