let animal = {
    SayHi() {
        console.log("I am animal");
    }
};

let rabbit = {
    __proto__: animal,
    SayHi() {
        super.SayHi();
    }
};

let plant = {
    SayHi() {
        console.log("I am plant");
    }
}


let tree = {
    __proto__: plant,
    SayHi: rabbit.SayHi,
};

tree.SayHi();    // I am in animal..
console.log(tree);  