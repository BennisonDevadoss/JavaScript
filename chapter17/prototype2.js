function fun() {         // Function object is created. because every function is an objects.
    console.log();
}

fun.prototype    // It will display an object. and the object have a property called constructor. 
// This constructor property have the above function.   (constructor points the fun()). 


// You can still access prototype via (function_name.__proto__   Object.getPrototypeOf(function_name))


fun.prototype   // Objects have a property constructor. 


// Create an object literals. 
obj = { name: "Bennison Devadoss", age: 21 };

obj.__proto__    // objects.
obj.__proto__.constructor   // ƒ Object() { [native code] }
obj.constructor    // ƒ Object() { [native code] }

// When obj was created, obj.__proto__ connect to point to Object.prototype.

// Object.prototype already created internally by javascript. 
