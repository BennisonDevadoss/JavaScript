class ClassWithStaticMethod {
    static staticProperty = "someVAlue";
    static staticMethod() {
        return "static method has been called";
    }

    // static {
    //     console.log("Bennison Devadoss")  // It will executed automatically. 
    // }
}


console.log(ClassWithStaticMethod.staticProperty);

console.log(ClassWithStaticMethod.staticMethod()); 