function Cat(name, hunger, energy, state) {
    let cat = {}


    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    // add function to cat object. 
    cat.sleep = function (amout) {
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}.`);
        this.energy += 1;
        this.hunger += 1;
    }

    // wake up
    cat.wakeup = function () {
        this.state = "idle";
        console.log(`${this.name} woke up.`);
    }

    // Eat until hunger is quenched
    cat.eat = function (amount) {
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} unit(s) of food.`);
        if (this.hunger -= amount <= 0) {
            this.energy += amount;
        }
        else {
            this.wakeup();
        }
    }

    //Wandering depletes energy, 
    //if necessary, sleep  for 5 hours to restore energy. 
    cat.wander = function () {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if (--this.energy < 1) {
            this.sleep(5);
        }
    }


    return cat;

}

let kitty = Cat("Kitty", 10, 5, "idle");
kitty.sleep();
kitty.eat(5);
kitty.wander();


let luna = Cat("Luna", 8, 3, "idle");
luna.sleep();
luna.wander();
luna.eat(1); 