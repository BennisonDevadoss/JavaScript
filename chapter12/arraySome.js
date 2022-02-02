let number = [0, 10, 2, 3, 4, 5, 6, 7];


// function fun(index) {

//     index < 10;

// }

let fun = index => index < 10;


let some = number.some(fun);
console.log(some);


let every = number.every(fun);
console.log(every); 