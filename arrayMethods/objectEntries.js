/* Object.entries */

const obj = {
    name: "Bennison Devadoss",
    age: 21
};

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}

/* 
Expected Output 
name: Bennison Devadoss
age: 21
*/


/* Syntax
Object.entries(obj)*/