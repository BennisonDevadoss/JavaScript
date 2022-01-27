function print(a, b, c, ...args) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}


print(...[1, 2, 3], 4, 5);

// a = 1
// b = 2
// c = 3
//args = [4, 5]