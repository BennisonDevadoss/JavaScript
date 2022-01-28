let detail = { name: "Bennison", fun: () => {} };


for (let key of Object.keys(detail))  // Object.keys is used to extract the object key(property, and function names)
	console.log(key); 


for (let value of Object.values(detail)) // Object.values is used to extract the objects property and function values and store a extract value to anoter varaible
	console.log(value); 


for (let entrie of Object.entries(detail)) // Object.entries is used to display both property and that values. 
	console.log(entrie); 



