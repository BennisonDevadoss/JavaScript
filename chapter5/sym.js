let sym = "unique";

let bol = Symbol("distinct");
console.log(bol);

let one = Symbol("only-one");

let obj = {
    property: "regular property",
    [sym]: 1,
    [bol]: 2
};

obj[one] = 3;

obj.benn = "benn";
obj.property = "adbfka";
console.log(bol);

console.log(obj); 