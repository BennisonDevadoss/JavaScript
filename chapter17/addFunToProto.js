// Add function prototype to the constructor function
var name = "Bennison Devadoss";
var age = 34;
var mark = 983275;

function Detail(name, age, mark) {
    this.name = name
    this.age = age;
    this.mark = mark;
    this.method = () => { console.log(this.name, this.age, this.mark); }
}

let person1 = new Detail("Devadoss");
let person2 = new Detail("billy", 23, 3212);
let person3 = new Detail("karthik", 23, 32);


Detail.prototype.fun = function () { console.log(this.name, this.age, this.mark); }
console.log(Detail.__proto__);
console.log(person2);
person2.method();
// person2();


person1.fun();
person2.fun();
person3.fun();



// Add method to the object person1
person1.method1 = function () {
    console.log(this.name)            // This is an normal function to the object person1. 
}


person1.method2 = () => {
    console.log(this);           // Used arrow function to create a method to the object person1. 
    console.log(this.name);
}


person1.method1();
person1.method2();    // it will give the output "Bennison Devadoss" on chrome console.


module.exports = { person1, person2 };    // Exports these objects to the file (requireImport.js)

//module.expots is used to exports the function obj and array to other files. 
