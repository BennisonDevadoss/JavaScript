let promise = Promise.resolve("resolve value");

//.then
//.then() method receives the resolve value. 
promise.then(function (message) {
    console.log("then: " + message);
});

//.catch
let promise1 = Promise.reject("rejected");
// catch method responds only to reject method. 
promise1.catch(function (error) {
    console.log("catch: " + error);
});

//.finally.
/* good place for post-promise data */
let promise2 = Promise.finally("msg")
promise1.finally(function (msg) {
    console.log("finally: hide loading animation.");
});
