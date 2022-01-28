function greet() {
    const b = 20
    function displayname(name) {
        console.log("Hi " + " " + name);
        console.log(b);
    }

    //returning a function
    return displayname;
}

const g1 = greet();
console.log(g1);
g1("hello"); 
