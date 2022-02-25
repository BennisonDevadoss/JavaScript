let people = [{ id: 1, name: "edison" }, { id: 2, name: "Annand" }, { id: 3, name: "Vasnath" }, { id: 3, name: "benni" }, { id: 1, name: "karthi" }]

let a = people.reduce((key, value) => {
    if (key[value.id] === NaN) {
        key[value.id] = 1;
    }
    else {
        key[value.id] = key[value.id] + 1;
    }

    return key;
}, {})

console.log(a); 