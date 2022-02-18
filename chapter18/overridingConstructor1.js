class Animal {

    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name)
        this.earLength = earLength;
    }
}

let rabbit = new Rabbit("White Rabbit", 10)

console.log(rabbit.name);   // White Rabbit
console.log(rabbit.earLength);   // 10

console.log(Animal.name);