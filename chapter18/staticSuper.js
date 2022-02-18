// You are also able to call super on static methods.

class Parent {
    constructor() {

    }

    static display() {
        return "Bennison Devadoss"
    }
}

class Child extends Parent {

    // constructor() {
    // If the constructor is not a command the program will give the output, beacause the super keyword is initialized before the constructor. 
    // }
    static display1() {
        console.log(`your name is ${this.display()}`)
    }
}

let staticKeyword = new Child();

// console.log(static);
Child.display1();
console.log(Child); 
