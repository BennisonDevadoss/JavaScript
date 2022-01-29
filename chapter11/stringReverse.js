let names = ["b", "e", "n", "n", "i", "s", "o", "n"];

let index = names.length;
console.log(index);
let temp = "";

names[7] = names[1];
console.log(names);


// This program is about to string reverse

outer: for (let i = 0; i < index / 2; i++) {

    // for (let j = index; j >= index / 2; j--) {
    //     if (j === index / 2) {

    //         console.log(names);
    //         break outer;
    //     }
    temp = names[i];
    console.log("temp", temp);


    names[i] = names[(index - 1) - i];


    console.log('names[(index - 1) - i]', names[(index - 1) - i])

    names[(index - 1) - i] = temp;

    console.log(names[(index - 1) - i]);

    console.log(names)
    //     }
}

console.log(names);
// console.log(names);



// const names = "Bennison";
// let reverse = "";

// const index = names.length;

// for (let i = index; i >= 1; i--) {

//     reverse += names[i - 1];
// }

// console.log(reverse);
