let obj = { name: "Bennison Devadoss", country: "India" };

console.log(obj);

console.log(obj.prototype);   // Undefined

console.log(obj.__proto__);    // It displays the Objects prototype. 

let obj1 = Object.create(obj); // Convert the obj as a prototype to the object obj1.

// obj1.name = "Gibson";

console.log(obj1.__proto__);   // { name: 'Bennison Devadoss', country: 'India' }

// Now we can access the all property of obj as a property by the obj1 objects. 

let obj1A = Object.create(obj1);

obj1.name = "Gibson";

console.log(obj1A.name);

obj1A.name = "Devadoss";

console.log(obj1A.__proto__.name);   // Bennison

console.log(obj1A.name);   // Devadoss

obj.from = function () {
    console.log(`${this.name} from ${this.country}`);
}

obj1.from();   // Gibson from India   ||   If the object obj1 does,not have name property this function take the name from object obj. 

console.log(obj1);