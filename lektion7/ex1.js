
let data = [1,2,3,4,5,6,7]

function sumOfList(list) {
    let sum = 0;
    for (const num of list) {
        sum += num
    }
    return sum
}

function sumOfList2(list) {
    return list.reduce((acc, num) => acc + num, 0)
}

console.log(sumOfList(data))
console.log(sumOfList2(data))
