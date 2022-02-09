class Detaile {
    constructor() {
        this.name = "Bennison Devadoss";
        this.age = 21;
        this.mark = 89;

        this.method = function () {
            console.log(this);   // but it points the Detail object
        }
    }
    arrow = () => {
        console.log(this)   // THis is also points the global object. 
    }
}

let obj = new Detaile()
console.log(obj);

obj.method();

obj.arrow();


// Now I add another method to the Obj object. 

obj.window = function () {
    console.log(this)          // This is also points the object Detail
}


obj.window();


obj.Arrow = () => {
    console.log(this);      // But this arrow points the window objects. 
}

obj.Arrow(); 