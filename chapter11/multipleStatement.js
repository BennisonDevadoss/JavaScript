let counter = 0; 
function function_add() 
{
	counter ++; 
}

for(let i = 0; i<10; i++, function_add()); 


console.log(counter); 


// This program will give the output 10
//
//
//
// We can do this function another way
//
//
let counter = 0; 
function function_add()
{
	counter++; 
}

for(let i = 0; i<10; i++)
{
	function_add(); 
}

console.log(counter); // This program also give the output 10. 

