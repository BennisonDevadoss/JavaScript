const number = [100, 23, 1, 4, 3];


//Using with normal function. 


// number.sort(sorted);

// function sorted(a, b) {    /// this is always works. 
//     return a - b;
// }

// console.log(number);



// Using with arrow function


number.sort((a, b) => { return a - b });


// this an arrow function


console.log(number); 