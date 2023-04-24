class User {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

const users = [
    new User('Mike Loseke', 1),
    new User('Eliza Tom', 2),
    new User('Wang Xiu Ying', 3),
    new User('Mats Svensson', 4),
]

const hobbies = {
    1: 'Chess',
    2: 'Trial',
    3: 'Fishing',
    4: 'Fencing'
}

export { users, hobbies }
