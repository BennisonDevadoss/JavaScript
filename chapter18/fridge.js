class fridge {
    constructor(ingredients) {
        this.items = ingredients;
    }
    //get all ingredients of type
    get(type) {
        return this.items.filter(i => i.type == type, 0);
    }
};