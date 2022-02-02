let names = ["benison", "devadoss", "austin",
    "alwin", "austin", "gibson", "joseph"];


let print = function (item, index, object) {
    console.log(item, index, object);
}


names.forEach(print);   // This is the forEach



// The below program i used normal for loop. 

let number = names.length;

for (let i = 0; i < number; i++) {
    console.log(names[i]);
}
