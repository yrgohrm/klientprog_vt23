function hejsan() {
    console.log("Hejsan Node.js")
}

for (let i = 0; i < 3; ++i) {
    hejsan()
}

let foo = [1, 2, 3]

for (const num of foo) {
    console.log(num + 2)
}
