class Detail {
    constructor() {
        var name;
        var age;
    }

    setName(name) {
        this.name = name;
    }

    getname() {
        console.log(this.name);
    }
}

let obj = new Detail();
console.log(obj);
obj.setName("Bennison Devadoss");   // set and get methods are using to set the value to the variable. 

obj.getname()
console.log(obj); 