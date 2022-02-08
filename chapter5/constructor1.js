function Detail(name, age, marks) {   // This function is called constructor function. 
    this.Name = name;
    this.Age = age;
    this.Marks = marks;
}
let Marks = 10000;
let student1 = new Detail("Bennison Devadoss", 21, 100);  // Now the student1 is an object variable. 
console.log(student1);

let student2 = new Detail("Gibson Joseph", 21, 100);
console.log(student2)

// Adding property to the student1 property. 
student1.total = function () {        /**Normal function*/
    console.log(this.Marks);         // In this function print the student one Mark. 
}

// But the below function is created using arrow function
student2.total = () => {
    console.log(Marks);
}


console.log(student1);   // after addig function
console.log(student2);

student1.total();
student2.total();
// Detail("function", 12, 1); 