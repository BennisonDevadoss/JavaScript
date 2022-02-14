const radius = [3, 1, 2, 4];

const calculateArea = function (radius1) {
    const output = [];
    for (let i = 0; i < radius1.length; i++) {
        output.push(Math.floor(Math.PI * radius1[i] * radius1[i]))
    }
    radius1 = output;
    return output;
}

console.log(calculateArea(radius));
console.log(radius); 