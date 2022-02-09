class Detail {

    constructor() {
        this.prop = 1;
        this.prop1 = 2;
        this.prop2 = 3;

        this.method = function (a, b) {
            console.log(this);              // This this refers the Detail objects. 
        }
        this.method2 = () => {
            console.log(this);
        }
    }

    //geter; 
    // get method2() {
    //     return this.method1()
    // }

    method1() {
        console.log(1 + 2);
        console.log(this.prop + this.prop1);
        console.log(this);

    }
}

let obj = new Detail();
console.log(obj);
obj.method();
obj.method1();
obj.method2();

obj.method3 = function () {
    console.log(this);
}
obj.method3();

obj.method4 = () => {
    console.log(this);     // this arrow function only takes the window objects.
}
obj.method4(); 
