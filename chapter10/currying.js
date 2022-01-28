let planets = function (a) {
    return function (b) {
        return "Favorite planets are " + a + " and " + b;
    };
};

// let favoritePlanets = planets("Jupiter");

// // Call the curried function with different arrgument. 

// favoritePlanets("Earth");
// favoritePlanets("Jupiter");
// console.log(favoritePlanets("Saturan"));

console.log(planets("SATURN")("MARS"));