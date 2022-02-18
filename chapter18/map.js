let array = [1, 2, 3, 4];

let map = array.map((a, b) => a + b);   // Firt the map parameter b is assigned to zero and the parameter is assigined to array value. 

console.log(map);


// 
let total = 0;
array.map((a) => total += a);
console.log(total);


// reduce

let reduce = 0;

reduce = array.reduce((a, b) => a + b);

console.log(reduce); 