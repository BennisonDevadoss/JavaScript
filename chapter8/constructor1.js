// constructor function
function Person() {

    this.name = "Bennison",
        this.age = 23,

        this.fun = function () {
            console.log("Hello");

        }

}


//create objects

const person1 = new Person();
const person2 = new Person();


console.log(person1.name);   // Bennison
console.log(person2.name);   // Bennison

// this example we create a two object to the above constructor function