class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs wiith speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.stop();  /// Now the parent and derived class have a function with same keyword.
        this.hide();   // So we access the parrent class stop function with super keyword. 
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.stop();

/*
super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).
*/


/// Arrow function have no super keyword. 