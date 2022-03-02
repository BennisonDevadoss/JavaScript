let password = "bennison";
let p = new Promise((resolve, reject) => {
    if (password != "bennison")
        return reject("inValid Password");
    resolve("true");
});
console.log(p);

/*  what is resolve?
The resolve method indicates that the promise has been successfully fulfilled and
contains the return value.*/

