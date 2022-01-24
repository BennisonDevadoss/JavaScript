let sym = Symbol("unique");
let bol = Symbol("distinict");
let one = Symbol("only-one");

let obj = { property: "regular property", [sym]: 1, [bol]: 2 };
obj[one] = 3;
console.log(obj);

//for in loop
for (let prop in obj)
    console.log(prop + ": " + obj[prop]);

//The above for in loop displays the obj is regular property

console.log(Object.entries(obj));
//["property":"regular property"]


//json formate
console.log(JSON.stringify(obj));
//{"property":"regular property"}

console.log(Object.getOwnPropertySymbols(obj)); 
