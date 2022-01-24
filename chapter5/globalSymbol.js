let sym = Symbol.for("age");
let bol = Symbol.for("age");

obj[sym] = 20;
obj[bol] = 25;

console.log(obj[sym]);   // 25 