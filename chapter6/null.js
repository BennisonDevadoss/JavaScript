let bike = null;

class Motorcycle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.features = null;
    }
    getFeatures() {

        if (this.features == null) {
            this.features = { /* get features from database */ }
        }

        else {
            this.features = { /* get features from database */ }
        }
    }
}
bike = new Motorcycle("bennison", "bike2022", 2022);

bike.getFeatures();