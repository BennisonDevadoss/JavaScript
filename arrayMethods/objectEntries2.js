/* Converting an Object to a Map */
/* The new Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map: */

const obj = { name: "Bennison", age: 21 };
const map = new Map(Object.entries(obj));

console.log(map);
/* 
Map { 'name' => 'Bennison', 'age' => 21 } */
