/* Find an object in an array by one of its properties */
/* REFERENCE 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find */

const objArray = [
    {
        name: "Bennison", age: 21
    },
    {
        name: "gibson",
        age: 21
    },
    {
        name: "Augustin",
        age: 20
    }
];

function Augustin(objArray) {
    return objArray.name === "Augustin"
}
// console.log(Augustin(objArray)); 

console.log(objArray.find(Augustin));
/* Array.find method takes call back functions s*/

/* 
find(callbackFn)
find(callbackFn, thisArg) */