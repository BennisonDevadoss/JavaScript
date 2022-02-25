class StaticMethodCall {
    static staticProperty = "static property";
    static staticMethod() {
        return "static method and " + this.staticProperty + "has been called";

    }

    static anotherStaticMethod() {
        return this.staticMethod() + " from another static method";
    }
}

StaticMethodCall.staticMethod();

StaticMethodCall.anotherStaticMethod();
