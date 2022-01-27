function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

let z = x();
console.log(z);
z();

