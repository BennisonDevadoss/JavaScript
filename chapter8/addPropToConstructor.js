// construnctor function

function Person() {
    this.name = "Bennison",
        this.age = 23
}

//creating object
let person1 = new Person();
let person2 = new Person();


//adding property to person1 object
person1.gender = "male";

console.log(person1.gender);

//adding method to person1 object
person1.func = function () {
    console.log("Hello");
}

console.log(person2.gender); // it also give error
person1.func();   // Hello

person2.func();   // it will give error 
//because we did not add the property name func to the person2 object


