function outer_function() {
    console.log(a, b, c);       // undefine
    function first_inner_function() {
        function inner_function() {
            var a = 5;
            let b = 6;
            const c = 10;
        }

        inner_function();
    }

    first_inner_function();
}

outer_function();

// In this program, we declare a variable(let, var, const) inside of the function
// So we can't access these variable outside of the function scope. 
