// class Cat {
//     let property = 1; 
//     this. property = 2; 
// }

// the above coding will give the error message 
// we don't define a variable directly into the class. 


class Cat {
    constructor() {
        let property = 1;
        this.something = 2;
    }

    method() {
        console.log(this.property);
        console.log(this.something);
    }

    // this.method();

    // method();
}
// this.method();
// method();

let cat = new Cat()
console.log(cat);
cat.method()   //   ????   // The above console.log is not showing the function method into the object cat, But how the function method is accessed by the cat. 

/// this function method is not in a cat property. 
console.log(cat);



