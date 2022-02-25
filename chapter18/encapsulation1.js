class Detail {
    constructor(name, age) {
        var name = name;
        var age = age;
        // let fun = function () {
        //     console.log(this.name, this.age);   // This is not work.
        // }
    }

    setName(name) {
        this.name = name;
    }

    getname() {
        // fun();   // The above fun function is called here. 
        console.log(this.name, this.age);
        // console.log(name, age);   // It will give the error (name and age is not defined.)
    }
}

let obj = new Detail("Bennison Devadoss", 21);
console.log(obj);

obj.getname();
obj.setName("Devadoss");   // set and get methods are using to set the value to the variable. 

obj.getname()
console.log(obj); 