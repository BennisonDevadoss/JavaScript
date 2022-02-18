class User { }

User.staticMethod = function () {
    console.log(this === User);
};

User.staticMethod();  // true

// Usually, static methods are used to implement functions that belong to the class,



let user = new User();
console.log(user); 