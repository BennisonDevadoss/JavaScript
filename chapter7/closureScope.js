var plus = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

plus();
plus();
plus();


// We use the return keyword so this program will run on the consoles.