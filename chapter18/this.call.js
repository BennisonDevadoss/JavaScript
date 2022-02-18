// let Animal = {
//     name: "Animal",
//     eat() {
//         console.log(`${this.name} eats.`);    // In this commanded program is explalins how to setup one object to another object's protptype.
//     }
// };

// let rabbit = Object.create(Animal);
// console.log(rabbit);
// rabbit.eat()


let rabbit = {
    name: "Animal",
    age: "21",
    eat() {
        console.log(`${this.name} eats`);
    }
};

let longEar = {
    __proto__: animal,  // The animal is a prototype to this object. 
    eat() {
        this.__proto__.eat.call(this);   // Animal eats. 
        console.log(this.__proto__.age)  // 21
    }
};

longEar.eat();

console.log(longEar);


//  The code doesn't work anonymous function. 