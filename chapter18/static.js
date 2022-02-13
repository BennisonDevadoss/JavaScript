class Test {
    static a = 10 // This is an static variable. 
    b = 20        // This is an Non-static variable. 


    static m1() {
        console.log("This is an static method");
    }

    m2() {
        console.log("This is an Non-static method");
    }

};

// We can directly access static variable and method using class name. (Without creating an object)

console.log(Test.a);    // it does not work in node but it is worked on the console properly. 
console.log(Test.b);

Test.m1()   // This method is accessed by using class name. 
Test.m2()    // This function is not initialized with static kewyord so this function(method) can't be accessed directly by using class name. 