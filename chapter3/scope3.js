console.log(this === window);

var c = "c";
let d = "d";

console.log(c);
console.log(this.c);
console.log(window.c);

console.log(d);
console.log(this.d);
console.log(window.d);

console.log(a); 
var a = 5; 
console.log(a);