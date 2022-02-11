function Detail(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;

    this.method = () => { console.log(this.name, this.age, this.mark) }   // arrow function inside the constructor. 
}

let person1 = new Detail("Bennison Devadoss", 21, 21)
let person2 = new Detail("Billy", 12, 322134);

person2.arrow = () => { console.log(this.name) };   //it will give the undefined.  
person2.arrow();
console.log(person2);

person2.normal = function () {
    console.log(this.name);
}
person2.normal();    // it will give the output of person2 name.
