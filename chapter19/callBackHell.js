/* Callbacks are functions that return after an event is executed */

sailorAPI("get/wood", (result) => {
    sailorAPI("/build/boat/", (result) => {
        sailorAPI("sail/ocean/", (result) => {
            sailorAPI("/explore/island", (result) => {
                sailorAPI("/treasure/dig/", (result) => {

                });
            });
        });
    });
});