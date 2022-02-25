let a = 0.1;
let b = 0.2;
let c = a + b;    // But this method works well..

if (c === a + b) {
    console.log("Good");
    console.log(c);  // 0.3000000000000000004   // That is why the the below condition gives the false message. 
    console.log(a);  // 0.1
    console.log(b);  // 0.2
}
else {
    console.log("bad");
}

//...........................

console.log(a + b === 0.3);  // But why this gives an false. 