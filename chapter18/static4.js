class Animal {
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speeds = 0) {
        this.speed += speeds;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {   // This compare function will be accessed by the Rabbit class. 
        return animalA - animalB;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

console.log(rabbit);    // Just print the array of objects. 

rabbit.sort(Rabbit.compare);
rabbit[0].run();    //White Rabbit runs with speed 10.
rabbit[1].run();   //Black Rabbit runs with speed 5.


rabbit[0].hide();   // White Rabbit hides!
rabbit[1].hide();   // Black Rabbit hides!

Rabbit.compare();

