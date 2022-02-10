fun = (function (a) {
    return function fun1(b) {
        return function fun2(c) {
            console.log(a + b + c);
        }
    }
})(2)(2);

// let a = fun(2);   
// let b = a(2);          // these are always run. 
// let c = b(3); 


fun(2);   // The both methods are working the same. 





