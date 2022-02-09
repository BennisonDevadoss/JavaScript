class Generator {
    constructor(...values) {
        this.value = values
    }

    fun1() {
        console.log(this.value);
    }

    *fun() {
        for (let number of this.value) {
            yield number;
        }
    }
}

let numbers = new Generator(1, 2, 3, 4, 5);
numbers.fun1()
console.log([...numbers.fun()]);
console.log(numbers); 