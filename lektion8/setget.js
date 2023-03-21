class Car {
    #regNo

    constructor(regNo) {
        this.#regNo = regNo
    }

    set reg(num) {
        console.log("nu sätter vi regnummer")
        this.#regNo = num
    }

    get reg() {
        console.log("nu hämtar vi regnummer")
        return this.#regNo
    }
}


const ank = new Car("ANK313")

ank.reg = "KAN131"
console.log(ank.reg)
Q