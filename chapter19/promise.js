// /* Synchronous system */

// /* The above line run one by one this is called synchronous */
// /* Every single line executed one by one. */
// console.log("..........Synchronous..........");

// console.log("I");
// console.log("eat");
// console.log("ice cream");
// console.log("with a");
// console.log("spoon");


// /*Asynchronous system*/
// /* In asynchronous operations, on the other hand, you can move to another task before the previous one finishes */
// console.log("..........Asynchronous..........");

// console.log("I");
// console.log("eat");
// setTimeout(() => {
//     console.log("ice cream")
// }, 2000);
// console.log("with a");
// console.log("spoon");

/*  what is call back function
Ans: 
* calling a function inside the another function it called callback function
*/
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["cone", "cup", "stick"],
    holder: ["cone", "cup", "strick"],
    toppings: ["chocolate", "peanuts"]
};

let order = (fruitName, call_production) => {
    // console.log("order placed, please call the production");
    call_production();
};

let production = () => {

    // console.log("order received, starting production")
};

order("", production); 