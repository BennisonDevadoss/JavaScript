class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
    static calculation(n = 1) {
        return n * 3;
    }
}

class SquaredTriple extends Triple {
    static LongDescription;
    static description = "I squate the triple of any number"
    static calculate(n) {
        return super.calculation(n) * super.calculation(n);
    }
}


console.log(Triple.description)
console.log(Triple.calculation());
console.log(Triple.calculation(6));

const tp = new Triple();

console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.LongDescription);
console.log(SquaredTriple.customName);


console.log(tp.calculation());   // Calculation is not a function. 
