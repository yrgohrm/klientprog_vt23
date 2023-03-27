function foo() {
    return brewCoffe()
    .then(coffe => {
        console.log(coffe)
    }).catch(err => {
        console.log('error: '+err)
    }).finally(() => {
        console.log('klart')
    })
}

async function bar() {
    try {
        const coffe = await brewCoffe()
        console.log(coffe)
    }
    catch (err) {
        console.log('error: ' + err)
    }
    finally {
        console.log('klart')
    }
}

foo()
bar()