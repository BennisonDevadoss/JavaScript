class Detail {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Detail.prototype.method = function () {
    console.log(this.name, this.age)
}

let obj1 = new Detail("Bennison", 21);
let obj2 = new Detail("Billi", 21);

obj1.method();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.__proto__ = Detail.__proto__;

let person1 = new Person("Karthik", 21);
person1.method(); 