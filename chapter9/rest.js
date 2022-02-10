let f = (...items) => items.map(item => console.log(item));

let print = item => console.log(item);
let f = (...items) => items.map(print);

f(1, 2, 3, 4, 5); 