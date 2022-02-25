let obj = {
    name: "Bennison",
    age: 21,
}

let obj1 = {
    name: "Karthik",
    age: 21
}

Object.prototype.method = function () {
    console.log(this.name, this.age);
}

obj.method();

obj1.method(); 