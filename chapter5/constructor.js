let Pancake = function () {
    //creat object property
    this.number = 0;

    //creat object method; 
    this.bake = function () {
        console.log("Baking the pancake");
        //Increase number of pancakes baked
        this.number++;
    };
}


let pancake = new Pancake();



pancake.bake();
pancake.bake();
pancake.bake();

console.log(pancake.number);


console.log(pancake.constructor); 
