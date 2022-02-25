let info = {
	ditail: { position: [125, 210], 
		info: "map location" }
}; 

// Create new event of custom type "pin"
let eventPin = new CustomEvent("pin", info); 

// Create callback
let callback = function(event) {
	console.log(event); 
}; 

// Start listening for pin event
document.addEventListener("pin", callback); 

//Manualy dispatch the event1
document.dispatchEvent(eventPin); 

