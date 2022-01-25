const detail = {
    name: "bennison",
    age: 21,
    salary: 10000,

    function: function () {
        console.log("Hi " + this.name);
        console.log("Your salary is " + this.salary);
        console.log("Your age is " + this.age);
    }
}

// function call
detail.function();