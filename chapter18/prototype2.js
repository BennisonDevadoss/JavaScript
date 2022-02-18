function Detail(name, address) {
    this.name = name;
    this.address = address;
}

let person1 = new Detail("Bennison Devadoss", "India");
console.log(person1);

let person2 = new Detail("Gibson Joseph", "India");
console.log(person2);

console.log(person1.__proto__);

person1.__proto__.display = function () {
    console.log(`${this.name} from ${this.address}`);
    console.log(this.name + " ", "from ", this.address)
}

person2.display();

Object.prototype.fun = function () {     // Every object can access this function because this function is added in the Object prototype.
    console.log("Prototype");
}

person2.fun();

let c = { name: "Edison", country: "India" };

c.fun();


Detail.prototype.fun1 = function () {
    console.log(`${this.name} from ${this.address}`);
}

person2.fun1();

// c.display();   // This will give the error. 

// c.fun1();  // It will give the output. 

//...........................................................................

console.log(Detail.__proto__);   // [Function]
console.log(Detail.prototype);   // Detail { display: [Function], fun1: [Function] }

