function fun() {
    console.log("hello from fun() function 1.");
}


// The code above is the same as: 

var fun = function () {
    console.log("hello from fun() function2.");
}

// function calling

fun(); 

//  The above two function have the same function call name, so function two is overwritten by javascript interpreter. 