var fun = function () {
    console.log("hello from fun() function 1. ");
}

//function 2: 

function fun() {
    console.log("hello from fun() function 2")
}

fun();

// The below commands are the output of the functionredefine.js and functionredefine2.js

// bennison@coding-town:~/Java_Script$ node functionredefine.js
// hello from fun() function2.
// bennison@coding-town:~/Java_Script$ node functionredefine2.js
// hello from fun() function 1. 
// bennison@coding-town:~/Java_Script$ 



//function are hoisted first. then variable.