//class expression

//Unnamed class: 

let Detail = class {
    constructor() {
        this.prop1;
        this.prop2;
        this.prop3;
    }

}
console.log(Detail.name);    // Detail


// named class:

let Data = class Properties {
    constructor() {
        this.prop1 = 1;
        this.prop2 = 1;
        this.prop3 = 3;
    }
}
console.log(Data.name);

let obj = new Data()
console.log(obj); 


