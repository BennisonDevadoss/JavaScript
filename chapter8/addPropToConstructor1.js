// add property to constructor function
function Person() {
    this.name = "Bennison",
        this.age = 21;
}

let person1 = new Person();
let person2 = new Person();

console.log(person1.name + " " + person1.age);   // Bennison 21

console.log(person2.name + " " + person2.age);   // Bennison 21


// Add property to constructor function
Person.prototype.gender = "male";    

console.log(person1.gender);   // these two console.log will also work 
console.log(person2.gender);    // male
