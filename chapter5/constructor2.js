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