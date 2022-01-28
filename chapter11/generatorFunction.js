function* Generator() {
	console.log("Before 1");
	yield 1;
	console.log("After1");
	console.log("Before2")
	yield 2;
	console.log("After2");
	console.log("Before3");
	yield 3;
	console.log("After3");
}


let gen = Generator();

gen.next().value; // ==>   // This time the first console.log => "Before 1"  is only executed. 
gen.next().value;
gen.next().value;
gen.next().value;


// only if you call the function again and again then the next condition will be executed. 



