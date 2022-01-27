function print(a, ...args) {   // This is the rest operator
    console.log(a);
    console.log(args);
}

print(...[1, 2, 3], 4, 5); // This is the spread operator


// a = 1; 

// args = [2, 3,4, 5]