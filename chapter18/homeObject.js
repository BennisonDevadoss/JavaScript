let animal = {
    name: "Animal",
    eat() {        // animal.eat.[[HomeObject]] == animal
        console.log(`${this.name} eats`);
    }
};

let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {           // // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
};

let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {            // // longEar.eat.[[HomeObject]] == longEar
        super.eat();
    }
};

rabbit.eat();     // Long Ear eats. 
longEar.eat();    // Long Ear eats
