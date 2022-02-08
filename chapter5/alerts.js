let alerts = 0;

// //alert checkig logic
// for (alerts = 0; alerts < 5; alerts++) {
//     let one = (alerts == 1);
//     let is = one ? "is" : "are";

//     let s = one == 1 ? " " : "s";

//     let message = `There ${is} ${alerts} alert${s}`;
//     console.log(message);
// } 

let isOrAre;
let sOrNot;
let message;
for (alert = 0; alert < 5; alert++) {
    if (alert == 0 || alert > 1) {
        isOrAre = "are";
        sOrNot = "s";
    }
    else {

        isOrAre = "is";
        sOrNot = "";

    }

    message = `There ${isOrAre} ${alert} alert${sOrNot}`;
    alert(message);

}