const a = {
    property: 1,
    method: func() {
        console.log("Hello World");
}
}

// a = { somthing: 1}  this line will give error

a.property = 2;
A.method = () => { "!" }  // no error.