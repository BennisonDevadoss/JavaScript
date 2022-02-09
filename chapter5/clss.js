class vi{
    constructor(){
        this.property=1;
        this.name=2;
}
method(){
    console.log(this.property);
    console.log(this.name);
}
}
const my=new vi();
my.method();