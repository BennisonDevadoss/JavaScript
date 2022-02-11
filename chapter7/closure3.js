// Closure Global scope
let increase, decrease, multiply, devision;

//Outer function 
function maths() {
    let number = 10;
    console.log(number);
    increase = function () {
        //increase the value; 
        number = number + 10;   //Increase ten. 
        console.log(number);

        decrease = function () {
            number = number - 10;
            console.log(number);

            multiply = function () {
                number = number * 10;
                console.log(number);

                devision = function () {
                    number = number / 10;
                    console.log(number);
                }
            }
        }
    }
}

maths();
increase();   // This is an inner function to the function maths. But I can call this function in global block. 

//Because the function function name increase is declared globaly. 
// First the outer function (maths) function should be executed first.
// Then only the inner function can be executed globaly. 

decrease();
multiply();
devision();

// The function can be called globally......

