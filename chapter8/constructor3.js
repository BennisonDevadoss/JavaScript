// constructor function
function Person(person_name, person_age, person_gender) {
    this.name = person_name,
        this.age = person_age,
        this.gender = person_gender,

        this.func = function () {
            console.log("hi " + this.name);
        }
}


const person1 = new Person("Bennison", 21, "male");
const person2 = new Person("Brendon", 45, "male");


//accessing property
console.log(person1.name);  // Bennison
console.log(person2.name);  // Brendon


person1.func();   // hi Bennison
person2.func();   // hi Brendon