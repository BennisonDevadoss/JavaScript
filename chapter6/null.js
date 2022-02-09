let bike = null;

class Motorcycle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.features = "fast bike";
    }
    getFeatures() {

        if (this.features == null) {
            this.features = { /* get features from database */ }
            // console.log(this.features);
        }

        else {
            // this.features = { /* get features from database */ }
            console.log(bike);
            console.log(this);
        }
    }
}
bike = new Motorcycle("bennison", "bike2022", 2022,);
// console.log(bike);
bike.getFeatures();

