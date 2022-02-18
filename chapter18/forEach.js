let array = [1, 2, 3, 4];
let d = 0;
let c = array.forEach((a, b) => {
    array[b] = 1;
    d += a; //  The forEach method can obly modify the corrent array. 
});

console.log(array);
console.log(c)  // it will give the undiefined. 
console.log(d);   // 10; 


