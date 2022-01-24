

console.log(a, b, c);
{
    console.log(a, b, c);
    {
        var a = 100;
        let b = 50;
        const c = 0;
    }
}
console.log(a, b, c);

// let and const give the error mssage
// if you remove the variable name b and c from the console.log
// Now the program will give the output "undefine"; 
