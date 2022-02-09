class Detail {                       // object creation using classess. 
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }
}

let student1 = new Detail("Bennison", 21, 55);
console.log(student1);
console.log(student1.name);

// Add some property to the object student1. 

student1.fun = function () {
    console.log("Hello World!");
    console.log(this);
}

student1.fun1 = () => {
    console.log(this);    // this will give the window object. 
}
// Again print the student1 object for checking if the function is added to student1. 

console.log(student1);
student1.fun();
student1.fun1();


//Normal object
let obj = { a: 2, b: 3 };
console.log(obj);


//.........................................................................................................
//JavaScript also has built-in constructors. Some of them are:

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number(1);    // A new Number object
let d = new Boolean();   // A new Boolean object
console.log(d);
a.b = 10;       // add property to object a. 
console.log(a);

console.log(c);
c.property = 145;
console.log(c);

//........................................................................................................
function fun() {
    //    name  = 19;
    this.names;
}
let st = new fun();

console.log(typeof st);
console.log(st); 

