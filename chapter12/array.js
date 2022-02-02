const fruit = [
    { name: "Apple", count: 13, },
    { name: "Pear", count: 12, },
    { name: "Banana", count: 11, },
    { name: "Strawberry", count: 11, },
    { name: "Cherry", count: 11, },
    { name: "Blackberry", count: 10, },
    { name: "Pineaple", count: 10, }
];


// let my_sort = (a, b) => a.count - b.count;

// let sorted = fruit.sort(my_sort);



function array(a, b) {
    return a.count - b.count;
}
// console.log(sorted); 

fruit.sort(array);

console.log(fruit); 