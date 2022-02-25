var a = 100; 
const obj = {
    a: 1,
    b: 2,
    method: () => {
        console.log(this.a, this.b);
        console.log(this);
    }
}

obj.method(); 