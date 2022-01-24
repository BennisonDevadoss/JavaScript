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




