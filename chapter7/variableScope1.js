{
    console.log(a, b, c);
}

{
    console.log(a, b, c);
}

{
    console.log(a, b, c);
}

function fun1() {
    const a = 100;
    var b = 50;
    let c = 0;

    console.log(a, b, c);
    console.log("I am function one");

    function fun1_innerfun() {
        console.log(a, b, c);
        console.log(" I am function one's inner function");
    }
    fun1_Innerfun();
}



function fun2() {
    console.log(a, b, c);
    console.log("I am function two");     // This function is not inner function to the function name one 
    // so this when the function execte, it will give the output
}

fun1();

fun2();


//If you declare a varible inside the function 
// you can't access the varible outside of block it will give error
//but we can access these variable  outside of another function. 