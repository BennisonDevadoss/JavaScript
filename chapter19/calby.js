let fun = function () {
    console.log("jhfw");
    return function () {
        console.log("Bennison Devadoss");
    }
};

let fun1 = fun;

fun1()();
// a(); 
fun()(); 