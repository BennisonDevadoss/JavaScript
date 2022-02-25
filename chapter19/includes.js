let a = [1, 2, 3, 4, 5];
let b = [3, 2, 50, 8];
let c = [];

a.forEach((value) => {
    if (b.includes(value)) {
        c.push(value);
    }
})

console.log(c);

// Using Includes method. 
