/* Using arrow function and destructuring */

const details = [
    {
        name: "Bennison Devadoss",
        age: 21
    },
    {
        name: "Edison Devadoss",
        age: 25
    },
    {
        name: "Billian",
        age: 25
    }
]

const found = details.find((value) => value.name === "Billian");
console.log(found);

/* Using arrow function and destructuring */
const found1 = details.find(({ name }) => name === "Bennison Devadoss");
console.log(found1);
/* in the above 22th and 23th line, we have wrote a logic by using destructing method */

/*  */