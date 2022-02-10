function fun() {
    var a = 100;
    console.log("Bennison Devadoss");
    fun1 = () => {
        console.log(a);
    }
    return fun1;

}

var func = fun();
console.log(func); 
func(); 
