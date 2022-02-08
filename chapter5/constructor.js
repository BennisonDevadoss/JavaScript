let Pancake = function (number) {
    //creat object property
    this.number = 0;

    //creat object method; 
    this.bake = function () {
        console.log("Baking the pancake");
        //Increase number of pancakes baked
        this.number++;
    }
}


let pancake = new Pancake(500);
let pancake1 = new Pancake();
// pancake1.number = 500;

// pancake1

// pancake.number = 120;
console.log(pancake.number);
// console.log(pancake1.number);



pancake.bake();
pancake.bake();
pancake.bake();


// pancake1.bake();
// pancake1.bake();
// pancake1.bake();

console.log(pancake.number);
console.log(pancake1.number);


console.log(pancake.constructor); 
