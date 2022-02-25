a = [{ id: 1, name: "Stephen covey" }, { id: 2, name: "Robin Sharma" }, { id: 3, name: "Tolstoy" }, { id: 3, name: "Tolstoy" }, { id: 5, name: "James clear" }]
b = []

let c = a.filter((value, index) => a.indexOf(value.id) == index)
console.log(c);