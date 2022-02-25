let count = 0;
let i;
for (i = 0; i < 201; i++) {
    let str = i.toString()
    length = str.length
    for (j = 0; j < length; j++) {
        if (str[j] == 0) {
            count = count + 1;
        }
    }
}

console.log(count); 