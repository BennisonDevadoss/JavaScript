// if a class extends another class and has no constructor

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }
}

// Doesn't work
let rabbit = new Rabbit("White Rabbit", 10);   // Error: this is not defined. 

//Constructors in inheriting classes must call super(...), and (!) do it before using this.

// The file name overridingConstructor2 have solution to this error must see that file. 