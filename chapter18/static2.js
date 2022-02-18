class User {
    static staticMethod() {
        console.log(this === User);
    }
}

User.staticMethod();

let user = new User();
console.log(user);

user.staticMethod();   // TypeError: user.staticMethod is not a function

//We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.
// And the bellow example are same. 

class User1 { }

User1.staticMethod = function () {
    console.log(this === User1);
};

User1.staticMethod();  // true