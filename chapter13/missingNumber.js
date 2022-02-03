let a = [2, 5, 7, 10, 13];
let b = [];
let k = 0;

for (i = 0; i < a.length - 1; i++) {
    if (a[i + 1] - a[i] == 1) {

        continue;
    }
    else {

        b[k] = a[i] + 1;

        while (a[i + 1] - b[k] != 1) {
            b[k + 1] = b[k] + 1;
            ++k;
        }

    }

    ++k;
}
console.log(b);

