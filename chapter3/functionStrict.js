function strict_mode() {
    "use strict";
    function inner() {
        console.log("me too");
    }
    let string = "I an in strict mode";
    return console.log(string)  + inner();
}
strict_mode();