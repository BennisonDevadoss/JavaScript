class Detail {                           // Inheritance. 
    constructor(names, ages) {
        this.name = names;
        this.age = ages;
    };
    method() { console.log(this.name, this.age) };

}
class Detail1 extends Detail {
    constructor(name, age) {
        super(name, age);
        // this.age = age;
    }
    method1() {
        super.method();
        console.log(this.name, this.age);
    }
}

let obj = new Detail1("Karthik", 21);
//let obj1 = new Detail();
obj.method1();

//obj1.method();
//console.log(obj1); 