let arr = [1, 5, 7, 9];
let NewArr = [];
// Find Missing Number
for (i = 0; i < arr.length - 1; i++) {
    if ((arr[i + 1] - arr[i]) != 1) {

        NewArr.push(arr[i] + 1);

        for (; (arr[i + 1] - NewArr[NewArr.length - 1]) != 1;) {

            NewArr.push(NewArr[NewArr.length - 1] + 1);

        }
    }
}

console.log(NewArr); 