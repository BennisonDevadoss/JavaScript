const prototype = {
    sleep(amount) {
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
    let cat = Object.create(prototype);

    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    return cat;
}

let kitty = Cat("kitty", 21, 3, "idle");
kitty.eat(2);
kitty.sleep();
kitty.wakeup()

let luna = Cat("Luna", 12, 3, "idle");
luna.sleep();
luna.wakeup();
luna.wander();  