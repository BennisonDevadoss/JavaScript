const prototype = {
    sleep(amout) {
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}.`);
        this.energy += 1;
        this.hunger += 1;
    },

    // wake up
    wakeup() {
        this.state = "idle";
        console.log(`${this.name} woke up.`);
    },

    // Eat until hunger is quenched
    eat(amount) {
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} unit(s) of food.`);
        if (this.hunger -= amount <= 0) {
            this.energy += amount;
        }
        else {
            this.wakeup();
        }
    },

    //Wandering depletes energy, 
    //if necessary, sleep  for 5 hours to restore energy. 
    wander() {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if (--this.energy < 1) {
            this.sleep(5);
        }
    }

}

function Cat(name, hunger, energy, state) {
    let cat = {};

    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    cat.sleep = prototype.sleep;
    cat.wakeup = prototype.wakeup;
    cat.eat = prototype.eat;
    cat.wander = prototype.wander;

    return cat;
}

let kitty = Cat("kitty", 13, 4, "idle");
kitty.sleep();
kitty.wakeup();
kitty.eat(5);
kitty.wander();

let luna = Cat("Luna", 9, 4, "idle");
luna.sleep();
luna.wakeup();
luna.eat(2);
luna.wander();


// This is better way...
