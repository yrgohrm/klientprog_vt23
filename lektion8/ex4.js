let pCollection = document.getElementsByTagName("p")
let pList = Array.from(pCollection)

let empty = pList.filter(p => p.innerText === "")

console.log(empty.length)