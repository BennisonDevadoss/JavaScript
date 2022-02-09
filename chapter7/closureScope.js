var plus = (function () {
    var counter = 0;
    console.log("Bennison")
    console.log(plus);
    return function () {
        counter += 1;
        return counter;
    }
    console.log("Bennison Devadoss")
})();

plus();
plus();
plus();


// We use the return keyword so this program will run on the consoles.