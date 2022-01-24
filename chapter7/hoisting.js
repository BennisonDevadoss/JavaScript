console.log(defineLater);
var defineLater;
defineLater = "I am defined!"
console.log(definedLater);

console.log(definedSimulateneously);
var definedSimulateneously = "I am defined!"
console.log(definedSimulateneously);

doSomethingElse();
function doSomethingElse() {
    console.log("i did it!");
}

functioonVar();
var functionVar = function () {
    console.log("Also I did it!");
}
