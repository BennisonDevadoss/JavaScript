const a = {
    property: 1,
    method: function () {
        console.log("Hello World");
    }
}

// a = { somthing: 1}  this line will give error

a.property = 2;
a.method = () => { "!" }  // no error.