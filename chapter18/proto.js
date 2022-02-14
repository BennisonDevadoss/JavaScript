function Cars(name, maker, year) {
    this.name = name;
    this.maker = maker;
    this.year = year;
};

Cars.prototype.AllDetail = function () {
    console.log(this.name, this.maker, this.year);   //prototype.
}


let car1 = new Cars("car", "Bennison", 2022);
let car2 = new Cars("bike", "Karthik", 2020);

car1.AllDetail();
car2.AllDetail(); 
