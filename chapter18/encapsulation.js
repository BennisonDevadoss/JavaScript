// let names = 1900;
// let ages = "gdfqwej";
function Detail(name, age) {
    let names = name;
    let ages = age;

    let getData = function () {
        // console.log(this);
        console.log(names, ages);   // it gives the output
    }

    this.getDetail = function () {
        getData();
        //console.log(this);
        // console.log(this.names, this.age);   // undefined. 
    }

}

let obj = new Detail("Bennison Devadoss", 21);  
// let obj1 = new Detail("Gibson Joseph", 21);

console.log(obj);
// console.log(obj.getData());
obj.getDetail();
