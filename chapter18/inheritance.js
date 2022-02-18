class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`)
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
}

let animal = new Animal("My Animal");
// console.log(animal); 


class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide();

// Object of Rabbit class have access both to Rabbit methods, such as rabbit.hide(), and also to Animal methods, such as rabbit.run().

