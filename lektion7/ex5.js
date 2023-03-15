
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    printInfo() {
        console.log(this.firstName, this.lastName)
    }

    greet() {
        console.log("Hejsan", this.firstName)
    }
}

class Employee extends Person {
    constructor(firstName, lastName, company) {
        super(firstName, lastName)
        this.company = company
    }

    printInfo() {
        super.printInfo()
        console.log("Arbetsplats:", this.company)
    }

    greet() {
        console.log("Goddag", this.firstName)
    }
}

let nisse = new Person("Nisse", "Nilsson")
nisse.greet()
nisse.printInfo()


const aTeacher = new Employee('John', 'Doe', 'Yrgo')
aTeacher.printInfo()
aTeacher.greet()