const coder = {
    isStuding: false,
    printIntroduction: function () {
        console.log(`my name is ${this.name}. Am I studing: ${this.isStuding}`);
    }
}

let karthik = Object.create(coder);    //  The dobject coder is an prototype to the object karthik

karthik.name = "karthik";
karthik.isStuding = true;

// console.log(coder);
// console.log(karthik);

// karthik.printIntroduction();

console.log(coder);
console.log(karthik.__proto__)
