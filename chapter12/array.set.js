let days = ["senin", "senin", "selasa", "selasa", "rabu", "kamis", "rabu"];
let fullname = [{ name: "john" }, { name: "jane" }, { name: "imelda" }, { name: "john" }, { name: "jane" }];

// REMOVE DUPLICATE FOR ARRAY LITERAL
const arrOne = new Set(days);
console.log(arrOne);

const arrTwo = days.filter((item, index) => days.indexOf(item) == index);
console.log(arrTwo);


// REMOVE DUPLICATE FOR ARRAY OBJECT
const arrObjOne = [...new Map(person.map(item => [JSON.stringify(item), item])).values()];
console.log(arrObjOne);

const arrObjTwo = Array.from(new Set(person.map(JSON.stringify))).map(JSON.parse);
console.log(arrObjTwo);