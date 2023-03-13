const userInput = prompt("Skriv in ett nummer")
const count = Number(userInput)

for (let i = 0; i < count && i < 10; ++i) {
    const p = document.createElement('p')
    p.innerText = "Hejsan"
    document.body.append(p)
}

