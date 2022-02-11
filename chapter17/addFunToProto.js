// Add function prototype to the constructor function
var name = "skjbvlkjsb";
var age = 34;
var mark = 983275;

function Detail(name, age, mark) {
    this.name = name
    this.age = age;
    this.mark = mark;
    this.method = () => { console.log(this.name, this.age, this.mark); }
}

let person1 = new Detail();
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
