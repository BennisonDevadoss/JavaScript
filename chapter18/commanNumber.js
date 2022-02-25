const a = [1, 2, 3, 4, 5, 3, 5, 1, 2, 4, 6, 7];
const b = [2, 4, 5, 6, 7, 3, 10];
const c = [];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            if (c.length === 0) {
                c.push(a[i])
                continue;
            }
            for (let k = 0; k < c.length; k++) {
                if (a[i] == c[k]) {
                    break;
                }
                if (k == (c.length - 1)) {
                    c.push(a[i])

                }
            }

        }
    }
}
console.log(c); 