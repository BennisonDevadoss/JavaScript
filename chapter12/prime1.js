let prime1 = [];
// let Notprime = [];
let l = 0;
let m = 0;
let k;
function prime(number) {
    // k = 2;
    // console.log("2");
    for (i = 2; i <= number; i++) {
        k = 2;
        for (j = k; j <= i; j++) {

            if (i % j === 0) {
                if (i === 2) {
                    prime1[m] = i;
                    console.log(prime1[m]);
                    break; 
                }
                l++
                break;
            }

            if (j === i - 1) {
                if (i % j != 0) {
                    m++;
                    prime1[m] = i;
                    console.log(prime1[m]);
                    break;
                }
            }
        }
        ++k;
    }
    // console.log(Notprime);
}

prime(200);

// console.log(prime1);
// console.log(prime1.length);