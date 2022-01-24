var number = 10;
function fun() {
    var num = 100;
    console.log("I am the inner variable " + num);
}


function InnerVarCall() {
    console.log("I am the global variable: " + number);  // This console always gives the output 
    console.log("I am also call inner variable " + num);   // It will display num is not defined   --> throw error messsage
}

fun();
InnerVarCall(); 
