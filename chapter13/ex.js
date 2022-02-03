let a = [1, 2, 3, 4, 5, 10, 22, 33, 11];
let b = [3, 2, 5, 6, 7, 12, 10, 33];
let c = [];
let k = 0;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            c[k] = b[j];
            k++;
        }
    }
}

console.log(c); 
