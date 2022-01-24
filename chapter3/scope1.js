// var a = "globel a";
let b = "global b";

function x() {

    // a = 10;
    console.log("x(): global b = " + b);
    console.log("x(): global a = " + a);
    var a = 1;

    // console.log(a);
}
x();
var a = "globel a";

console.log(a);



// console.log(a); 
// var a = 5;

//print(9);

// console.log(print);
// let print = 24;
// console.log(print);