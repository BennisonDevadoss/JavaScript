Function.prototype.method = function () {
    console.log("Bennison Devadoss");
}
// Add a function method to the function prototype 


function fun() {
    console.log("Devadoss Bennison");
    fun.func();
}
fun();
fun.method();    // Bennison Devadoss 

// If i call the fun.method()
// It will give the output "Bennison Devadoss"; 

// And in this program's every program can access this function method. 


