// let sym = Symbol.for("age");
// let bol = Symbol.for("age");

// obj[sym] = 20;
// obj[bol] = 25;

// console.log(obj[sym]);   // 25 
// console.log(obj[sym] === obj[bol]); 

let sym = Symbol('sym');
console.log(Symbol.for('sym') === Symbol.for('sym')); 