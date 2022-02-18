class Animal {
    // static name = "Bennison Devadoss";  // This line give an error. (Unexpected token = )
    static fun() {
        console.log("Bennison Devadoss");
    }

}

class Rabbit extends Animal {
}

// console.log(Rabbit.name); 
Rabbit.fun()              // Static is also inheritance. 
