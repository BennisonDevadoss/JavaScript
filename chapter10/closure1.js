function function_1(x)
{
	function function_2(y)
	{
		return x * y; 
	}

	return function_2; 
}

let x_value = function_1(2); 
let y_value = x_value(4);
console.log(y_value); 
