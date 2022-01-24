let x = { p: 100 };
let y = x;    // y is a reference to x
x.p = 2;
console.log(y.p);
y.p = 500;
console.log(x.p);