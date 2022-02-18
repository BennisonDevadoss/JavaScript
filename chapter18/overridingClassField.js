class Animal {
    name = "Animal";   // THis program will work only on the chrome console.
    constructor() {
        console.log(this.name);
    }
}

class Rabbit extends Animal {
    name = "rabbit"
}

new Animal(); // animal
new Rabbit(); // animal

// Here, class Rabbit extends Animal and overrides the name field with its own value.
