function Detail(name, age, address) {
    let person = {};

    person.name = name;
    person.age = age;
    person.address = address;


    person.method = function () {
        console.log(`${this.name} from ${this.address}`);
    }

    return person;
}

let person1 = Detail("Bennison Devadoss", 21, "Tirunelveli");
let person2 = Detail("Gibson Joseph", 21, "Tirunelveli");

console.log(person1);
console.log(person2);

person1.method();
person2.method(); 
