class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this.power = power;
    }
}


let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmout = -10;




