"use strict";

let array = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];

function duplicate(array1) {
    console.log(array1);
    console.log(array1 === array);
    let b = [];
    let length = array1.length;
    let k = 0;

    outer: for (let i = 0; i < length; i++) {
        if (i > 0) {

            for (let j = 0; j < b.length; j++) {

                if (b[j] == array1[i]) {
                    continue outer;
                }

            }
        }

        b[k] = array1[i];
        k++;
    }

    array = b;
}

duplicate(array);
console.log(array); 