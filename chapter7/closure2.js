fun = function (a) {
    console.log(a);
    return function fun1(b) {
        return function fun2(c) {
            console.log(a + b + c);
        }
    }
};

let a = fun(2);
console.log(a)
let b = a(2);
console.log(b)      // these are always run. 
let c = b(3);
console.log(c)


// fun(2)(2)(2);


// fun(2);   // The both methods are working the same. 





