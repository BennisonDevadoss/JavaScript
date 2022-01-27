var myobj = {};
Object.assign(myobj, { a: 1, b: 2, c: 4 }, { d: 5, e: 6, f: 7 });
// first we put the empty object then we assign the property 
// Finally, the object will be assigned to the empty objects. 


console.log(myobj); 