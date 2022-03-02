let promise = new Promise(function (resolve, reject) {
    let condtion = false;
    if (condtion)
        resolve("message");
    else
        reject("error details");
})
    .then(function (msg) {
        console.log("Promise resolved to " + msg);
    })
    .catch(function (error) {
        console.log("Promise rejected with " + error)
    })
    .finally(() => {
        console.log("finally.")
    }); 
