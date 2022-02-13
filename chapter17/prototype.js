// adding protype to the constructor function

function Detail() {
    this.name = "Bennison"
    this.age = 21;
}

let person1 = new Detail();
let person2 = new Detail();

// Adding prototype to the constructor function. 
Detail.prototype.gender = "male";

console.log(Detail.prototype);


//Now we can access the prototype gender
console.log(person1.gender);
console.log(person2.gender);     // these two constructor prints male. 




// Create owe Array.property.

/* If you want to extend functionality of the Array method specifically, attach a
method to Array.prototype.my method. */
