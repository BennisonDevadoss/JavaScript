
/* REFERENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
const array = [0, 1, , , , 5, 6];

array.find(function (value, index) {
    console.log(`visited index ${index} with value ${value}`);
});

array.find(function (value, index) {
    if (index === 0) {
        console.log(`Deleting array[5] with value ${array[5]}`);
        delete array[5];  // delete keyword delete the index value, it doesn't remove the value with index. so the index is undefined.
    }
    console.log(`Visited index ${index} with value ${value}`)
});

/* 
visited index 0 with value 0
visited index 1 with value 1
visited index 2 with value undefined
visited index 3 with value undefined
visited index 4 with value undefined
visited index 5 with value 5
visited index 6 with value 6
Deleting array[5] with value 5
Visited index 0 with value 0
Visited index 1 with value 1
Visited index 2 with value undefined
Visited index 3 with value undefined
Visited index 4 with value undefined
Visited index 5 with value undefined
Visited index 6 with value 6
*/
