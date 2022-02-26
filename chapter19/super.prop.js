var obj1 = {
    method1() {
        console.log("method 1");
    }
}

var obj2 = {
    method2() {
        super.method1();
    }
}

Object.setPrototypeOf(obj2, obj1);     // Now the obj1 is assigned to obj2 as an prototype.  
obj2.method2();     // "method 1"; 