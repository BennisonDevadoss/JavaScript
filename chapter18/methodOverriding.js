class Animal {
    ShowName() {
        console.log("Animal");
    }

    constructor() {
        this.ShowName();
    }
}


class Rabbit extends Animal {
    ShowName() {
        console.log("Rabbit");
    }
}

new Animal();  // Animal
new Rabbit();  // Rabbit