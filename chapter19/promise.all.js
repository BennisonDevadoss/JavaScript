var promise = "promise";
var threat = "threat";

var wish = Promise.resolve("I wish,");

//Data set
var array = [promise, threat, wish];
Promise.all(array).then(function (values) {
    console.log(values);
});
