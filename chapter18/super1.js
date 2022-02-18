class Detail {                    /// The super keyword is used to access and call functions on an object's parent.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Detail {
    constructor(name, age, gpa)     /// GPA --> grade point average. 
    {
        super(name, age)
        this.gpa = gpa;
    }

    display() {
        console.log(`your name is ${this.name}`);
        console.log(`you are ${this.age} years old`);
        console.log(`your gpa is ${this.gpa}`);
    }

}

class Teacher extends Detail {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize;
    }
    display() {
        console.log(`your name is ${this.name}`);
        console.log(`you are ${this.age} years old`);
        console.log(`your class size is  ${this.classSize}`);
    }
}

let student1 = new Student("Bennison Devadoss", 21, 1324);
let Teacher1 = new Teacher("Gibson Joseph", 21, 212);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);


student1.display();
console.log("\n");
Teacher1.display(); 
