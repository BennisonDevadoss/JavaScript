const { print } = require("./print")
const { Ingredient } = require("./ingredient")

class FoodFactory {
    // empty constructor;
    // we will not be instantiating any objects here. 
    constructor() {

    }
};

FoodFactory.make = function (what) {
    return new Ingredient(what.name, what.type, what.calories)
};

modules.exports = { FoodFactory };
print("Bennison"); 
