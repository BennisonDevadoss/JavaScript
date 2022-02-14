class Detail {
    constructor() {
        this.name = this.constructor.method();   // Call static method(function) inside the constructor by using this.constructor.function_name(); 
        // console.log(this.method())
        console.log(this);
    }

    static method() {
        console.log(this);
        return "Bennison Devadoss";
    }
}

let obj = new Detail();
console.log(obj);

