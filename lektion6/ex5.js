// for (let i = 1; i <= 100; i++) {
//     const p = document.createElement('p')

//     if (i % 15 === 0) {
//         p.innerText = "FizzBuzz"
//     }
//     else if (i % 5 === 0) {
//         p.innerText = "Fizz"
//     }
//     else if (i % 3 === 0) {
//         p.innerText = "Buzz"
//     }
//     else {
//         p.innerText = String(i)
//     }

//     document.body.append(p)    
// }

for (let i = 1; i <= 100; i++) {
    const p = document.createElement('p')

    p.innerText = ((["Fizz"][i%5] || "") + (["Buzz"][i%3] || "")) || i

    document.body.append(p)    
}
