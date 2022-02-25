const person = {
    firstName: "Bennison",
    SecondName: "Devadoss",
    fullName: () => {
        console.log(this)
        console.log(`${this.firstName} ${this.SecondName}`)
    }
}

const call = person.fullName; 

call.bind(person)()