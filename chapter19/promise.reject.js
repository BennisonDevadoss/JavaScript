//promise object also has a .reject() method, which is used to purge the request, if a required condition isn't met:

let promise = Promise.reject("request rejected").catch(function (error) {
    console.log("catch: " + error);
});  