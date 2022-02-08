// simple arrow function, an arrow function is an anonymous function, so this function must be initialized to other varible. 
//then only this function can be called. 

let fun = a => console.log(a);

// the above function is an arrow function, and  a is an parameter to this function.

fun(2);


// 1 <---
let fun1 = b => "return";
let c = fun1(2);
console.log(c);


// 2 <---
let fun2 = c => { return "return"; }
let d = fun2(3);
console.log(d); 
