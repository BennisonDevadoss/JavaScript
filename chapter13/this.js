console.log(this === global); 
function myfunction(){
	console.log(this === global)
}

myfunction();
 
console.log(this === global);


var myobject = {
	MyFunction: function() {
		console.log(this === global); 
	}
}; 

myobject.MyFunction();


// In function


function func(){
    return this;  
}

func() === global; 
console.log(func() === global); 
