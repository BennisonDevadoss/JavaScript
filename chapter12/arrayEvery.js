let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let condition = value =>  value < 10 ;

let somes = number.some(condition);

let every1= number.every(condition);
console.log(somes);
console.log(every1);