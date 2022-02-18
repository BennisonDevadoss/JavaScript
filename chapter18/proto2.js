class Animal {

}

class Rabbit extends Animal {

}


console.log(Rabbit.__proto__ === Animal)

console.log(Rabbit.prototype.__proto__ === Animal.prototype); 
